# 高校英語 小テスト作成アプリ — GitHub Pages 公開手順

塾内の全PCからブラウザで使えるようにする設定手順です。

---

## 手順1：GitHubリポジトリを作成

1. [github.com](https://github.com) にログイン
2. 右上の「+」→「New repository」をクリック
3. 以下を入力：
   - **Repository name**: `highschool-english-quiz`
   - **Public**（無料でPages公開するため必須）
   - 「Create repository」をクリック

---

## 手順2：ファイルをアップロード

### 方法A：ブラウザからドラッグ＆ドロップ（簡単）

1. 作成したリポジトリのページを開く
2. 「uploading an existing file」リンクをクリック
3. 以下のファイルをドラッグ＆ドロップ：
   - `index.html`
   - `questions.js`
   - `.gitignore`
   - ※ `extract_questions.py` もアップロードしてOK
   - ※ **PDFは著作権の関係でアップロード不可**
4. 「Commit changes」をクリック

### 方法B：Git コマンドライン

```bash
cd <このフォルダのパス>
git init
git add index.html questions.js .gitignore extract_questions.py README_github.md
git commit -m "初回コミット：高校英語小テスト作成アプリ"
git branch -M main
git remote add origin https://github.com/<あなたのユーザー名>/highschool-english-quiz.git
git push -u origin main
```

---

## 手順3：GitHub Pagesを有効にする

1. リポジトリの「**Settings**」タブをクリック
2. 左メニューの「**Pages**」をクリック
3. 「**Branch**」を `main` に設定し、フォルダを `/ (root)` に設定
4. 「**Save**」をクリック
5. 数分後、以下のURLでアクセスできるようになります：
   ```
   https://<ユーザー名>.github.io/highschool-english-quiz/
   ```

---

## 手順4：塾内PCで使う

- 上記URLをブラウザのブックマーク/ホーム画面に登録
- インターネット接続があれば塾内の全PCで使えます
- **APIキーの設定は各PCで個別に行う**（「設定」タブから入力）

---

## PDFから問題を抽出する（オプション）

テキスト抽出スクリプトを使うと、教科書PDFの問題を自動でアプリに取り込めます。

```bash
# 1. 必要なライブラリをインストール
pip install pymupdf requests

# 2. スクリプトを実行（Gemini APIキーが必要）
python extract_questions.py --api-key AIzaSy...

# ページを指定して実行する場合：
python extract_questions.py --api-key AIzaSy... --pages 1-30
```

実行後に生成された `questions.js` をGitHubにアップロードし直せば、
PDF内の問題がアプリで使えるようになります。

**Gemini APIキーの取得方法：**
1. [Google AI Studio](https://aistudio.google.com) にアクセス
2. Googleアカウントでログイン
3. 「Get API key」→「Create API key」
4. 表示されたキー（`AIzaSy...`）をコピー

---

## 更新方法

問題を追加・修正したら：

```bash
git add questions.js
git commit -m "問題を追加"
git push
```

数分後に自動的にGitHub Pagesに反映されます。
