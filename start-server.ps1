# Start Development Server Script
# This script installs dependencies and starts the Next.js dev server

Write-Host "Checking Node.js installation..." -ForegroundColor Cyan
node --version
npm.cmd --version

Write-Host "`nChecking for dependencies..." -ForegroundColor Cyan
if (Test-Path "node_modules") {
    Write-Host "✓ Dependencies already installed" -ForegroundColor Green
} else {
    Write-Host "Installing dependencies (this may take a few minutes)..." -ForegroundColor Yellow
    npm.cmd install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ Installation failed. Please run 'npm.cmd install' manually." -ForegroundColor Red
        exit 1
    }
}

Write-Host "`nStarting development server..." -ForegroundColor Cyan
Write-Host "Server will be available at: http://localhost:3000" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server`n" -ForegroundColor Yellow

npm.cmd run dev

