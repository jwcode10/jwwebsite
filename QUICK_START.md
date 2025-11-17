# Quick Start Guide - Fix Error -102

## Problem
Error Code: -102 (ERR_CONNECTION_REFUSED) means the development server is not running.

## Solution

### Step 1: Install Dependencies
Open PowerShell in this directory and run:
```powershell
npm.cmd install
```

**Note:** If you get execution policy errors, use `npm.cmd` instead of `npm`, or run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Step 2: Start the Development Server
After dependencies are installed, run:
```powershell
npm.cmd run dev
```

### Step 3: Open Your Browser
Once you see:
```
✓ Ready in X seconds
○ Local: http://localhost:3000
```

Open `http://localhost:3000` in your browser.

## Alternative: Use the Start Script

I've created a `start-server.ps1` script that does everything automatically:

```powershell
.\start-server.ps1
```

## Troubleshooting

### If npm install is slow or gets canceled:
- Be patient - first install can take 2-5 minutes
- Ensure you have a stable internet connection
- Try: `npm.cmd install --verbose` to see progress

### If port 3000 is already in use:
```powershell
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill the process (replace <PID> with the actual process ID)
taskkill /PID <PID> /F

# Or use a different port
npm.cmd run dev -- -p 3001
```

### If you see "node_modules not found":
Run `npm.cmd install` again and wait for it to complete.

## Current Status
- ✅ Node.js v24.11.1 is installed
- ✅ npm v11.6.2 is available
- ⚠️ **Dependencies are INCOMPLETE** - installation was interrupted
- ❌ Next.js is missing - need to reinstall dependencies

## ⚠️ IMPORTANT: Complete Installation Required

Your `node_modules` folder exists but is **incomplete**. The `next` command is missing because the installation was canceled.

**You MUST run `npm.cmd install` and let it complete fully (2-5 minutes). Do not cancel it!**

See `MANUAL_FIX.md` for detailed instructions.

