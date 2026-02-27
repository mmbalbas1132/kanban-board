# 📋 Kanban Board - Aplicación de Gestión de Tareas

Una aplicación web completa para gestión de tareas tipo Kanban, construida con Spring Boot y MariaDB.

## 🚀 Características

- ✅ Crear, editar y eliminar tareas
- 🔄 Cambiar estados de tareas (PENDIENTE, EN_PROGRESO, COMPLETADO)
- ⚡ Asignar prioridades (BAJA, MEDIA, ALTA)
- 🎨 Interfaz web integrada con Thymeleaf
- 🔌 API REST completa
- 💾 Persistencia con MariaDB/MySQL

## 🛠️ Tecnologías

- **Backend**: Spring Boot 3.2.3
- **Base de datos**: MariaDB/MySQL
- **ORM**: Spring Data JPA / Hibernate
- **Frontend**: Thymeleaf, HTML5, CSS3, JavaScript
- **Build**: Maven
- **Java**: 17

## 📋 Requisitos Previos

- Java 17 o superior
- Maven 3.6+
- MariaDB 10.x o MySQL 8.x
- IntelliJ IDEA (recomendado) o cualquier IDE compatible

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/kanban-board.git
cd kanban-board/server
```

### 2. Configurar la base de datos

1. Crea la base de datos en MariaDB/MySQL:

```sql
CREATE DATABASE kanban_db;
```

2. Ejecuta los scripts SQL en orden:

```bash
# Primero el esquema
mysql -u root -p kanban_db < sql/01-schema.sql

# Luego los datos de prueba (opcional)
mysql -u root -p kanban_db < sql/02-complete-setup.sql
```

### 3. Configurar la aplicación

1. Copia el archivo de configuración de ejemplo:

```bash
cp src/main/resources/application.yaml.example src/main/resources/application.yaml
```

2. Edita `src/main/resources/application.yaml` y configura tu base de datos:

```yaml
spring:
  datasource:
    url: jdbc:mariadb://127.0.0.1:3306/kanban_db
    username: root
    password: TU_CONTRASEÑA_AQUI
```

**⚠️ IMPORTANTE**: Nunca subas `application.yaml` con contraseñas reales a GitHub. Usa `application.yaml.example` como plantilla.

### 4. Compilar y ejecutar

#### Opción A: Con Maven

```bash
# Compilar
mvn clean package

# Ejecutar
java -jar target/kanban-server-0.1.0.jar
```

#### Opción B: Con Maven Wrapper (Windows)

```bash
# Compilar
.\mvnw.cmd clean package

# Ejecutar
java -jar target/kanban-server-0.1.0.jar
```

#### Opción C: Con PowerShell Script

```powershell
.\start-server.ps1
```

#### Opción D: Desde IntelliJ IDEA

1. Abre el proyecto en IntelliJ IDEA
2. Espera a que Maven descargue las dependencias
3. Localiza `KanbanServerApplication.java`
4. Click derecho → Run 'KanbanServerApplication'

## 🌐 Uso

Una vez iniciado el servidor, accede a:

- **Interfaz Web**: http://localhost:8080
- **API REST**: http://localhost:8080/api/tareas
- **Health Check**: http://localhost:8080/api/health

## 📡 API Endpoints

### Tareas

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tareas` | Obtener todas las tareas |
| GET | `/api/tareas/{id}` | Obtener una tarea por ID |
| POST | `/api/tareas` | Crear una nueva tarea |
| PUT | `/api/tareas/{id}` | Actualizar una tarea |
| PATCH | `/api/tareas/{id}/estado` | Cambiar el estado de una tarea |
| DELETE | `/api/tareas/{id}` | Eliminar una tarea |

### Ejemplo de petición POST

```json
{
  "titulo": "Nueva tarea",
  "descripcion": "Descripción de la tarea",
  "estado": "PENDIENTE",
  "prioridad": "ALTA"
}
```

## 📁 Estructura del Proyecto

```
server/
├── src/
│   └── main/
│       ├── java/com/kanban/
│       │   ├── api/              # Health check
│       │   ├── config/           # Configuración (CORS, etc)
│       │   ├── controller/       # Controladores REST
│       │   ├── dto/              # DTOs para API
│       │   ├── exception/        # Manejo de excepciones
│       │   ├── model/            # Entidades JPA
│       │   ├── repository/       # Repositorios Spring Data
│       │   ├── service/          # Lógica de negocio
│       │   └── web/              # Controladores web
│       └── resources/
│           ├── application.yaml  # Configuración (NO SUBIR)
│           ├── static/           # CSS, JS
│           └── templates/        # Vistas Thymeleaf
├── sql/                          # Scripts SQL
├── requests/                     # Ejemplos de peticiones HTTP
├── pom.xml                       # Dependencias Maven
└── README.md
```

## 🧪 Testing con HTTP Client

El proyecto incluye archivos `.http` en la carpeta `requests/` para probar la API:

- `kanban-api.http`: Peticiones básicas
- `kanban-api-errors.http`: Casos de error

Úsalos con IntelliJ IDEA HTTP Client o extensiones similares.

## 🔧 Configuración Adicional

### Variables de entorno

Puedes usar variables de entorno en lugar de `application.yaml`:

```bash
export SPRING_DATASOURCE_URL=jdbc:mariadb://127.0.0.1:3306/kanban_db
export SPRING_DATASOURCE_USERNAME=root
export SPRING_DATASOURCE_PASSWORD=tu_password
```

### Cambiar puerto

Edita `application.yaml`:

```yaml
server:
  port: 9090
```

## 🐛 Solución de Problemas

### Error de conexión a la base de datos

- Verifica que MariaDB esté ejecutándose
- Confirma las credenciales en `application.yaml`
- Usa `127.0.0.1` en lugar de `localhost` si hay problemas

### Puerto 8080 ya en uso

```bash
# Windows: Encuentra y mata el proceso
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

### Maven no se descarga las dependencias

```bash
mvn clean install -U
```

## 📝 Scripts SQL

- `sql/01-schema.sql`: Crea la estructura de la base de datos
- `sql/02-complete-setup.sql`: Setup completo con datos de ejemplo

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

Tu Nombre - [GitHub](https://github.com/TU_USUARIO)

## 🙏 Agradecimientos

- Spring Boot Team
- Comunidad de código abierto

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!

