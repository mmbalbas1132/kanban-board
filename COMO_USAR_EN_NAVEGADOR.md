# 🌐 ABRIR LA APLICACIÓN EN EL NAVEGADOR

## ✅ ESTADO ACTUAL

- ✅ **Backend funcionando** en http://localhost:8080
- ✅ **Base de datos conectada** (MariaDB)
- ✅ **1 tarea de prueba** en la base de datos
- ✅ **Frontend listo** para usar

---

## 🚀 OPCIÓN 1: USAR LIVE SERVER (RECOMENDADO)

### Si tienes Live Server en VS Code o WebStorm:

1. **Abre el proyecto en tu editor**
   - WebStorm o VS Code

2. **Click derecho en `index.html`**
   - Selecciona: "Open with Live Server"
   - O usa el atajo: `Alt + L, Alt + O`

3. **Se abrirá automáticamente en el navegador**
   - URL: http://localhost:5500 (o el puerto que use Live Server)
   - ✅ La aplicación cargará las tareas desde el backend

---

## 🌐 OPCIÓN 2: ABRIR DIRECTAMENTE EL ARCHIVO

### Pasos:

1. **Navega a la carpeta del proyecto:**
   ```
   C:\Users\mmbal\WebstormProjects\lista_de_tareas
   ```

2. **Encuentra el archivo `index.html`**

3. **Click derecho → Abrir con:**
   - Google Chrome
   - Microsoft Edge
   - Firefox
   - Cualquier navegador moderno

4. **¡Listo!**
   - La aplicación se abrirá
   - ✅ Cargará la tarea de prueba desde el backend

---

## 🔍 VERIFICAR QUE FUNCIONA

### 1. Abre la Consola del Navegador (F12)

Deberías ver mensajes como:
```javascript
✅ Tareas cargadas del backend: 1
```

### 2. Verifica la Tarea de Prueba

En la columna "📝 PENDIENTE" deberías ver:
```
┌─────────────────────────────┐
│ 🔴 ALTA                     │
│ 💼 trabajo                  │
│                             │
│ Prueba de tarea desde       │
│ PowerShell                  │
│                             │
│ ▶ En Curso  ✏ Editar  🗑    │
└─────────────────────────────┘
```

### 3. Prueba Crear una Tarea

1. Escribe en el campo: "Mi primera tarea desde el navegador"
2. Selecciona prioridad: Media
3. Categoría: Personal
4. Click "Agregar"

**En la consola verás:**
```
✅ Tarea creada en el backend
```

### 4. Recarga la Página (F5)

- ✅ Las tareas siguen ahí (persisten en la base de datos)

---

## 🎯 USANDO LA APLICACIÓN

### Crear Tarea:
```
1. Campo de texto → Escribe tu tarea
2. Prioridad → Selecciona: Alta/Media/Baja
3. Categoría → Selecciona: 💼📚🏠❤️📌
4. Fecha (opcional) → Selecciona fecha límite
5. Click "Agregar"
```

### Mover Tarea:
```
Opción A: Arrastra la tarjeta a otra columna (Drag & Drop)
Opción B: Click en botones "▶ En Curso" o "✓ Completar"
```

### Editar Tarea:
```
Click "✏ Editar" → Modifica texto → Aceptar
```

### Eliminar Tarea:
```
Click "🗑 Eliminar" → Confirma → ¡Eliminada!
```

### Filtrar Tareas:
```
🔍 Buscador → Escribe texto para buscar
Selectores → Filtra por prioridad/categoría/estado
```

### Cambiar Tema:
```
Click en 🌙/☀️ (esquina superior derecha)
```

---

## 📊 CONTADORES EN TIEMPO REAL

En la parte superior verás:
```
┌─────────┬──────────┬─────────────┐
│    1    │    0     │      0      │
│Pendiente│ En Curso │ Completada  │
└─────────┴──────────┴─────────────┘
```

Se actualizan automáticamente al mover tareas.

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### ❌ No veo tareas

**Abre la consola (F12):**
- Si ves: `✅ Tareas cargadas del backend` → Todo bien
- Si ves: `⚠️ Backend no disponible` → El backend no responde

**Solución:**
1. Verifica que el backend esté corriendo
2. Ejecuta en PowerShell:
   ```powershell
   Invoke-RestMethod http://localhost:8080/api/health
   ```
3. Debería responder "ok"

### ❌ Error CORS

**Síntoma:** Error en consola sobre "CORS policy"

**Solución:**
- Ya está configurado, pero verifica que uses:
  - http://localhost:5500 (Live Server)
  - O archivo:/// (archivo local)

### ❌ Las tareas no se guardan

**Abre la consola (F12):**
- Busca errores en rojo
- Verifica que veas: `✅ Tarea creada en el backend`

