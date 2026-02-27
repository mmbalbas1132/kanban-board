## ⚡ GUÍA RÁPIDA - EJECUTAR EN INTELLIJ

### 🎯 Objetivo
Ejecutar tu aplicación Kanban completamente integrada en Spring Boot desde IntelliJ.

---

## 📝 Paso 1: Abrir el Proyecto en IntelliJ

1. **Abre IntelliJ IDEA**
2. **File** → **Open**
3. Navega a: `C:\Users\mmbal\WebstormProjects\lista_de_tareas\server`
4. Click en **OK**
5. Espera a que IntelliJ indexe el proyecto (verás una barra de progreso abajo)

---

## 🔧 Paso 2: Configurar la Configuración de Ejecución

### Opción A: Usar Spring Boot Runner (MÁS FÁCIL)

1. **Run** → **Edit Configurations**
2. Click en **+** (New Configuration)
3. Selecciona **Spring Boot**
4. Completa los campos:
   - **Name:** `Kanban Server`
   - **Main class:** `com.kanban.KanbanServerApplication`
   - **VM options:** `-Xmx512m` (opcional, para más memoria)
5. Click **OK**

### Opción B: Usar Maven

1. **Run** → **Edit Configurations**
2. Click en **+** (New Configuration)
3. Selecciona **Maven**
4. Completa los campos:
   - **Name:** `Kanban Maven`
   - **Command line:** `spring-boot:run`
   - **Working directory:** `$ProjectFileDir$`
5. Click **OK**

---

## ▶️ Paso 3: Ejecutar la Aplicación

### Método 1: Desde el Menú
1. **Run** → **Run 'Kanban Server'** (o la configuración que creaste)

### Método 2: Atajo de Teclado
- Presiona **Shift + F10** (o **Ctrl + R** en Mac)

### Método 3: Botón de ejecución
- Haz click en el botón ▶️ (Play) arriba a la derecha de IntelliJ

---

## 🔍 Verificar que el Servidor Está Corriendo

### En la consola de IntelliJ deberías ver:

```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___  '_  '_  '_ \/ _`  \ \ \ \
 \\/  ___) _)      (_   ) ) ) )
  '  ____ .___ __ _\__,  / / / /
 =========_==============___/=/_/_/_/
 :: Spring Boot ::                (v3.2.3)

... logs de inicialización ...

2026-02-27T10:51:29.216+01:00  INFO 15960 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path ''
2026-02-27T10:51:29.245+01:00  INFO 15960 --- [           main] com.kanban.KanbanServerApplication       : Started KanbanServerApplication in 5.738 seconds
```

---

## 🌐 Acceder a la Aplicación

Una vez que veas el mensaje **"Started KanbanServerApplication"**:

1. **Abre tu navegador**
2. **Ve a:** `http://localhost:8080`
3. **¡Deberías ver tu tablero Kanban! 🎉**

---

## 🛑 Detener el Servidor

1. Haz click en el botón **⏹ Stop** (cuadrado rojo) en la ventana de ejecución
2. O presiona **Ctrl + F2**

---

## 🐛 Si Algo Sale Mal

### Error: "Port 8080 already in use"
```powershell
# En PowerShell, ejecuta:
Get-Process java -ErrorAction SilentlyContinue | Stop-Process -Force
```

### Error: "Cannot connect to database"
Verifica que:
1. MariaDB está ejecutándose
2. La base de datos `kanban_db` existe
3. El usuario `root` no tiene contraseña

### Error: "CSS/JS no cargan"
1. Asegúrate de haber ejecutado `mvn clean install`
2. Reinicia el servidor
3. Limpia el caché del navegador (Ctrl + Shift + Delete)

---

## 📋 Estructura de Archivos Importantes

Los archivos que necesita IntelliJ reconocer:

```
server/
├── pom.xml                    ← Maven reconocerá esto automáticamente
├── src/
│   ├── main/
│   │   ├── java/              ← Código Java
│   │   └── resources/         ← Configuraciones y recursos estáticos
│   │       ├── application.yaml
│   │       ├── templates/     ← HTML (Thymeleaf)
│   │       └── static/        ← CSS, JS, imágenes
│   └── test/
└── target/                    ← Aquí va el JAR compilado
```

---

## 💡 Consejos para Desarrollo

### 1. **Usar el Debugger**
- Para debuguear, presiona **Shift + F9** en lugar de **Shift + F10**
- Puedes colocar breakpoints haciendo click a la izquierda de las líneas de código

### 2. **Recargar Cambios (Hot Reload)**
- Si modificas archivos Java, presiona **Ctrl + F9** para recompilar
- Si cambias HTML/CSS/JS, solo actualiza el navegador (F5)

### 3. **Ver Logs del Servidor**
- Los logs aparecerán en la pestaña **Run** en la parte inferior de IntelliJ
- Puedes filtrar por niveles: INFO, WARN, ERROR

### 4. **Ejecutar Tests**
```
Right-click en una clase de test → Run 'NombreTest'
```

---

## 🚀 Próximas Acciones

Una vez que el servidor esté corriendo:

1. **Prueba la aplicación:**
   - Crea una tarea
   - Cambia su estado
   - Busca tareas

2. **Abre las DevTools del navegador:**
   - Presiona **F12**
   - Ve a la pestaña **Network** para ver las llamadas a la API
   - Ve a la pestaña **Console** para ver cualquier error de JavaScript

3. **Prueba los endpoints en DataGrip:**
   - GET: `http://localhost:8080/api/health`
   - GET: `http://localhost:8080/api/tareas`

---

## 📞 Problema Específico?

**Si algo no funciona:**

1. Comprueba que MariaDB está corriendo
2. Verifica el puerto 8080 está disponible
3. Limpia el proyecto: **Build** → **Clean Project**
4. Recompila: **Build** → **Build Project** (Ctrl + F9)
5. Reinicia el servidor

---

*¡Disfruta tu aplicación Kanban integrada! 🎉*

