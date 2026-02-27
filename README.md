# 📋 Tablero Kanban - Gestión de Tareas

Una aplicación web moderna de gestión de tareas utilizando el método Kanban, construida con **Spring Boot** (Backend) e integrada con HTML5, CSS3 y JavaScript vanilla (Frontend).

**🔗 Repositorio GitHub:** [mmbalbas1132/kanban-board](https://github.com/mmbalbas1132/kanban-board)

---

## 📂 Estructura del Proyecto

```
kanban-board/
└── server/                          # Backend + Frontend integrado
    ├── pom.xml                      # Configuración Maven
    ├── src/
    │   └── main/
    │       ├── java/com/kanban/     # Código Java (Spring Boot)
    │       │   ├── KanbanServerApplication.java
    │       │   ├── controller/      # Controladores REST
    │       │   ├── service/         # Lógica de negocio
    │       │   ├── repository/      # Acceso a datos
    │       │   ├── model/           # Entidades JPA
    │       │   └── dto/             # Data Transfer Objects
    │       └── resources/
    │           ├── application.yaml # Configuración Spring
    │           ├── static/          # Frontend estático (CSS, JS)
    │           │   ├── css/
    │           │   └── js/
    │           └── templates/       # HTML templates
    └── sql/                         # Scripts SQL para base de datos
```

---

## 🎯 Características

### ✨ Funcionalidades Principales

- **Tablero Kanban con 3 columnas:**
  - 📝 Pendiente: Tareas por hacer
  - ⚡ En Curso: Tareas en progreso
  - ✅ Completada: Tareas finalizadas

- **Sistema de Prioridades:**
  - 🔴 Alta
  - 🟡 Media
  - 🟢 Baja

- **Categorías/Etiquetas:**
  - 💼 Trabajo
  - 👤 Personal
  - 📚 Estudio
  - 🏠 Casa
  - ❤️ Salud
  - 📌 Otros

- **Fechas de Vencimiento:**
  - Asigna fechas límite a tus tareas
  - Recordatorios automáticos
  - Notificaciones para tareas próximas a vencer
  - Alertas para tareas vencidas
  - Indicadores visuales de urgencia

- **Buscador de Tareas:**
  - Búsqueda en tiempo real
  - Busca por texto de la tarea
  - Resultados instantáneos

- **Sistema de Filtros:**
  - Filtrar por prioridad
  - Filtrar por categoría
  - Filtrar por estado
  - Combinar múltiples filtros
  - Botón para limpiar todos los filtros

- **Exportación de Datos:**
  - 📄 Exportar a JSON (formato de datos)
  - 📊 Exportar a CSV (para Excel)
  - 📕 Exportar a PDF (vía HTML imprimible)
  - Conserva todas las propiedades de las tareas

- **Gestión de Tareas:**
  - Crear nuevas tareas
  - Editar tareas existentes
  - Mover tareas entre columnas
  - Eliminar tareas
  - Limpiar tareas completadas

- **Interfaz Moderna:**
  - 🌙 Modo oscuro/claro
  - 📱 Diseño responsive
  - 🎨 Interfaz intuitiva
  - ✨ Animaciones suaves

- **Características Avanzadas:**
  - 🎯 Validación de tareas duplicadas
  - 💾 Persistencia con localStorage
  - 🖱️ Drag and drop para mover tareas
  - 📊 Contadores en tiempo real
  - ⚡ Optimizado para rendimiento
  - 🔔 Notificaciones del navegador

---

## 🚀 Instalación y Uso

### ✅ Requisitos Previos

- **Java 11+** instalado
- **Maven 3.6+** instalado
- Base de datos **MySQL 8.0+** (opcional, puede usar H2 en memoria)

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/mmbalbas1132/kanban-board.git
cd kanban-board/server
```

### 2️⃣ Configurar la Base de Datos

Opción A: Usar H2 en memoria (por defecto)
- No requiere configuración adicional
- Perfecta para desarrollo y pruebas

Opción B: Usar MySQL
1. Crea una base de datos:
   ```sql
   CREATE DATABASE kanban_db;
   ```
2. Edita `src/main/resources/application.yaml`:
   ```yaml
   spring:
     datasource:
       url: jdbc:mysql://localhost:3306/kanban_db
       username: root
       password: tu_password
   ```

### 3️⃣ Compilar y Ejecutar

```bash
# Compilar el proyecto
mvn clean package

# Ejecutar el servidor
mvn spring-boot:run
# O
java -jar target/kanban-server-0.1.0.jar
```

El servidor estará disponible en: **http://localhost:8080**

### 4️⃣ Acceder a la Aplicación

1. Abre tu navegador
2. Ve a: `http://localhost:8080`
3. ¡Comienza a gestionar tus tareas!

### 5️⃣ API REST Disponible

Puedes interactuar con la API directamente:

**Obtener todas las tareas:**
```bash
curl http://localhost:8080/api/tareas
```

**Crear una tarea:**
```bash
curl -X POST http://localhost:8080/api/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Mi tarea","prioridad":"ALTA"}'
```

Para más endpoints, consulta `server/requests/kanban-api.http`

### 3️⃣ Buscar y Filtrar Tareas

#### Buscador:
- Escribe en el campo de búsqueda 🔍
- Los resultados se filtran automáticamente
- Busca por cualquier palabra en el texto de la tarea

#### Filtros:
- **Por Prioridad:** Muestra solo tareas de alta, media o baja prioridad
- **Por Categoría:** Filtra por trabajo, personal, estudio, etc.
- **Por Estado:** Muestra solo pendientes, en curso o completadas
- **Combinar filtros:** Usa varios filtros a la vez
- **Limpiar:** Botón "🔄 Limpiar Filtros" para resetear

### 4️⃣ Gestionar Tareas

#### Mover tareas entre columnas:

**Opción 1: Botones**
- En **Pendiente**: Clic en "▶ En Curso" para moverla
- En **En Curso**: 
  - "◀ Pendiente" para devolverla
  - "✓ Completar" para finalizarla
- En **Completada**: "◀ En Curso" para reabrirla

**Opción 2: Drag and Drop**
- Arrastra cualquier tarjeta a otra columna
- Suéltala para cambiar su estado

#### Otras acciones:
- **✏ Editar**: Modifica el texto de la tarea
- **🗑 Eliminar**: Borra la tarea (pide confirmación)

### 4️⃣ Modo Oscuro

- Haz clic en el botón **🌙/☀️** en la esquina superior derecha
- El tema se guarda automáticamente

### 5️⃣ Limpiar Tareas Completadas

- Haz clic en **"🗑️ Limpiar Completadas"** al final de la página
- Elimina todas las tareas de la columna "Completada"

### 6️⃣ Exportar Tareas

Puedes exportar todas tus tareas en diferentes formatos:

- **📄 JSON:** Formato de datos completo, ideal para respaldo
- **📊 CSV:** Importable en Excel, Google Sheets, etc.
- **📕 PDF:** Se genera un HTML que puedes imprimir (Ctrl+P) o guardar como PDF

Los archivos se descargan automáticamente con toda la información.

### 7️⃣ Recordatorios de Vencimiento

El sistema verifica automáticamente las fechas:
- ⏰ **Notificación 24h antes:** Si una tarea vence en menos de un día
- ⚠️ **Alerta de vencida:** Si la tarea ya pasó su fecha límite
- 📅 **Indicador visual:** Las tareas vencidas tienen borde rojo grueso
- 🔔 **Notificaciones del navegador:** Autoriza las notificaciones para recibir alertas

### 8️⃣ Indicadores Visuales

- **Badges de prioridad:** Colores rojo (alta), naranja (media), gris (baja)
- **Badges de categoría:** Con emoji y nombre
- **Fechas de vencimiento:** Muestra "Hoy", "Mañana", "En X días" o "Vencida"
- **Borde rojo:** Tareas vencidas destacadas
- **Contadores:** Número de tareas en cada columna

---

## 📊 Estadísticas

En la parte superior verás tres contadores:
- **Pendientes**: Número de tareas en "Pendiente"
- **En Curso**: Número de tareas en progreso
- **Completadas**: Número de tareas finalizadas

---

## 💡 Consejos de Uso

### Organización:
1. **Prioriza tus tareas**: Usa prioridades para identificar lo urgente
2. **Limita el trabajo en curso**: No sobrecargues la columna "En Curso"
3. **Revisa regularmente**: Mueve tareas según tu progreso
4. **Limpia completadas**: Mantén el tablero ordenado

### Validación de Duplicados:
- Si intentas agregar una tarea idéntica, recibirás una advertencia
- Puedes elegir agregar la tarea de todos modos

### Atajos de Teclado:
- **Enter**: Agregar tarea rápidamente
- **Drag & Drop**: Mover tareas visualmente



## 🎨 Personalización

### Cambiar Colores:

Edita las variables CSS en `styles.css`:

```css
:root {
    --pendiente-color: #3498db;  /* Azul */
    --en-curso-color: #f39c12;   /* Naranja */
    --completada-color: #2ecc71; /* Verde */
}
```

### Añadir Más Prioridades:

1. Agrega opciones en el `<select>` del HTML
2. Define colores en CSS (`.prioridad-nombre`)
3. La lógica ya soporta cualquier prioridad

---

## 💾 Almacenamiento

- **Base de Datos**: Todas las tareas se guardan en MySQL (o H2 en desarrollo)
- **Persistencia Permanente**: Los datos persisten entre sesiones
- **Sincronización**: La UI se actualiza automáticamente con cambios en el servidor

### Datos Guardados:
- Título de las tareas
- Estado (Pendiente/En Curso/Completada)
- Prioridad
- Categoría
- Fecha de vencimiento
- Fecha de creación
- Fecha de última modificación

---

## 🔧 Tecnologías Utilizadas

### Backend
- **Spring Boot 3.x**: Framework web Java
- **Spring Data JPA**: Acceso a datos
- **MySQL/H2**: Base de datos
- **Maven**: Gestor de dependencias

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, animaciones
- **JavaScript (ES6+)**: Funciones modernas, DOM APIs
- **Sin dependencias frontend**: No requiere librerías externas

---

## 📱 Compatibilidad

### Navegadores Soportados:
- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

### Dispositivos:
- 💻 Desktop
- 📱 Tablet
- 📱 Móvil (responsive)

---

## 🐛 Solución de Problemas

### El servidor no inicia
- Verifica que Java 11+ está instalado: `java -version`
- Verifica que Maven está instalado: `mvn -version`
- Comprueba que el puerto 8080 no está en uso: `netstat -an | find ":8080"`

### Error de conexión a base de datos
- Si usas MySQL, verifica que el servicio está corriendo
- Comprueba las credenciales en `application.yaml`
- Intenta usar H2 en memoria (configuración por defecto)

### La aplicación no carga en el navegador
- Verifica que el servidor está corriendo: `mvn spring-boot:run`
- Intenta acceder a `http://localhost:8080`
- Abre la consola del navegador (F12) para ver errores
- Verifica CORS está correctamente configurado en `CorsConfig.java`

### Problemas con la API REST
- Consulta `server/requests/kanban-api.http` para ejemplos
- Usa una herramienta como Postman o REST Client para probar
- Revisa los logs del servidor para errores

---

## 📝 Notas para Desarrolladores

### Estructura del Backend

**Controllers** (`controller/`)
- `TareaController.java`: Endpoints REST para gestión de tareas
- Maneja peticiones HTTP y retorna JSON

**Services** (`service/`)
- `TareaService.java`: Lógica de negocio
- Validaciones y reglas de la aplicación

**Models** (`model/`)
- `Tarea.java`: Entidad JPA mapeada a la tabla tareas
- `Estado.java`: Enum para estados (PENDIENTE, EN_CURSO, COMPLETADA)
- `Prioridad.java`: Enum para prioridades (ALTA, MEDIA, BAJA)

**DTOs** (`dto/`)
- `TareaRequest.java`: Datos recibidos del cliente
- `TareaResponse.java`: Datos enviados al cliente
- `EstadoUpdateRequest.java`: Actualización de estado

**Repository** (`repository/`)
- `TareaRepository.java`: Interface JPA para acceso a datos
- Queries personalizadas si es necesario

**Config** (`config/`)
- `CorsConfig.java`: Configuración CORS para permitir requests desde el frontend

### Testing

Para probar la API, usa:
- **Postman**: Importa `server/requests/kanban-api.http`
- **VS Code REST Client**: Instala extensión y abre `server/requests/kanban-api.http`
- **cURL**: Usa comandos desde terminal

### Desarrollo

1. Abre el proyecto en tu IDE favorito (IntelliJ IDEA, VS Code, etc.)
2. Descarga dependencias: `mvn clean install`
3. Ejecuta: `mvn spring-boot:run`
4. El servidor se reinicia automáticamente con cambios en el código

---

## 🤝 Contribuciones

### ✅ Características Implementadas:
- [x] Tablero Kanban con 3 columnas
- [x] Sistema de prioridades (Alta, Media, Baja)
- [x] Categorías/etiquetas personalizables
- [x] Fechas de vencimiento con recordatorios
- [x] Buscador de tareas en tiempo real
- [x] Sistema de filtros múltiples
- [x] Exportación a JSON, CSV y PDF
- [x] Drag and drop entre columnas
- [x] Modo oscuro/claro
- [x] Notificaciones del navegador
- [x] Validación de duplicados
- [x] Persistencia con localStorage

### Ideas para Mejorar:
- [ ] Añadir sub-tareas o checklist
- [ ] Implementar PWA (Progressive Web App)
- [ ] Sincronización en la nube
- [ ] Añadir comentarios a las tareas
- [ ] Sistema de usuarios y permisos
- [ ] Integración con calendarios (Google Calendar, etc.)
- [ ] Estadísticas y gráficos de productividad
- [ ] Plantillas de tareas recurrentes
- [ ] Adjuntar archivos a las tareas
- [ ] Modo de vista de lista adicional

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

---

## 👨‍💻 Autor

Desarrollado con ❤️ usando GitHub Copilot

---

## 📞 Soporte

Para preguntas o problemas:
1. Revisa la sección de Solución de Problemas
2. Consulta `GUIA_CHAT.md` para usar Copilot eficientemente
3. Abre el archivo y usa las herramientas de desarrollo (F12)

---

## 🎓 Aprendizaje

Este proyecto es ideal para aprender:
- **Spring Boot**: Framework web Java
- **Spring Data JPA**: ORM y acceso a datos
- **REST APIs**: Diseño y consumo de APIs
- **Arquitectura en capas**: Controller → Service → Repository
- **DTOs**: Data Transfer Objects
- **CORS**: Seguridad en requests cross-origin
- **MySQL**: Diseño de bases de datos relacionales
- **Frontend Integration**: Consumo de APIs desde JavaScript

### Recursos Recomendados
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA Guide](https://spring.io/projects/spring-data-jpa)
- [RESTful Web Services](https://restfulapi.net/)

---

**¡Disfruta desarrollando! 🚀**

*Última actualización: Febrero 2026*



