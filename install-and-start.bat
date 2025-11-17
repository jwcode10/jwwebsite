@echo off
echo ========================================
echo Installing Dependencies and Starting Server
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm.cmd install
if errorlevel 1 (
    echo.
    echo ERROR: Installation failed!
    echo Please check the error messages above.
    pause
    exit /b 1
)

echo.
echo Step 2: Starting development server...
echo Server will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm.cmd run dev

pause


