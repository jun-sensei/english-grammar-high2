$folder = "h:\共有ドライブ\数研ゼミ共有\【AI】塾のツール開発フォルダ\高校英語"
Set-Location $folder

Remove-Item ".git\index.lock" -Force -ErrorAction SilentlyContinue
Remove-Item ".git\refs\heads\main.lock" -Force -ErrorAction SilentlyContinue

git add index.html questions.js

$diff = git diff --cached --name-only 2>$null
if (-not $diff) { exit 0 }

$ts = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit -m "auto-update $ts"
git push origin main
