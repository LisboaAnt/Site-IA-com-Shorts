@echo off
if not exist "node_modules" (
	start /min "" cmd /c "npm install"
	timeout /t 10 /nobreak >nul
)
start /min "" cmd /c "npm run web"
start /min "" cmd /c "npm run server"


REM Abrir a página web
timeout /t 2 /nobreak >nul
start "" http://localhost:5173/

REM Esconde os terminais
nircmd.exe win hide ititle "npm install"
nircmd.exe win hide ititle "npm run web"
nircmd.exe win hide ititle "npm run server"
