"""
PDF問題抽出スクリプト
高校リード問題集 英語Ⅰ（スキャン画像PDF）からGemini Vision APIを使って
問題を抽出し、questions.js形式に追記します。

使用方法:
  python extract_questions.py --api-key AIzaSy... [--pages 1-10] [--start-page 1]

必要なライブラリ:
  pip install pymupdf requests
"""

import argparse
import base64
import json
import re
import sys
import time
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print("PyMuPDFが見つかりません。pip install pymupdf でインストールしてください。")
    sys.exit(1)

try:
    import requests
except ImportError:
    print("requestsが見つかりません。pip install requests でインストールしてください。")
    sys.exit(1)

PDF_PATH = Path(__file__).parent / "高校リード問題集　英語Ⅰ.pdf"
OUTPUT_JS = Path(__file__).parent / "questions.js"

UNIT_MAP = {
    "文型": "gram_basic",
    "5文型": "gram_basic",
    "品詞": "gram_basic",
    "時制": "gram_tense",
    "現在完了": "gram_perfect",
    "過去完了": "gram_perfect",
    "助動詞": "gram_modal",
    "不定詞": "gram_infinitive",
    "動名詞": "gram_gerund",
    "分詞": "gram_participle",
    "関係": "gram_relative",
    "受動態": "gram_passive",
    "比較": "gram_comparison",
    "接続詞": "gram_conjunction",
    "仮定法": "gram_subjunctive",
}

PROMPT_TEMPLATE = """あなたは高校英語の問題解析の専門家です。
この画像は高校英語の問題集のページです。
ページに含まれる英語の問題を、すべて以下のJSON配列形式で出力してください。
コードブロック・説明文は一切不要です。JSONのみを出力してください。

[
  {{
    "unit_hint": "この問題が属する文法単元（例：仮定法、現在完了、不定詞、比較など）",
    "diff": 1か2か3（1=基礎, 2=標準, 3=発展）,
    "type": "mc"か"fill"（mc=4択選択肢, fill=空欄補充・和文英訳）,
    "q": "問題文（空欄は（　）で表現）",
    "c": ["正解", "誤答1", "誤答2", "誤答3"],
    "exp": "解説（文法的な根拠を含む）"
  }}
]

注意:
- 問題が見当たらない場合は空配列 [] を返す
- cの最初の要素(c[0])は必ず正解
- 問題が4択でない場合は最低限c[0]に正解を入れ、c[1]以降は推測の誤答でOK
- 問題文・選択肢が英語の場合はそのまま英語で記述
- 解説は省略せず、なぜその答えになるかを日本語で説明"""


def pdf_page_to_base64(doc: fitz.Document, page_num: int, dpi: int = 200) -> str:
    page = doc[page_num]
    mat = fitz.Matrix(dpi / 72, dpi / 72)
    pix = page.get_pixmap(matrix=mat)
    img_bytes = pix.tobytes("png")
    return base64.b64encode(img_bytes).decode("utf-8")


def call_gemini_vision(api_key: str, image_b64: str) -> list[dict]:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={api_key}"
    body = {
        "contents": [{
            "parts": [
                {"text": PROMPT_TEMPLATE},
                {"inline_data": {"mime_type": "image/png", "data": image_b64}}
            ]
        }],
        "generationConfig": {"temperature": 0.2, "maxOutputTokens": 4096}
    }
    resp = requests.post(url, json=body, timeout=60)
    resp.raise_for_status()
    data = resp.json()
    text = data["candidates"][0]["content"]["parts"][0]["text"]

    # JSON配列を抽出
    match = re.search(r'\[[\s\S]*?\]', text)
    if not match:
        return []
    return json.loads(match.group(0))


def guess_unit(unit_hint: str) -> str:
    for keyword, unit_id in UNIT_MAP.items():
        if keyword in unit_hint:
            return unit_id
    return "gram_basic"


