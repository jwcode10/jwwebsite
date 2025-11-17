# Fix Cursor IDE Connection Error
# Run this script as Administrator

Write-Host "Fixing Cursor IDE Connection Error..." -ForegroundColor Cyan

# Find Cursor executable
$cursorPaths = @(
    "$env:LOCALAPPDATA\Programs\cursor\Cursor.exe",
    "$env:ProgramFiles\Cursor\Cursor.exe",
    "$env:ProgramFiles(x86)\Cursor\Cursor.exe"
)

$cursorExe = $null
foreach ($path in $cursorPaths) {
    if (Test-Path $path) {
        $cursorExe = $path
        Write-Host "Found Cursor at: $cursorExe" -ForegroundColor Green
        break
    }
}

if (-not $cursorExe) {
    Write-Host "Cursor executable not found in standard locations." -ForegroundColor Yellow
    Write-Host "Please manually add Cursor to Windows Firewall:" -ForegroundColor Yellow
    Write-Host "1. Open Windows Defender Firewall" -ForegroundColor Yellow
    Write-Host "2. Click 'Allow an app through firewall'" -ForegroundColor Yellow
    Write-Host "3. Find Cursor and enable both Private and Public" -ForegroundColor Yellow
    exit
}

# Add firewall rule for Cursor
Write-Host "Adding Cursor to Windows Firewall..." -ForegroundColor Cyan

try {
    # Remove existing rule if it exists
    netsh advfirewall firewall delete rule name="Cursor IDE" 2>$null
    
    # Add new rule for outbound connections
    netsh advfirewall firewall add rule name="Cursor IDE" dir=out action=allow program="$cursorExe" enable=yes
    
    # Add rule for inbound connections (if needed)
    netsh advfirewall firewall add rule name="Cursor IDE (Inbound)" dir=in action=allow program="$cursorExe" enable=yes
    
    Write-Host "✓ Cursor added to Windows Firewall successfully!" -ForegroundColor Green
} catch {
    Write-Host "Error adding firewall rule: $_" -ForegroundColor Red
    Write-Host "Please add Cursor manually to Windows Firewall" -ForegroundColor Yellow
}

# Flush DNS
Write-Host "Flushing DNS cache..." -ForegroundColor Cyan
ipconfig /flushdns | Out-Null
Write-Host "✓ DNS cache flushed" -ForegroundColor Green

Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Restart Cursor IDE completely" -ForegroundColor Yellow
Write-Host "2. Check if connection error is resolved" -ForegroundColor Yellow
Write-Host "3. If still having issues, check antivirus settings" -ForegroundColor Yellow




