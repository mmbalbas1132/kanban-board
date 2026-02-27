# 🚀 Kanban Server - Backend Spring Boot

Backend REST API para el tablero Kanban con persistencia en base de datos.

---

## ⚡ Inicio Rápido

### Requisitos Previos
- Java 11+
- Maven 3.6+
- MySQL 8.0+ (opcional, usa H2 en memoria por defecto)

### Ejecutar el Servidor

**Opción 1: Script PowerShell**
```powershell
.\start-server.ps1
```

**Opción 2: Maven**
```bash
mvn spring-boot:run
```

**Opción 3: JAR compilado**
```bash
mvn clean package
java -jar target/kanban-server-0.1.0.jar
```

El servidor estará disponible en: **http://localhost:8080**

---

## 🌐 Endpoints Disponibles

### Health Check
- `GET /api/health` - Estado del servidor

### CRUD de Tareas
- `GET /api/tareas` - Listar todas las tareas
- `GET /api/tareas/{id}` - Obtener tarea por ID
- `POST /api/tareas` - Crear nueva tarea
- `PUT /api/tareas/{id}` - Actualizar tarea completa
- `PATCH /api/tareas/{id}/estado` - Cambiar estado de tarea
- `DELETE /api/tareas/{id}` - Eliminar una tarea
- `DELETE /api/tareas/completadas` - Eliminar todas las completadas

### Filtros y Búsqueda
- `GET /api/tareas?estado=PENDIENTE` - Filtrar por estado
- `GET /api/tareas?prioridad=ALTA` - Filtrar por prioridad
- `GET /api/tareas?categoria=TRABAJO` - Filtrar por categoría

---

## 🧪 Pruebas de API

### Con REST Client (VS Code)
```
Abre: requests/kanban-api.http
Edita http-client.env.json si es necesario
Ejecuta cada request con ▶️ o Ctrl+Alt+R
```

### Con cURL
```bash
# Listar tareas
curl http://localhost:8080/api/tareas

# Crear tarea
curl -X POST http://localhost:8080/api/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Mi tarea","prioridad":"ALTA"}'

# Cambiar estado
curl -X PATCH http://localhost:8080/api/tareas/1/estado \
  -H "Content-Type: application/json" \
  -d '{"estado":"EN_CURSO"}'
```

---

## 📁 Estructura del Proyecto

```
server/
├── pom.xml                      # Configuración Maven
├── src/main/
│   ├── java/com/kanban/
│   │   ├── KanbanServerApplication.java     # Aplicación principal
│   │   ├── api/                 # Controladores API adicionales
│   │   ├── controller/          # Controladores REST
│   │   ├── service/             # Lógica de negocio
│   │   ├── repository/          # Acceso a datos JPA
│   │   ├── model/               # Entidades y Enums
│   │   ├── dto/                 # Data Transfer Objects
│   │   ├── exception/           # Manejo de excepciones
│   │   └── config/              # Configuración CORS, etc.
│   └── resources/
│       ├── application.yaml     # Configuración Spring Boot
│       ├── static/              # Frontend estático (CSS, JS)
│       ├── templates/           # HTML templates
│       └── sql/                 # Scripts de base de datos
├── requests/                    # Ejemplos de API (HTTP Client)
└── sql/                         # Scripts SQL iniciales
```

---

## ⚙️ Configuración

### Archivo: `src/main/resources/application.yaml`

**Configuración por defecto (H2 en memoria):**
- No requiere configuración adicional
- Perfecta para desarrollo
- Los datos se pierden al reiniciar

**Para usar MySQL:**
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/kanban_db
    username: root
    password: tu_contraseña
  jpa:
    hibernate:
      ddl-auto: update
```

---

## 🛠️ Tecnologías Utilizadas

- **Java 11+**: Lenguaje de programación
- **Spring Boot 3.x**: Framework web
- **Spring Data JPA**: ORM
- **MySQL/H2**: Base de datos
- **Maven**: Gestor de dependencias
- **Lombok**: Generación de código

---

## 🐛 Solución de Problemas

### Puerto 8080 ya en uso
```bash
# En Windows (PowerShell)
Get-NetTCPConnection -LocalPort 8080 | Stop-Process

# En Linux/Mac
lsof -ti:8080 | xargs kill -9
```

### Error de conexión a base de datos
- Verifica que MySQL está corriendo
- Comprueba las credenciales en `application.yaml`
- Intenta usar H2 (configuración por defecto)

### Cambios en el código no se aplican
```bash
# Detén el servidor (Ctrl+C)
# Ejecuta de nuevo:
mvn clean spring-boot:run
```

---

## 📖 Más Información

Para más detalles sobre cómo usar la aplicación completa, consulta el `README.md` en la raíz del repositorio.

---

**Última actualización: Febrero 2026**