**Solución:**
1. Verifica conexión al backend
2. Recarga la página (F5)
3. Intenta crear de nuevo

---

## 🎨 CARACTERÍSTICAS QUE PUEDES PROBAR

### ✅ Funcionalidades Básicas:
- ✅ Crear tareas
- ✅ Editar tareas
- ✅ Eliminar tareas
- ✅ Mover entre columnas (Drag & Drop)
- ✅ Cambiar estado con botones

### ✅ Filtros y Búsqueda:
- ✅ Buscar por texto
- ✅ Filtrar por prioridad
- ✅ Filtrar por categoría
- ✅ Filtrar por estado
- ✅ Combinar filtros

### ✅ Organización:
- ✅ Sistema de prioridades (Alta/Media/Baja)
- ✅ Categorías con emojis (💼📚🏠❤️📌)
- ✅ Fechas de vencimiento
- ✅ Alertas de tareas vencidas

### ✅ Exportación:
- ✅ Exportar a JSON
- ✅ Exportar a CSV
- ✅ Exportar a PDF

### ✅ Personalización:
- ✅ Tema claro/oscuro
- ✅ Notificaciones del navegador

---

## 📱 PRUEBA DESDE OTRO DISPOSITIVO

Si tienes otro dispositivo en la misma red:

1. **Encuentra tu IP local:**
   ```powershell
   ipconfig
   # Busca "Dirección IPv4" (ejemplo: 192.168.1.10)
   ```

2. **En el otro dispositivo, abre:**
   ```
   http://TU_IP:5500/index.html
   ```
   (Ejemplo: http://192.168.1.10:5500/index.html)

3. **¡Verás las mismas tareas!**
   - Porque vienen de la base de datos compartida

---

## 🎯 FLUJO DE PRUEBA RECOMENDADO

### 1. Primera Carga (1 min)
```
1. Abre index.html en el navegador
2. Abre consola (F12)
3. Verifica: "✅ Tareas cargadas del backend: 1"
4. Ve la tarea de prueba en "Pendiente"
```

### 2. Crear Tareas (2 min)
```
1. Crea 3 tareas diferentes:
   - "Estudiar JavaScript" (Alta, Estudio)
   - "Hacer ejercicio" (Media, Salud)
   - "Comprar leche" (Baja, Casa)
2. Verifica contadores se actualicen
```

### 3. Mover Tareas (2 min)
```
1. Arrastra "Estudiar JavaScript" a "En Curso"
2. Click "✓ Completar" en "Comprar leche"
3. Verifica contadores cambien
```

### 4. Filtros (2 min)
```
1. Busca: "ejercicio" → Solo muestra esa tarea
2. Filtra: Prioridad Alta → Solo muestra alta prioridad
3. Click "Limpiar Filtros" → Vuelve a mostrar todas
```

### 5. Persistencia (1 min)
```
1. Recarga la página (F5)
2. ✅ Todas las tareas siguen ahí
3. ✅ Los contadores son correctos
```

### 6. Exportar (1 min)
```
1. Click "Exportar JSON"
2. Se descarga archivo
3. Ábrelo y verifica que estén tus tareas
```

### 7. Tema (30 seg)
```
1. Click en 🌙 (esquina superior derecha)
2. Cambia a tema oscuro
3. Click en ☀️
4. Vuelve a tema claro
```

---

## 🎉 ¡LISTO PARA USAR!

Tu aplicación está completamente funcional:
- ✅ Frontend conectado al backend
- ✅ Backend conectado a MariaDB
- ✅ Todas las funcionalidades operativas
- ✅ Listo para uso diario

---

## 📚 GUÍAS ADICIONALES

Para aprender todas las funcionalidades:
- **GUIA_RAPIDA.md** - Referencia rápida (10 min de lectura)
- **GUIA_USUARIO.md** - Guía completa (1 hora de lectura)

Para problemas técnicos:
- **CONEXION_COMPLETADA.md** - Verificación de conexión
- **server/INICIO_RAPIDO.md** - Configuración del backend

---

## 💡 CONSEJOS

### Para uso diario:
1. ✅ Usa Live Server para mejor experiencia
2. ✅ Mantén el backend corriendo mientras trabajas
3. ✅ Exporta JSON semanalmente como respaldo
4. ✅ Usa drag & drop para mover tareas rápidamente

### Para mejor productividad:
1. ✅ Máximo 3-5 tareas en "En Curso"
2. ✅ Usa prioridades de forma inteligente
3. ✅ Limpia "Completadas" semanalmente
4. ✅ Establece fechas solo para deadlines reales

---

**¡Disfruta tu Tablero Kanban! 📋✨**

*Última actualización: 26 de febrero de 2026*

