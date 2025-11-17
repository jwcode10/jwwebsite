# Keep Server Running - Fix Connection Error

## The Problem
When you **close the PowerShell window**, the server process stops, causing Error -102 (Connection Refused).

## Why This Happens
- The dev server runs as a process in the PowerShell window
- Closing the window terminates the process
- The server stops listening on port 3000
- Browser can't connect → Error -102

## Solutions

### Solution 1: Keep Window Open (Easiest)
**Don't close the PowerShell window!** Instead:
1. **Minimize** the window (click the minimize button)
2. The server keeps running in the background
3. You can close it later when you're done

### Solution 2: Use the Batch File
Double-click `START_SERVER.bat`:
- Opens a window that shows server status
- Keep this window open (minimize it)
- Server runs until you press Ctrl+C or close it

### Solution 3: Run in Background (Advanced)
Run this command in PowerShell:
```powershell
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'C:\Users\SK\Desktop\Cursor\Test Project'; npm.cmd run dev" -WindowStyle Minimized
```

The server will run in a minimized window.

### Solution 4: Use PM2 (Persistent Process Manager)
Install PM2 globally:
```powershell
npm.cmd install -g pm2
```

Start server with PM2:
```powershell
pm2 start npm --name "nextjs" -- run dev
```

Server runs in background. To stop:
```powershell
pm2 stop nextjs
pm2 delete nextjs
```

## Quick Reference

### Start Server
- **Option A**: Double-click `START_SERVER.bat`
- **Option B**: Run `npm.cmd run dev` in PowerShell (keep window open)

### Stop Server
- Press `Ctrl+C` in the server window
- Or run: `Get-Process | Where-Object {$_.ProcessName -eq "node"} | Stop-Process`

### Check if Server is Running
```powershell
netstat -ano | findstr :3000
```

If you see output, server is running!

## Remember
**The server must keep running for your site to work!**
- ✅ Minimize the window
- ✅ Keep it running in background
- ❌ Don't close the window