def questions_to_js_entries(questions: list[dict]) -> list[str]:
    entries = []
    for q in questions:
        unit_id = guess_unit(q.get("unit_hint", ""))
        diff = int(q.get("diff", 2))
        qtype = q.get("type", "mc")
        question = q.get("q", "").replace('"', '\\"').replace('\n', ' ')
        choices = q.get("c", ["", "", "", ""])
        # 4択に満たない場合は埋める
        while len(choices) < 4:
            choices.append("（選択肢なし）")
        choices_js = json.dumps(choices, ensure_ascii=False)
        exp = q.get("exp", "").replace('"', '\\"').replace('\n', ' ')
        entry = (
            f'{{unit:"{unit_id}",diff:{diff},type:"{qtype}",'
            f'q:"{question}",c:{choices_js},'
            f'exp:"{exp}",source:"pdf"}}'
        )
        entries.append(entry)
    return entries


def parse_page_range(s: str, total: int) -> list[int]:
    pages = []
    for part in s.split(','):
        if '-' in part:
            start, end = part.split('-', 1)
            pages.extend(range(int(start) - 1, min(int(end), total)))
        else:
            n = int(part) - 1
            if 0 <= n < total:
                pages.append(n)
    return pages


def main():
    parser = argparse.ArgumentParser(description="PDF問題抽出ツール")
    parser.add_argument("--api-key", required=True, help="Gemini APIキー")
    parser.add_argument("--pages", default="all", help="処理するページ範囲（例: 1-20, all）")
    parser.add_argument("--dpi", type=int, default=200, help="画像解像度（デフォルト200）")
    parser.add_argument("--delay", type=float, default=2.0, help="API呼び出し間隔（秒）")
    args = parser.parse_args()

    if not PDF_PATH.exists():
        print(f"PDFが見つかりません: {PDF_PATH}")
        sys.exit(1)

    doc = fitz.open(str(PDF_PATH))
    total_pages = doc.page_count
    print(f"PDF読み込み完了: {total_pages}ページ")

    if args.pages == "all":
        page_indices = list(range(total_pages))
    else:
        page_indices = parse_page_range(args.pages, total_pages)
    print(f"処理対象: {len(page_indices)}ページ")

    all_entries = []
    for i, page_idx in enumerate(page_indices):
        print(f"  ページ {page_idx + 1} を処理中... ({i+1}/{len(page_indices)})", end="", flush=True)
        try:
            b64 = pdf_page_to_base64(doc, page_idx, args.dpi)
            questions = call_gemini_vision(args.api_key, b64)
            entries = questions_to_js_entries(questions)
            all_entries.extend(entries)
            print(f" {len(questions)}問抽出")
        except Exception as e:
            print(f" エラー: {e}")
        if i < len(page_indices) - 1:
            time.sleep(args.delay)

    doc.close()

    if not all_entries:
        print("抽出された問題がありません。")
        return

    # questions.js に追記（既存のQUESTION_BANKの末尾に挿入）
    if OUTPUT_JS.exists():
        content = OUTPUT_JS.read_text(encoding="utf-8")
        # 最後の ]; を見つけて手前に挿入
        last_bracket = content.rfind('];')
        if last_bracket != -1:
            insertion = "\n// --- PDF抽出問題 ---\n" + ",\n".join(all_entries) + ",\n"
            new_content = content[:last_bracket] + insertion + content[last_bracket:]
            OUTPUT_JS.write_text(new_content, encoding="utf-8")
            print(f"\n{len(all_entries)}問を {OUTPUT_JS.name} に追記しました。")
        else:
            print("questions.jsのフォーマットが予期しない形式です。別ファイルに保存します。")
            fallback = OUTPUT_JS.parent / "pdf_questions_extracted.js"
            fallback.write_text(
                "// PDF抽出問題\nconst PDF_QUESTIONS = [\n" +
                ",\n".join(all_entries) + "\n];\n",
                encoding="utf-8"
            )
            print(f"{fallback.name} に保存しました。")
    else:
        OUTPUT_JS.write_text(
            "const QUESTION_BANK = [\n" + ",\n".join(all_entries) + "\n];\n",
            encoding="utf-8"
        )
        print(f"{len(all_entries)}問を {OUTPUT_JS.name} に書き出しました。")


if __name__ == "__main__":
    main()
