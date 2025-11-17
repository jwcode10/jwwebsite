@echo off
echo Installing @tabler/icons-react...
call npm.cmd install @tabler/icons-react@^3.24.0
if errorlevel 1 (
    echo Installation failed. Trying full reinstall...
    call npm.cmd install
)
echo.
echo Done! Please restart your dev server.
pause


