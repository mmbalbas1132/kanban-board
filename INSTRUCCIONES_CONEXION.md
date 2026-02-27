# 🔌 GUÍA COMPLETA: CONECTAR FRONTEND CON BACKEND

## ✅ ARCHIVOS CREADOS

He creado el archivo **`api.js`** que contiene todas las funciones para conectar el frontend con el backend.

---

## 📊 RESUMEN DEL ESTADO

### ❌ Actualmente:
- Frontend usa `localStorage` (datos solo en el navegador)
- Backend implementado pero NO conectado
- Sin llamadas HTTP entre frontend y backend

### ✅ Después de seguir esta guía:
- Frontend conectado al backend REST API
- Datos persistentes en MariaDB
- Arquitectura cliente-servidor completa

---

## 🚀 PASOS PARA CONECTAR

### **PASO 1: Verificar que el Backend esté corriendo** ⚙️

#### 1.1. Verificar MariaDB
```powershell
# Ver si MariaDB está corriendo
Get-Service | Where-Object {$_.Name -like "*mysql*" -or $_.Name -like "*maria*"}

# Si no está corriendo, iniciar
net start MySQL
```

#### 1.2. Verificar la base de datos
```powershell
# Conectar a MariaDB
mysql -u root -p
```

En MySQL, ejecuta:
```sql
-- Ver bases de datos
SHOW DATABASES;

-- Usar la base de datos
USE kanban_db;

-- Ver tablas (debe mostrar 'tareas')
SHOW TABLES;

-- Salir
EXIT;
```

Si `kanban_db` no existe, créala:
```sql
CREATE DATABASE kanban_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

#### 1.3. Iniciar el servidor Spring Boot

**Opción A: Desde PowerShell con script**
```powershell
cd C:\Users\mmbal\WebstormProjects\lista_de_tareas\server
.\start-server.ps1
```

**Opción B: Con Maven directamente**
```powershell
cd C:\Users\mmbal\WebstormProjects\lista_de_tareas\server
.\mvnw.cmd spring-boot:run
```

**Opción C: Desde IntelliJ IDEA**
1. Abre IntelliJ IDEA
2. Abre el proyecto `/server/`
3. Click derecho en `KanbanServerApplication.java`
4. "Run 'KanbanServerApplication'"

#### 1.4. Verificar que funciona

Abre tu navegador y ve a:
```
http://localhost:8080/api/health
```

Deberías ver:
```json
{
  "status": "UP",
  "message": "Servidor funcionando correctamente"
}
```

O desde PowerShell:
```powershell
Invoke-RestMethod http://localhost:8080/api/health
```

---

### **PASO 2: Modificar el Frontend para usar el Backend** 🔄

Tienes **dos opciones**:

#### **OPCIÓN A: Crear una versión paralela (Recomendada para probar)** ✨

Mantén tu versión actual con `localStorage` y crea una nueva versión conectada:

```
lista_de_tareas/
├── index.html          ← Versión con localStorage (actual)
├── script.js           ← Usa localStorage
├── index-api.html      ← Versión con API (nueva)
├── script-api.js       ← Usa backend (nueva)
└── api.js              ← Módulo de conexión (✅ ya creado)
```

Te crearé estos archivos ahora.

#### **OPCIÓN B: Reemplazar directamente** ⚠️

Modifica `script.js` directamente para usar el backend.

**Te recomiendo la OPCIÓN A primero** para probar sin romper lo que funciona.

---

### **PASO 3: Usar el módulo api.js**

El archivo `api.js` ya está creado con todas las funciones:

#### Funciones disponibles:

```javascript
// Verificar conexión
await verificarBackend();

// Obtener todas las tareas
const tareas = await obtenerTodasLasTareas();

// Crear tarea
const nuevaTarea = await crearTarea({
    texto: "Mi tarea",
    estado: "pendiente",
    prioridad: "alta",
    categoria: "trabajo",
    fechaVencimiento: Date.now()
});

// Actualizar tarea completa
const actualizada = await actualizarTarea(id, tareaModificada);

// Cambiar solo el estado
const conEstadoCambiado = await cambiarEstadoTarea(id, "en-curso");

// Eliminar tarea
await eliminarTarea(id);

// Eliminar todas las completadas
await eliminarTareasCompletadas();

// Buscar tareas
const encontradas = await buscarTareasPorTexto("reunión");

