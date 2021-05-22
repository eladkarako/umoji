@echo off
chcp 65001 1>nul 2>nul
pushd "%~sdp0\.."

del /f /q *.sha256

pause
popd
exit /b 0