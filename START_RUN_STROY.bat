@echo off
title Token Animator
cd /d "%~dp0Binaries"

echo.
echo =================================
echo  Token Animator
echo =================================
echo.

:: ─── Step 1: Check / download FFmpeg libs ───────────────────────────────────
if not exist lib mkdir lib

if not exist lib\ffmpeg-core.wasm (
    echo [Setup] FFmpeg not found. Downloading ^(~31 MB, one-time only^)...
    echo.

    echo [1/5] ffmpeg.js
    curl -L -# -o "lib\ffmpeg.js" "https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/umd/ffmpeg.js"
    if %errorlevel% neq 0 goto :download_error

    echo [2/5] 814.ffmpeg.js
    curl -L -# -o "lib\814.ffmpeg.js" "https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/umd/814.ffmpeg.js"
    if %errorlevel% neq 0 goto :download_error

    echo [3/5] ffmpeg-util.js
    curl -L -# -o "lib\ffmpeg-util.js" "https://cdn.jsdelivr.net/npm/@ffmpeg/util@0.12.1/dist/umd/index.js"
    if %errorlevel% neq 0 goto :download_error

    echo [4/5] ffmpeg-core.js
    curl -L -# -o "lib\ffmpeg-core.js" "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js"
    if %errorlevel% neq 0 goto :download_error

    echo [5/5] ffmpeg-core.wasm ^(~30 MB, please wait^)...
    curl -L -# -o "lib\ffmpeg-core.wasm" "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.wasm"
    if %errorlevel% neq 0 goto :download_error

    echo.
    echo [Setup] Done! Libraries saved to lib\
    echo.
) else (
    echo [Setup] FFmpeg OK ^(lib\ cached^)
    echo.
)

:: ─── Step 2: Open browser + start server ────────────────────────────────────
echo [Server] http://localhost:3000
echo [Server] Stop: Ctrl+C or close this window
echo.

start http://localhost:3000/?v=6

python --version >nul 2>&1
if %errorlevel% equ 0 (
    python server.py
    goto :done
)

python3 --version >nul 2>&1
if %errorlevel% equ 0 (
    python3 server.py
    goto :done
)

node --version >nul 2>&1
if %errorlevel% equ 0 (
    node server.js
    goto :done
)

echo ERROR: Python or Node.js not found.
echo Install Python from: https://www.python.org/downloads/
goto :done

:download_error
echo.
echo ERROR: Download failed. Check internet connection.
if exist lib\ffmpeg-core.wasm del lib\ffmpeg-core.wasm
goto :done

:done
pause
