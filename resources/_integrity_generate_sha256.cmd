::@echo off
chcp 65001 1>nul 2>nul
pushd "%~sdp0\.."


::════════════════════════════════════════════════════════════════════════════════════ (main)
for %%x in ( 
  "favicon.ico"
  "characters.json"
  "index.css"
  "index.js"
) do ( 
  call :METHOD__GENERATE_SUBRESOURCE_INTEGRITY %%x
)

goto END
::════════════════════════════════════════════════════════════════════════════════════


::════════════════════════════════════════════════════════════════════════════════════ (method)
:METHOD__GENERATE_SUBRESOURCE_INTEGRITY
  set "FILE_INPUT=%~1"
  set "FILE_OUTPUT=%~1.sha256"
  
  ::openssl dgst -sha256 -binary "%FILE_INPUT%" | openssl base64 -A >%FILE_OUTPUT%

  goto :EOF
::════════════════════════════════════════════════════════════════════════════════════


::════════════════════════════════════════════════════════════════════════════════════ (main's end)
:END
  pause
  popd
  exit /b 0
::════════════════════════════════════════════════════════════════════════════════════



:: ----------------------------------- related resources.
:: https://www.srihash.org/
:: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
::
:: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
:: https://developer.mozilla.org/en-US/docs/Web/API/Response

:: note:
::   you must make-sure the file EOL-character matches what the server serves, 
::   github-pages will convert the EOL from Windows to linux, 
::   this means that your Windows-generated-SHA256 is invalid.
::   either work with linux-EOL files, or don't use 'integrity=' attributes.
::------------------------------
