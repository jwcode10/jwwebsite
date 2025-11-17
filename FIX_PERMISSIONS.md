# Fix Permission Error (EPERM) and Start Server

## The Problem
You're getting permission errors (EPERM) when trying to install/update dependencies. This happens when files are locked by other processes.

## Solution Steps

### Step 1: Close All Programs
Close these programs that might be locking files:
- VS Code / Cursor (if you have the project open)
- Any terminal windows
- File Explorer windows showing the project folder
- Any antivirus software scanning the folder

### Step 2: Run as Administrator
1. Right-click on PowerShell or Command Prompt
2. Select "Run as Administrator"
3. Navigate to your project:
   ```powershell
   cd "C:\Users\SK\Desktop\Cursor\Test Project"
   ```

### Step 3: Clean Install
Run these commands one at a time:

```powershell
# Remove node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

# Clear npm cache
npm.cmd cache clean --force

# Install dependencies
npm.cmd install
```

### Step 4: Start Server
```powershell
npm.cmd run dev
```

## Alternative: Use the Batch File

I've created `install-and-start.bat` - double-click it to install and start automatically.

## If Still Having Issues

1. **Check for locked files:**
   - Use Process Explorer or Resource Monitor to find what's locking the files
   - Restart your computer if needed

2. **Try a different approach:**
   ```powershell
   # Use yarn instead of npm
   npm.cmd install -g yarn
   yarn install
   yarn dev
   ```

3. **Check antivirus:**
   - Temporarily disable antivirus
   - Add the project folder to exclusions
   - Try installing again

## Quick Test
After installation, test if Next.js works:
```powershell
npx.cmd next --version
```

If this works, then run:
```powershell
npm.cmd run dev
```


