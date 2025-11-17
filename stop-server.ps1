# Stop Next.js server
Write-Host "Stopping Next.js server..." -ForegroundColor Yellow

$nodeProcesses = Get-Process | Where-Object {$_.ProcessName -eq "node"}
if ($nodeProcesses) {
    $nodeProcesses | Stop-Process -Force
    Write-Host "✓ Server stopped" -ForegroundColor Green
} else {
    Write-Host "No server processes found" -ForegroundColor Gray
}

# Check if port is still in use
Start-Sleep -Seconds 2
$portInUse = netstat -ano | findstr :3000
if ($portInUse) {
    Write-Host "⚠ Port 3000 is still in use. You may need to restart your computer." -ForegroundColor Yellow
} else {
    Write-Host "✓ Port 3000 is now free" -ForegroundColor Green
}




