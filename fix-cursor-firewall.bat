@echo off
echo ========================================
echo Fixing Cursor IDE Connection Error
echo ========================================
echo.
echo This script will:
echo 1. Add Cursor to Windows Firewall
echo 2. Flush DNS cache
echo.
echo Please run this as Administrator!
echo.
pause

echo.
echo Adding Cursor to Windows Firewall...
netsh advfirewall firewall delete rule name="Cursor IDE" >nul 2>&1
netsh advfirewall firewall add rule name="Cursor IDE" dir=out action=allow program="C:\Program Files\cursor\Cursor.exe" enable=yes
netsh advfirewall firewall add rule name="Cursor IDE (Inbound)" dir=in action=allow program="C:\Program Files\cursor\Cursor.exe" enable=yes

if %errorlevel% equ 0 (
    echo [SUCCESS] Cursor added to Windows Firewall!
) else (
    echo [ERROR] Failed to add firewall rule. Please run as Administrator.
    pause
    exit /b 1
)

echo.
echo Flushing DNS cache...
ipconfig /flushdns >nul 2>&1
echo [SUCCESS] DNS cache flushed!

echo.
echo ========================================
echo Fixes Applied!
echo ========================================
echo.
echo Next steps:
echo 1. Restart Cursor IDE completely
echo 2. Check if the connection error is resolved
echo.
pause