// Filtrar por estado
const pendientes = await obtenerTareasPorEstado("pendiente");
```

---

### **PASO 4: Modificar script.js para usar api.js**

Necesitas hacer los siguientes cambios en `script.js`:

#### 4.1. Incluir api.js en el HTML

Modifica `index.html`:

```html
<!-- Antes del </body>, ANTES de script.js -->
<script src="api.js"></script>
<script src="script.js"></script>
```

#### 4.2. Cambiar la función `cargarDatos()`

**ANTES (localStorage):**
```javascript
function cargarDatos() {
    const tareasGuardadas = localStorage.getItem('tareasKanban');
    tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
}
```

**DESPUÉS (API):**
```javascript
async function cargarDatos() {
    try {
        // Intentar cargar del backend
        const backendDisponible = await verificarBackend();
        
        if (backendDisponible) {
            tareas = await obtenerTodasLasTareas();
            console.log('✅ Tareas cargadas del backend');
        } else {
            // Fallback a localStorage
            console.warn('⚠️ Backend no disponible, usando localStorage');
            const tareasGuardadas = localStorage.getItem('tareasKanban');
            tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
        }
    } catch (error) {
        console.error('❌ Error al cargar tareas:', error);
        // Fallback a localStorage
        const tareasGuardadas = localStorage.getItem('tareasKanban');
        tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    }
}
```

#### 4.3. Cambiar la función `agregarTarea()`

**ANTES:**
```javascript
function agregarTarea(texto, prioridad, categoria, fechaVencimiento) {
    // ... código ...
    tareas.push(nuevaTarea);
    guardarEnLocal();
    renderizarTablero();
}
```

**DESPUÉS:**
```javascript
async function agregarTarea(texto, prioridad, categoria, fechaVencimiento) {
    // ... código para crear objeto nuevaTarea ...
    
    try {
        const tareaCreada = await crearTarea(nuevaTarea);
        tareas.push(tareaCreada);
        renderizarTablero();
        console.log('✅ Tarea creada en el backend');
    } catch (error) {
        console.error('❌ Error al crear tarea:', error);
        alert('No se pudo crear la tarea. ¿Está el servidor corriendo?');
    }
}
```

#### 4.4. Cambiar la función `cambiarEstado()`

**ANTES:**
```javascript
function cambiarEstado(id, nuevoEstado) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.estado = nuevoEstado;
        guardarEnLocal();
        renderizarTablero();
    }
}
```

**DESPUÉS:**
```javascript
async function cambiarEstado(id, nuevoEstado) {
    try {
        const tareaActualizada = await cambiarEstadoTarea(id, nuevoEstado);
        const tarea = tareas.find(t => t.id === id);
        if (tarea) {
            tarea.estado = nuevoEstado;
            renderizarTablero();
        }
        console.log('✅ Estado actualizado en el backend');
    } catch (error) {
        console.error('❌ Error al cambiar estado:', error);
        alert('No se pudo actualizar el estado');
    }
}
```

#### 4.5. Cambiar la función `eliminarTarea()`

**ANTES:**
```javascript
function eliminarTareaConfirmar(id) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
        tareas = tareas.filter(t => t.id !== id);
        guardarEnLocal();
        renderizarTablero();
    }
}
```

**DESPUÉS:**
```javascript
async function eliminarTareaConfirmar(id) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
        try {
            await eliminarTarea(id);
            tareas = tareas.filter(t => t.id !== id);
            renderizarTablero();
            console.log('✅ Tarea eliminada del backend');
        } catch (error) {
            console.error('❌ Error al eliminar tarea:', error);
            alert('No se pudo eliminar la tarea');
        }
    }
}
```

#### 4.6. Cambiar `inicializar()` para que sea async

**ANTES:**
```javascript
function inicializar() {
    cargarDatos();
    configurarEventListeners();
    // ...
}
```

**DESPUÉS:**
```javascript
async function inicializar() {
    await cargarDatos();
    configurarEventListeners();
    // ...
}
```

#### 4.7. Eliminar o comentar `guardarEnLocal()`

Ya no es necesaria porque el backend persiste los datos:

```javascript
// function guardarEnLocal() {
//     localStorage.setItem('tareasKanban', JSON.stringify(tareas));
// }
```

---

### **PASO 5: Probar la Conexión** 🧪

1. **Asegúrate de que el backend esté corriendo:**
   ```
   http://localhost:8080/api/health
   ```

2. **Abre el frontend en el navegador:**
   - Si usas Live Server: http://localhost:5500
   - O abre `index.html` directamente

3. **Abre la consola del navegador (F12)**
   - Deberías ver: `✅ Tareas cargadas del backend`

4. **Prueba crear una tarea:**
   - Escribe una tarea y click en "Agregar"
   - Deberías ver: `✅ Tarea creada en el backend`

5. **Recarga la página:**
   - Las tareas deben persistir (vienen del backend)

6. **Abre otro navegador o dispositivo:**
   - Deberías ver las mismas tareas

---

### **PASO 6: Migrar Datos de localStorage (Opcional)** 📦

Si tienes tareas en `localStorage` que quieres migrar a la base de datos, lee el archivo:

```
server/MIGRACION_DATOS.md
```

O ejecuta este script en la consola del navegador:

```javascript
// Migrar tareas de localStorage al backend
async function migrarTareasABackend() {
    const tareasLocal = JSON.parse(localStorage.getItem('tareasKanban')) || [];
    
    console.log(`Migrando ${tareasLocal.length} tareas...`);
    
    for (const tarea of tareasLocal) {
        try {
            await crearTarea(tarea);
            console.log(`✅ Migrada: ${tarea.texto}`);
        } catch (error) {
            console.error(`❌ Error: ${tarea.texto}`, error);
        }
    }
    
    console.log('✅ Migración completada');
}

