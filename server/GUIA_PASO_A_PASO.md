## 📖 GUÍA PASO A PASO - EJECUTAR EN INTELLIJ

---

## PASO 1: Abre IntelliJ IDEA

![Abre IntelliJ]

- Si no lo tienes abierto, haz doble click en el ícono de IntelliJ

---

## PASO 2: Abre el Proyecto

```
Menu: File → Open
```

**Alternativa:** `Ctrl + O`

**En la ventana que aparece:**
1. Navega a: `C:\Users\mmbal\WebstormProjects\lista_de_tareas`
2. Haz click en la carpeta `server`
3. Click en el botón **"Open"** o **"OK"**

---

## PASO 3: Espera a que IntelliJ Indexe el Proyecto

Verás una barra de progreso en la parte inferior de IntelliJ:

```
Indexing... [████████░░░░░░░] 60%
```

Espera a que termine (puede tomar 30-60 segundos).

---

## PASO 4: Ejecuta el Servidor

**Opción A: Atajo de Teclado (MÁS RÁPIDO)**
```
Presiona: Shift + F10
```

**Opción B: Menú**
```
Run → Run (o Run 'KanbanServerApplication')
```

**Opción C: Botón**
- Haz click en el botón ▶️ (Play) arriba a la derecha

---

## PASO 5: Espera a que Inicie el Servidor

En la pestaña **"Run"** (parte inferior de IntelliJ) verás:

```
.   ____          _            __ _ _
/\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_  '_ \/ _` | \ \ \ \
 \\/  ___) _)      (_   ) ) ) )
  '  ____ .___ __ _\__,  / / / /
 =========_==============___/=/_/_/_/
 :: Spring Boot ::                (v3.2.3)

... (muchas líneas más) ...

o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080
com.kanban.KanbanServerApplication       : Started KanbanServerApplication in 5.738 seconds
```

**¡Cuando veas "Started KanbanServerApplication", ya está listo!**

---

## PASO 6: Abre tu Navegador

1. **Abre Firefox, Chrome, Edge o Safari**
2. **En la barra de dirección, escribe:**
   ```
   http://localhost:8080
   ```
3. **Presiona Enter**

---

## PASO 7: ¡Verás tu Tablero Kanban! 🎉

Deberías ver:
```
┌─────────────────────────────────┐
│ 📋 Tablero Kanban      🌙        │
├─────────────────────────────────┤
│ [Agregar nueva tarea...] [Baja] │
├─────────────────────────────────┤
│  📝 Pendiente  │ ⚡ En Curso │ ✅ Completada │
├────────────────┼──────────────┼──────────────┤
│                │              │              │
│                │              │              │
└────────────────┴──────────────┴──────────────┘
```

---

## ✨ ¡FUNCIONA! 

Ahora puedes:

### ✅ Crear una Tarea
1. Escribe algo en el campo "Agregar nueva tarea..."
2. Selecciona una prioridad (Baja, Media, Alta)
3. Click en "+ Agregar"

### ✅ Cambiar Estado
- Arrastra la tarea entre columnas
- O usa el dropdown en la tarea

### ✅ Buscar Tareas
- Usa el buscador 🔍 arriba

### ✅ Filtrar
- Por prioridad
- Por categoría
- Por estado

---

## 🛑 DETENER EL SERVIDOR

Cuando termines:

**Opción 1:** Click en el botón ⏹ (Stop) rojo en la ventana Run

**Opción 2:** Presiona `Ctrl + F2`

**Opción 3:** Click en la X de la pestaña "Run"

---

## 🔄 MODIFICAR Y RECARGAR

### Si cambias código Java:
1. Guarda el archivo (Ctrl + S)
2. Presiona Ctrl + F9 (recompilación)
3. El servidor se reiniciará automáticamente

### Si cambias HTML/CSS/JS:
1. Guarda el archivo (Ctrl + S)
2. Recarga el navegador (F5)
3. ¡Los cambios se verán inmediatamente!

---

## 🐛 PROBLEMAS COMUNES

### Problema: "Port 8080 already in use"
**Solución:**
1. Abre PowerShell
2. Ejecuta: `taskkill /F /IM java.exe`
3. Intenta nuevamente en IntelliJ

### Problema: "Cannot connect to database"
**Solución:**
1. Abre DataGrip
2. Verifica que MariaDB está corriendo
3. Verifica que `kanban_db` existe
4. Verifica que usuario `root` sin contraseña funciona

### Problema: "CSS no carga" o "Página muy simple"
**Solución:**
1. Recarga la página (F5)
2. Limpia caché (Ctrl + Shift + Delete)
3. Reinicia el servidor (Shift + F10)

### Problema: "Script.js no funciona"
**Solución:**
1. Abre DevTools (F12)
2. Ve a la pestaña "Console"
3. Busca errores en rojo
4. Verifica que MariaDB está corriendo

---

## 📝 TIPS Y TRUCOS

### Debug (si necesitas analizar código)
1. Haz click a la izquierda de una línea de código
2. Aparecerá un punto rojo (breakpoint)
3. Ejecuta con Shift + F9 en lugar de Shift + F10
4. El código se pausará en ese punto

### Ver Logs del Servidor
- Los logs están en la pestaña "Run" abajo
- Puedes filtrar por nivel: INFO, WARN, ERROR
- Busca palabras clave con Ctrl + F

### Cambiar Puerto
- Abre: `src/main/resources/application.yaml`
- Encuentra: `server: port: 8080`
- Cambia 8080 a otro número (ej: 8090)
- Guarda y reinicia

### Ver Estructura del Proyecto
- Haz click en el símbolo > a la izquierda de las carpetas
- Explora la estructura en `src/main/java/com/kanban/`

---

## ✅ RESUMEN RÁPIDO

1. **Abre IntelliJ**
2. **File → Open → server/**
3. **Shift + F10**
4. **Espera a que veas "Started KanbanServerApplication"**
5. **Abre http://localhost:8080 en el navegador**
6. **¡Disfruta tu Kanban! 🎉**

---

## 📚 DOCUMENTACIÓN ADICIONAL

Si necesitas más información:

- **INICIO_AQUI.md** - Información general
- **GUIA_INTELLIJ_RAPIDA.md** - Guía para IntelliJ
- **CHECKLIST_COMPLETADO.md** - Detalles técnicos
- **RESUMEN_EJECUTIVO.md** - Overview completo

---

## 🎯 ¡LISTO!

Ya sabes cómo ejecutar tu aplicación Kanban desde IntelliJ.

**Próximas acciones:**
1. Experimenta creando tareas
2. Explora el código en IntelliJ
3. Prueba hacer cambios y recargar
4. Desarrolla nuevas funciones

---

**¡Felicidades! Tu proyecto está completamente integrado y funcional. 🚀**

