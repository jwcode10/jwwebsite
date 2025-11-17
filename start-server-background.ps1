# Start Next.js server in background (keeps running even if window closes)
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "Starting Next.js server in background..." -ForegroundColor Green
Write-Host "Server will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "To stop the server, run: Get-Process | Where-Object {`$_.ProcessName -eq 'node'} | Stop-Process" -ForegroundColor Yellow
Write-Host ""

# Start server in background
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptPath'; npm.cmd run dev" -WindowStyle Minimized

Start-Sleep -Seconds 3

# Check if server started
$serverRunning = netstat -ano | findstr :3000
if ($serverRunning) {
    Write-Host "✓ Server started successfully!" -ForegroundColor Green
    Write-Host "Server is running in the background." -ForegroundColor Green
} else {
    Write-Host "⚠ Server may still be starting. Wait a few seconds and check http://localhost:3000" -ForegroundColor Yellow
}




