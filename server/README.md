# 🚀 Kanban Server - Backend Spring Boot

Backend REST API para el tablero Kanban con persistencia en MariaDB.

---

## ✅ ESTADO: COMPLETAMENTE CONFIGURADO Y FUNCIONANDO

- ✅ Java 17 + Maven Wrapper instalado
- ✅ MariaDB 12.2 corriendo en puerto 3306
- ✅ Base de datos `kanban_db` creada
- ✅ Backend Spring Boot corriendo en puerto 8080
- ✅ API REST completa implementada
- ✅ CORS configurado para frontend

---

## ⚡ INICIO RÁPIDO

### Iniciar todo el entorno
```powershell
.\start-server.ps1
```

### Detener todo
```powershell
.\stop-server.ps1
```

### Probar la API
```powershell
Invoke-WebRequest http://localhost:8080/api/health
Invoke-WebRequest http://localhost:8080/api/tareas
```

---

## 📚 DOCUMENTACIÓN DISPONIBLE

### 🎯 **CONFIGURACION_COMPLETADA.md** ⭐ LEER PRIMERO
Estado actual completo:
- ✅ Componentes instalados
- 🌐 Servicios corriendo
- 🔗 Endpoints disponibles
- 📝 Formato de datos
- 🧪 Ejemplos de pruebas

### 🚀 **GUIA_RAPIDA_USO.md**
Comandos y troubleshooting:
- ⚡ Scripts de inicio/parada
- 📋 Comandos Maven útiles
- 🗄️ Comandos MariaDB
- 🧪 Pruebas de API
- 🔧 Solución de problemas comunes

### 🔗 **PROXIMOS_PASOS_FRONTEND.md**
Guía de integración:
- 🔄 Migrar de localStorage a API REST
- 📝 Ejemplos de código fetch()
- 🎯 Diferencias frontend vs backend
- ✅ Checklist de migración
- 🧪 Plan de pruebas

### 📦 **REFERENCIA_MODELOS.md**
Código completo de referencia:
- 🗄️ Scripts SQL
- 🎯 Entidades y enums
- 📨 DTOs completos
- 🔄 Repository y queries
- 🌐 Controlador REST
- 🛡️ Exception handling

### 📖 **CONTEXTO_PROYECTO.md**
Contexto e historia:
- 🏗️ Arquitectura completa
- 📊 Modelo de datos
- 🔄 Plan de migración
- 💡 Decisiones técnicas

---

## 🌐 ENDPOINTS DISPONIBLES

### Base
- `GET /api/health` - Health check

### CRUD Tareas
- `GET /api/tareas` - Listar todas
- `GET /api/tareas/{id}` - Obtener por ID
- `POST /api/tareas` - Crear nueva
- `PUT /api/tareas/{id}` - Actualizar completa
- `PATCH /api/tareas/{id}/estado` - Cambiar estado
- `DELETE /api/tareas/{id}` - Eliminar una
- `DELETE /api/tareas/completadas` - Eliminar completadas

### Filtros
- `GET /api/tareas/estado/{estado}` - Por estado
- `GET /api/tareas/prioridad/{prioridad}` - Por prioridad
- `GET /api/tareas/categoria/{categoria}` - Por categoría
- `GET /api/tareas/buscar?texto=...` - Buscar por texto
- `GET /api/tareas/vencidas` - Tareas vencidas
- `GET /api/tareas/contar/{estado}` - Contar por estado

---

## 🧪 PRUEBAS

### Con IntelliJ HTTP Client
```
Abre: requests/kanban-api.http
Selecciona entorno: local
Ejecuta cada request con ▶️
```

### Con PowerShell
```powershell
# Crear tarea
$body = @{
    texto = "Mi tarea"
    estado = "pendiente"
    prioridad = "alta"
    categoria = "trabajo"
} | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:8080/api/tareas `
    -Method POST -Body $body -ContentType "application/json"

# 5. Ejecutar aplicación
Shift + F10
```

---

## 🛠️ Tecnologías

- **Java 17**
- **Spring Boot 3.2.3**
- **Spring Data JPA**
- **MariaDB**
- **Maven**

---

## 📡 Endpoints Principales

Ver **REFERENCIA_MODELOS.md** para lista completa de endpoints.

- `GET /api/tareas` - Listar todas
- `POST /api/tareas` - Crear nueva
- `PATCH /api/tareas/{id}/estado` - Cambiar estado
- `DELETE /api/tareas/{id}` - Eliminar

---

## ⚙️ Configuración de Base de Datos

Variables de entorno soportadas (con valores por defecto):

- `KANBAN_DB_URL` (por defecto: `jdbc:mariadb://localhost:3306/kanban_db`)
- `KANBAN_DB_USER` (por defecto: `root`)
- `KANBAN_DB_PASSWORD` (por defecto: configurar en application.yaml)

## Ejecutar

```powershell
cd C:\Users\mmbal\WebstormProjects\lista_de_tareas\server
mvn spring-boot:run
```

## Endpoint de salud

- `GET /api/health` -> `ok`

