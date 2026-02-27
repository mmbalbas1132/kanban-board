@echo off
REM Script para hacer push a GitHub automáticamente

title Subiendo Kanban Board a GitHub...

echo.
echo ====================================================
echo   SUBIENDO CODIGO A GITHUB
echo ====================================================
echo.

REM Ir al directorio del proyecto
cd /d "C:\Users\mmbal\WebstormProjects\lista_de_tareas"

REM Verificar estado
echo.
echo Verificando estado del repositorio...
echo.
git status

REM Verificar remote
echo.
echo.
echo Verificando remote...
git remote -v

REM Hacer push
echo.
echo.
echo ====================================================
echo   INICIANDO PUSH A GITHUB
echo ====================================================
echo.
echo Por favor, cuando se abra una ventana de navegador,
echo inicia sesion en GitHub con tu cuenta.
echo.

git push -u origin main

REM Resultado
echo.
echo.
echo ====================================================
if %ERRORLEVEL% EQU 0 (
    echo   ¡PUSH COMPLETADO EXITOSAMENTE!
    echo   Verifica en: https://github.com/mmbalbas1132/kanban-board
) else (
    echo   ERROR EN EL PUSH
    echo   Verifica tu conexion o autenticacion
)
echo ====================================================
echo.

pause

