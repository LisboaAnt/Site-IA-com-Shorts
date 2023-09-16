@echo off
start /min "" cmd /c "npm run web"
start /min "" cmd /c "npm run server"
timeout /t 1 /nobreak >nul
start "" http://localhost:5173/
nircmd.exe win hide ititle "npm run web"
nircmd.exe win hide ititle "npm run server"
