Set-Location $PSScriptRoot

if (Test-Path ".git\index.lock") {
    Remove-Item ".git\index.lock" -Force
}

git add index.html questions.js

$diff = git diff --cached --name-only
if (-not $diff) {
    Write-Host "No changes. Already up to date."
    Read-Host "Press Enter to exit"
    exit 0
}

$ts = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit -m "update $ts"
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Done. Synced to GitHub successfully."
} else {
    Write-Host "Error. Check the message above."
}

Read-Host "Press Enter to exit"
