@echo off
echo ========================================
echo Starting Next.js Dev Server
echo ========================================
echo.
echo IMPORTANT: Keep this window open!
echo Minimize it instead of closing it.
echo.
echo Server will be available at:
echo http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

cd /d "%~dp0"
call npm.cmd run dev

pause




