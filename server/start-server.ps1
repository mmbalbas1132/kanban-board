# Script para iniciar MariaDB y el backend Spring Boot

Write-Host "🚀 Iniciando entorno Kanban..." -ForegroundColor Green

# Verificar si MariaDB ya está corriendo
$mariadbProcess = Get-Process -Name "mariadbd" -ErrorAction SilentlyContinue

if ($null -eq $mariadbProcess) {
    Write-Host "⚙️  Iniciando MariaDB..." -ForegroundColor Yellow
    Start-Process -FilePath "C:\Program Files\MariaDB 12.2\bin\mariadbd.exe" -ArgumentList "--console" -WindowStyle Minimized
    Start-Sleep -Seconds 3
    Write-Host "✅ MariaDB iniciado" -ForegroundColor Green
} else {
    Write-Host "✅ MariaDB ya está corriendo" -ForegroundColor Green
}

# Configurar JAVA_HOME
$env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-17.0.18.8-hotspot"

# Cambiar al directorio del proyecto
Set-Location -Path "C:\Users\mmbal\WebstormProjects\lista_de_tareas\server"

Write-Host "⚙️  Iniciando backend Spring Boot..." -ForegroundColor Yellow
Write-Host "📍 Backend estará disponible en: http://localhost:8080" -ForegroundColor Cyan
Write-Host "🔍 Health check: http://localhost:8080/api/health" -ForegroundColor Cyan
Write-Host ""

# Iniciar backend
.\mvnw.cmd spring-boot:run

