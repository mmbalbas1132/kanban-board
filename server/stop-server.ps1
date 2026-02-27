# Script para detener MariaDB y el backend Spring Boot

Write-Host "`n🛑 Deteniendo entorno Kanban..." -ForegroundColor Yellow

# Detener procesos de Spring Boot (Java)
$javaProcesses = Get-Process -Name "java" -ErrorAction SilentlyContinue | Where-Object { $_.Path -like "*jdk-17*" }
if ($javaProcesses) {
    Write-Host "⚙️  Deteniendo backend Spring Boot..." -ForegroundColor Yellow
    $javaProcesses | Stop-Process -Force
    Write-Host "✅ Backend detenido" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Backend no está corriendo" -ForegroundColor Gray
}

# Detener MariaDB
$mariadbProcess = Get-Process -Name "mariadbd" -ErrorAction SilentlyContinue
if ($mariadbProcess) {
    Write-Host "⚙️  Deteniendo MariaDB..." -ForegroundColor Yellow
    $mariadbProcess | Stop-Process -Force
    Start-Sleep -Seconds 2
    Write-Host "✅ MariaDB detenido" -ForegroundColor Green
} else {
    Write-Host "ℹ️  MariaDB no está corriendo" -ForegroundColor Gray
}

Write-Host "`n✅ Entorno detenido correctamente`n" -ForegroundColor Green

