#!/usr/bin/env powershell

# Script para hacer push a GitHub

Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  SUBIENDO CÓDIGO A GITHUB" -ForegroundColor Green
Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Ir al directorio del proyecto
$projectPath = "C:\Users\mmbal\WebstormProjects\lista_de_tareas"
Write-Host "Navegando a: $projectPath" -ForegroundColor Yellow
cd $projectPath

# Verificar estado
Write-Host ""
Write-Host "Verificando estado del repositorio..." -ForegroundColor Yellow
Write-Host ""
git status

# Verificar remote
Write-Host ""
Write-Host "Verificando remote configurado..." -ForegroundColor Yellow
git remote -v

# Hacer push
Write-Host ""
Write-Host "Iniciando push a GitHub..." -ForegroundColor Cyan
Write-Host ""

git push -u origin main

Write-Host ""
Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  ¡PUSH COMPLETADO!" -ForegroundColor Green
Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "Verifica en: https://github.com/mmbalbas1132/kanban-board" -ForegroundColor Yellow

