# 📋 Tablero Kanban - Gestión de Tareas

Una aplicación web moderna de gestión de tareas utilizando el método Kanban, con soporte para prioridades, modo oscuro y drag & drop.

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

## 🚀 Cómo Usar

### 1️⃣ Abrir la Aplicación

Abre el archivo `index.html` en tu navegador web favorito:
- Haz doble clic en `index.html`
- O arrastra el archivo al navegador
- O desde WebStorm: clic derecho → "Open in Browser"

### 2️⃣ Crear una Tarea

1. Escribe el texto de la tarea en el campo de entrada
2. Selecciona la prioridad (Baja, Media o Alta)
3. **NUEVO:** Selecciona una categoría (opcional)
4. **NUEVO:** Asigna una fecha de vencimiento (opcional)
5. Haz clic en **"+ Agregar"** o presiona **Enter**
6. La tarea aparecerá en la columna "Pendiente"

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

---

## 🛠️ Estructura del Proyecto

```
lista_de_tareas/
│
├── index.html          # Estructura HTML
├── styles.css          # Estilos y tema oscuro
├── script.js           # Lógica de la aplicación
├── package.json        # Configuración del proyecto
├── README.md           # Este archivo
└── GUIA_CHAT.md        # Guía de comandos de Copilot
```

---

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

- **Persistencia Local**: Todas las tareas se guardan automáticamente en `localStorage`
- **Tema**: Tu preferencia de tema se guarda
- **Sin Servidor**: Todo funciona offline en tu navegador

### Datos Guardados:
- Texto de las tareas
- Estado (pendiente/en-curso/completada)
- Prioridad
- **Categoría**
- **Fecha de vencimiento**
- Fecha de creación
- Preferencia de tema

---

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, animaciones
- **JavaScript (ES6+)**: Funciones modernas, localStorage, Notification API
- **Sin dependencias**: No requiere librerías externas

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

### Las tareas no se guardan:
- Verifica que tu navegador permita localStorage
- No uses modo incógnito (no guarda datos)

### El drag and drop no funciona:
- Asegúrate de usar un navegador moderno
- Intenta usar los botones de movimiento

### La aplicación no carga:
- Verifica que los 3 archivos estén en la misma carpeta
- Abre la consola del navegador (F12) para ver errores

---

## 📝 Notas para Desarrolladores

### Documentación del Código:
- Todo el JavaScript está documentado con **JSDoc**
- Funciones organizadas por categorías
- Código optimizado para evitar re-renders

### Características Técnicas:
- **Validación de duplicados**: Compara texto normalizado
- **Escape HTML**: Prevención de XSS
- **Fragment DOM**: Mejora de rendimiento
- **Event Delegation**: Menos listeners, mejor rendimiento

### Ampliar la Aplicación:
```javascript
// Ejemplo: Agregar más estados
function cambiarEstado(id, nuevoEstado) {
    // La función ya soporta cualquier estado
}
```

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
- Manipulación del DOM
- LocalStorage
- Drag and Drop API
- CSS Grid y Flexbox
- Variables CSS
- JSDoc
- ES6+ features

---

**¡Disfruta organizando tus tareas! 🚀**

*Última actualización: Febrero 2026*