// Ejecutar migración
migrarTareasABackend();
```

---

## 🔧 SOLUCIÓN DE PROBLEMAS

### Error: "Backend no disponible"

**Causa:** El servidor Spring Boot no está corriendo

**Solución:**
```powershell
cd C:\Users\mmbal\WebstormProjects\lista_de_tareas\server
.\start-server.ps1
```

---

### Error: CORS

**Causa:** El navegador bloquea peticiones de origen cruzado

**Solución:** Verifica que `CorsConfig.java` esté configurado correctamente:

```java
.allowedOrigins("http://localhost:5500", "http://127.0.0.1:5500")
```

Si usas otro puerto, agrégalo.

---

### Error: "Communications link failure"

**Causa:** MariaDB no está corriendo o las credenciales son incorrectas

**Solución:**
```powershell
# Iniciar MariaDB
net start MySQL

# Verificar credenciales en application.yaml
```

---

### Error 404 en las peticiones

**Causa:** La URL de la API es incorrecta

**Solución:** Verifica que en `api.js` la URL sea:
```javascript
const API_BASE_URL = 'http://localhost:8080/api';
```

---

### Error: "No se pudo crear la tarea"

**Causa:** Validación del backend rechaza la tarea

**Solución:** Abre la consola del navegador y revisa el mensaje de error detallado.

---

## 📋 CHECKLIST COMPLETO

Antes de conectar:
- [ ] MariaDB instalado y corriendo
- [ ] Base de datos `kanban_db` creada
- [ ] Backend compilado sin errores
- [ ] Servidor Spring Boot corriendo en puerto 8080
- [ ] Endpoint `/api/health` responde correctamente

Durante la conexión:
- [ ] Archivo `api.js` creado
- [ ] HTML incluye `<script src="api.js"></script>`
- [ ] Funciones `async/await` implementadas
- [ ] `cargarDatos()` es async
- [ ] `agregarTarea()` es async
- [ ] `eliminarTarea()` es async
- [ ] `cambiarEstado()` es async

Después de conectar:
- [ ] Consola muestra "✅ Tareas cargadas del backend"
- [ ] Puedo crear tareas
- [ ] Puedo cambiar estado con drag & drop
- [ ] Puedo eliminar tareas
- [ ] Al recargar, las tareas persisten
- [ ] Migré datos de localStorage (si corresponde)

---

## 🎯 PRÓXIMOS PASOS

Una vez conectado:

1. ✅ Probar todas las funcionalidades
2. ✅ Migrar datos de localStorage
3. ✅ Eliminar código de localStorage (opcional)
4. ✅ Agregar indicadores visuales de "cargando"
5. ✅ Implementar reconexión automática
6. ✅ Agregar autenticación (futuro)

---

## 💡 ¿NECESITAS AYUDA?

Si tienes problemas:

1. **Verifica los logs del backend** en la consola de IntelliJ
2. **Abre la consola del navegador** (F12) y busca errores
3. **Prueba los endpoints** directamente en el navegador:
   - http://localhost:8080/api/health
   - http://localhost:8080/api/tareas

4. **Lee los archivos de documentación:**
   - `server/LEEME_PRIMERO.md`
   - `server/INICIO_RAPIDO.md`
   - `server/REFERENCIA_MODELOS.md`

---

**¿Quieres que cree los archivos modificados (`script-api.js` e `index-api.html`) para que solo tengas que probarlos? Dime y los creo. 🚀**

