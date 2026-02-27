# 📋 GUÍA DE USUARIO - TABLERO KANBAN

## 🎯 Bienvenido a tu Tablero Kanban

Esta guía te enseñará a usar todas las funcionalidades de tu aplicación de gestión de tareas.

---

## 📚 TABLA DE CONTENIDOS

1. [Inicio Rápido](#inicio-rápido)
2. [Crear Tareas](#crear-tareas)
3. [Gestionar Tareas](#gestionar-tareas)
4. [Sistema Kanban](#sistema-kanban)
5. [Prioridades y Categorías](#prioridades-y-categorías)
6. [Fechas de Vencimiento](#fechas-de-vencimiento)
7. [Filtros y Búsqueda](#filtros-y-búsqueda)
8. [Exportar Datos](#exportar-datos)
9. [Tema Claro/Oscuro](#tema-clarooscuro)
10. [Notificaciones](#notificaciones)
11. [Atajos de Teclado](#atajos-de-teclado)
12. [Consejos y Trucos](#consejos-y-trucos)

---

## 🚀 INICIO RÁPIDO

### ¿Qué es un Tablero Kanban?

Kanban es un método visual para gestionar tareas. Las tareas se organizan en columnas que representan su estado actual.

### Las 3 Columnas

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ 📝 PENDIENTE│  │ ⚡ EN CURSO │  │ ✅ COMPLETADA│
│             │  │             │  │             │
│  Tareas por │→ │  Tareas en  │→ │  Tareas     │
│  hacer      │  │  progreso   │  │  terminadas │
└─────────────┘  └─────────────┘  └─────────────┘
```

### Primeros Pasos

1. **Crea tu primera tarea** escribiendo en el campo de texto superior
2. **Muévela** a "En Curso" cuando empieces a trabajar
3. **Márcala completada** cuando termines

---

## ✍️ CREAR TAREAS

### Método Básico

1. Escribe el texto de tu tarea en el campo **"Agregar nueva tarea..."**
2. Click en el botón **"+ Agregar"** (o presiona Enter)
3. La tarea aparecerá en la columna **"Pendiente"**

**Ejemplo:**
```
"Comprar leche" → Enter → ✅ Tarea creada
```

### Método Completo (Con todos los detalles)

Para crear una tarea con todos sus atributos:

#### 1. **Texto de la tarea** (Obligatorio)
```
Ejemplo: "Preparar presentación para reunión del viernes"
```

#### 2. **Prioridad** (Selector desplegable)
- 🔴 **Alta** - Tareas urgentes o importantes
- 🟡 **Media** - Tareas normales (por defecto)
- 🟢 **Baja** - Tareas que pueden esperar

**Cuándo usar cada prioridad:**
- **Alta:** Deadlines urgentes, problemas críticos
- **Media:** Trabajo diario normal
- **Baja:** Ideas, mejoras futuras, tareas opcionales

#### 3. **Categoría** (Selector desplegable)
Organiza tus tareas por tipo:
- 💼 **Trabajo** - Tareas laborales
- 👤 **Personal** - Asuntos personales
- 📚 **Estudio** - Aprendizaje y cursos
- 🏠 **Casa** - Tareas del hogar
- ❤️ **Salud** - Ejercicio, médico, bienestar
- 📌 **Otros** - Cualquier otra cosa

#### 4. **Fecha de Vencimiento** (Opcional)
- Click en el campo de fecha/hora
- Selecciona fecha y hora límite
- Las tareas con fecha vencida se marcan en **rojo**

**Ejemplo completo:**
```
Texto: "Enviar informe mensual"
Prioridad: Alta
Categoría: Trabajo
Fecha: 28/02/2026 17:00
→ Click "Agregar"
```

### Validación de Duplicados

Si intentas crear una tarea con el mismo texto:
- ⚠️ El sistema te preguntará si estás seguro
- Puedes confirmar o cancelar

---

## 🔧 GESTIONAR TAREAS

Cada tarea tiene 3 acciones disponibles:

### 1. ✏️ **Editar Tarea**

**Cómo editar:**
1. Click en el botón **"✏ Editar"** de la tarea
2. Se abrirá un cuadro de diálogo con el texto actual
3. Modifica el texto
4. Click "Aceptar" para guardar

**Ejemplo:**
```
Original: "Comprar pan"
Editado: "Comprar pan integral y leche"
```

**⚠️ Nota:** Solo puedes editar el texto. Para cambiar prioridad o categoría, debes eliminar y recrear la tarea.

### 2. 🗑️ **Eliminar Tarea**

**Cómo eliminar:**
1. Click en el botón **"🗑 Eliminar"**
2. Confirma en el diálogo que aparece
3. La tarea se eliminará permanentemente

**⚠️ Advertencia:** Esta acción no se puede deshacer.

### 3. 🔄 **Cambiar Estado**

Hay **dos formas** de cambiar el estado de una tarea:

#### Opción A: Botones de Acción

Cada tarea muestra botones según su estado actual:

**En "Pendiente":**
- **▶ En Curso** - Mover a "En Curso"

**En "En Curso":**
- **◀ Pendiente** - Volver a "Pendiente"
- **✓ Completar** - Marcar como completada

**En "Completada":**
- **◀ En Curso** - Reabrir la tarea

#### Opción B: Drag & Drop (Arrastrar y Soltar)

1. **Click y mantén presionado** en la tarjeta de la tarea
2. **Arrastra** hacia otra columna
3. **Suelta** cuando veas el resaltado de la columna

**💡 Consejo:** El drag & drop es más rápido para mover varias tareas.

---

## 📊 SISTEMA KANBAN

### Flujo de Trabajo Recomendado

```
1. CREAR → Todas las tareas empiezan en "Pendiente"
            ↓
2. EMPEZAR → Mueve a "En Curso" cuando empieces a trabajar
            ↓
3. COMPLETAR → Mueve a "Completada" cuando termines
            ↓
4. LIMPIAR → Elimina tareas completadas periódicamente
```

### Mejores Prácticas

#### ✅ DO (Hacer):
- Mantén máximo 3-5 tareas en "En Curso"
- Limpia las tareas completadas semanalmente
- Usa fechas de vencimiento para deadlines importantes
- Revisa diariamente las tareas pendientes

#### ❌ DON'T (Evitar):
- No acumules muchas tareas en "En Curso" (genera estrés)
- No dejes tareas en "Pendiente" por semanas sin revisarlas
- No uses solo prioridad "Alta" (pierde significado)

### Contadores en Tiempo Real

En la parte superior verás 3 números grandes:

```
┌────────────┬────────────┬────────────┐
│     5      │     2      │     15     │
│ Pendientes │  En Curso  │Completadas │
└────────────┴────────────┴────────────┘
```

Estos se actualizan automáticamente al mover tareas.

---

## 🎨 PRIORIDADES Y CATEGORÍAS

### Sistema de Prioridades

Las prioridades se muestran con colores distintivos:

| Prioridad | Color | Cuándo Usar |
|-----------|-------|-------------|
| 🔴 **ALTA** | Rojo | Urgente, deadline cercano, crítico |
| 🟡 **MEDIA** | Naranja | Trabajo normal diario |
| 🟢 **BAJA** | Gris | Puede esperar, sin urgencia |

**Ordenamiento Automático:**
Las tareas se ordenan automáticamente dentro de cada columna:
1. Primero: Prioridad Alta
2. Segundo: Prioridad Media
3. Tercero: Prioridad Baja

### Sistema de Categorías

Las categorías ayudan a organizar tareas por tipo:

#### 💼 **Trabajo**
```
Ejemplos:
- "Revisar correos pendientes"
- "Preparar reporte trimestral"
- "Reunión con cliente"
```

#### 👤 **Personal**
```
Ejemplos:
- "Llamar al banco"
- "Renovar pasaporte"
- "Organizar fotos de vacaciones"
```

#### 📚 **Estudio**
```
Ejemplos:
- "Terminar curso de Python"
- "Leer capítulo 5 del libro"
- "Hacer ejercicios de matemáticas"
```

#### 🏠 **Casa**
```
Ejemplos:
- "Limpiar garaje"
- "Reparar grifo del baño"
- "Comprar mueble nuevo"
```

#### ❤️ **Salud**
```
Ejemplos:
- "Ir al gimnasio"
- "Cita con dentista"
- "Comprar vitaminas"
```

#### 📌 **Otros**
```
Ejemplos:
- Cualquier tarea que no encaje en las categorías anteriores
```

---

## 📅 FECHAS DE VENCIMIENTO

### Agregar Fecha de Vencimiento

1. Al crear la tarea, click en el campo de **fecha/hora**
2. Selecciona la fecha usando el calendario
3. Selecciona la hora (opcional, por defecto 00:00)
4. Crea la tarea

### Visualización de Fechas

Las tareas con fecha de vencimiento muestran:

```
┌──────────────────────────────────┐
│ 🔴 ALTA                          │
│                                  │
│ Enviar informe mensual           │
│ 📅 28 de febrero de 2026, 17:00 │ ← Fecha visible
│                                  │
│ ▶ En Curso  ✏ Editar  🗑 Eliminar│
└──────────────────────────────────┘
```

### Alertas de Vencimiento

#### 🔴 Tarea Vencida
Si la fecha ya pasó y la tarea NO está completada:
- Borde rojo grueso (3px)
- Fecha en rojo
- Aparece en notificaciones

#### ⚠️ Próxima a Vencer (< 24 horas)
Si faltan menos de 24 horas:
- Notificación del navegador
- Verificación cada 60 segundos

### Notificaciones Automáticas

La aplicación verifica cada minuto si hay tareas:
- ⏰ **Próximas a vencer** (menos de 24h)
- 🔴 **Ya vencidas**

**Ejemplo de notificación:**
```
🔔 Recordatorio de Tareas

Tienes 2 tareas próximas a vencer y 1 tarea vencida.
¡Revisa tu tablero Kanban!
```

### Activar Notificaciones

La primera vez que cargues la aplicación:
1. El navegador te pedirá permiso para enviar notificaciones
2. Click en **"Permitir"**
3. Las notificaciones se activarán automáticamente

**⚠️ Si rechazaste el permiso:**
- Ve a configuración del navegador
- Busca "Notificaciones"
- Permite notificaciones para esta página

---

## 🔍 FILTROS Y BÚSQUEDA

### Buscador de Texto

En la parte superior hay un campo de **búsqueda**:

```
🔍 Buscar tareas...
```

**Cómo usar:**
1. Escribe cualquier palabra o frase
2. Las tareas se filtran en tiempo real
3. Busca en el texto de la tarea

**Ejemplos:**
```
"reunión" → Muestra todas las tareas que contengan "reunión"
"informe" → Muestra tareas con "informe" en el texto
"cliente" → Filtra tareas relacionadas con clientes
```

**💡 La búsqueda NO distingue mayúsculas/minúsculas**

### Filtro por Prioridad

Selector: **"Todas las prioridades"**

Opciones:
- Todas las prioridades (sin filtro)
- 🔴 Alta
- 🟡 Media
- 🟢 Baja

**Ejemplo:**
Selecciona "Alta" → Solo muestra tareas de prioridad alta

### Filtro por Categoría

Selector: **"Todas las categorías"**

Opciones:
- Todas las categorías (sin filtro)
- 💼 Trabajo
- 👤 Personal
- 📚 Estudio
- 🏠 Casa
- ❤️ Salud
- 📌 Otros

**Ejemplo:**
Selecciona "Trabajo" → Solo muestra tareas de trabajo

### Filtro por Estado

Selector: **"Todos los estados"**

Opciones:
- Todos los estados (sin filtro)
- 📝 Pendiente
- ⚡ En Curso
- ✅ Completada

**Ejemplo:**
Selecciona "Completada" → Solo muestra tareas completadas

### Combinar Filtros

Puedes usar **varios filtros a la vez**:

**Ejemplo 1:**
```
Búsqueda: "informe"
Prioridad: Alta
Categoría: Trabajo
→ Muestra solo informes de trabajo de alta prioridad
```

**Ejemplo 2:**
```
Categoría: Personal
Estado: Pendiente
→ Muestra tareas personales pendientes
```

### Limpiar Filtros

Para volver a ver todas las tareas:
1. Click en el botón **"🔄 Limpiar Filtros"**
2. Todos los filtros se resetean
3. Verás todas las tareas nuevamente

---

## 💾 EXPORTAR DATOS

La aplicación permite exportar tus tareas en 3 formatos:

### 1. 📄 **Exportar JSON**

**¿Qué es JSON?**
Formato de datos estructurados, útil para:
- Hacer respaldos
- Importar a otras aplicaciones
- Compartir con otros usuarios

**Cómo exportar:**
1. Click en **"📄 Exportar JSON"**
2. Se descarga un archivo: `tareas-kanban.json`
3. Guárdalo en un lugar seguro

**Ejemplo del archivo:**
```json
[
  {
    "id": "tarea-1708401600000-xyz789",
    "texto": "Comprar leche",
    "estado": "pendiente",
    "prioridad": "media",
    "categoria": "casa",
    "fechaVencimiento": null,
    "fechaCreacion": 1708401600000
  }
]
```

**💡 Uso:** Respaldo semanal recomendado

### 2. 📊 **Exportar CSV**

**¿Qué es CSV?**
Formato de tabla compatible con:
- Microsoft Excel
- Google Sheets
- LibreOffice Calc

**Cómo exportar:**
1. Click en **"📊 Exportar CSV"**
2. Se descarga: `tareas-kanban.csv`
3. Abre con Excel o Google Sheets

**Columnas del CSV:**
```
ID | Texto | Estado | Prioridad | Categoría | Fecha Vencimiento | Fecha Creación
```

**💡 Uso:** Análisis de datos, reportes, gráficos

### 3. 📕 **Exportar PDF**

**¿Para qué sirve?**
- Imprimir tu lista de tareas
- Compartir por email
- Archivar reportes

**Cómo exportar:**
1. Click en **"📕 Exportar PDF"**
2. Se abre una nueva ventana con vista previa
3. Click en **Imprimir** o **Guardar como PDF**

**Contenido del PDF:**
- Todas las tareas organizadas por columna
- Fecha de exportación
- Totales por estado

**💡 Uso:** Reuniones, impresión, archivo físico

---

## 🌓 TEMA CLARO/OSCURO

### Cambiar de Tema

En la esquina superior derecha verás un botón:
- 🌙 **Luna** = Tema claro activo (click para cambiar a oscuro)
- ☀️ **Sol** = Tema oscuro activo (click para cambiar a claro)

**Cómo cambiar:**
1. Click en el botón 🌙/☀️
2. El tema cambia instantáneamente
3. Tu preferencia se guarda automáticamente

### Tema Claro (Por defecto)

```
✅ Fondo blanco
✅ Texto oscuro
✅ Colores vibrantes
✅ Mejor para luz natural
```

**Cuándo usar:**
- Durante el día
- Con buena iluminación
- Presentaciones
- Impresión

### Tema Oscuro

```
✅ Fondo oscuro
✅ Texto claro
✅ Colores suaves
✅ Menos fatiga visual
```

**Cuándo usar:**
- Por la noche
- Poca luz ambiental
- Sesiones largas de trabajo
- Reducir cansancio visual

### Persistencia

Tu elección de tema se guarda automáticamente:
- Se mantiene al recargar la página
- Se guarda en el navegador (localStorage)
- Específico para cada navegador/dispositivo

---

## 🔔 NOTIFICACIONES

### Tipos de Notificaciones

#### 1. **Tareas Próximas a Vencer**
```
🔔 Recordatorio de Tareas

Tienes 3 tareas próximas a vencer.
¡Revisa tu tablero Kanban!
```

**Se activa cuando:**
- Una tarea tiene fecha de vencimiento
- Faltan menos de 24 horas
- La tarea NO está completada

#### 2. **Tareas Vencidas**
```
⚠️ Tareas Vencidas

Tienes 1 tarea vencida.
¡Revisa tu tablero Kanban!
```

**Se activa cuando:**
- La fecha de vencimiento ya pasó
- La tarea NO está completada

### Frecuencia de Verificación

La aplicación verifica cada **60 segundos** si hay:
- Nuevas tareas próximas a vencer
- Tareas que acaban de vencerse

### Configurar Notificaciones

#### Primera vez:
1. Al cargar la aplicación, aparece un mensaje del navegador
2. Click en **"Permitir"**
3. ¡Listo! Recibirás notificaciones

#### Si rechazaste el permiso:

**Chrome:**
1. Click en el icono de candado/info (izquierda de la URL)
2. Busca "Notificaciones"
3. Cambia a "Permitir"
4. Recarga la página

**Firefox:**
1. Click en el icono de candado
2. "Permisos" → "Notificaciones"
3. Marca "Permitir"
4. Recarga la página

**Edge:**
1. Click en el icono de información
2. "Permisos del sitio"
3. "Notificaciones" → "Permitir"
4. Recarga la página

### Desactivar Notificaciones

Si no quieres recibir notificaciones:
1. Configuración del navegador
2. Busca "Notificaciones"
3. Encuentra esta página
4. Cambia a "Bloquear"

**⚠️ Nota:** Las alertas visuales en el tablero (bordes rojos) seguirán funcionando.

---

## ⌨️ ATAJOS DE TECLADO

### Crear Tarea Rápida

```
1. Escribe en el campo de texto
2. Presiona ENTER
3. ✅ Tarea creada con configuración por defecto
```

**Configuración por defecto:**
- Prioridad: Media
- Categoría: Sin categoría
- Fecha: Sin fecha

### Navegación

```
TAB           → Navegar entre campos
SHIFT + TAB   → Navegar hacia atrás
ENTER         → Agregar tarea (desde campo de texto)
ESC           → Cancelar diálogos
```

### Filtros Rápidos

```
Click en campo de búsqueda → Escribe y filtra en tiempo real
```

---

## 💡 CONSEJOS Y TRUCOS

### 1. Organización Efectiva

#### Método GTD (Getting Things Done)
```
1. Captura → Crea TODAS las tareas que se te ocurran
2. Clarifica → Asigna prioridad y categoría
3. Organiza → Usa las columnas Kanban
4. Reflexiona → Revisa diariamente
5. Ejecuta → Trabaja en "En Curso"
```

#### Regla de las 3 Tareas
```
Cada día, selecciona solo 3 tareas prioritarias
Móvelas a "En Curso"
Enfócate en completarlas antes de agregar más
```

#### Método Pomodoro con Kanban
```
1. Elige una tarea de "En Curso"
2. Trabaja 25 minutos
3. Descansa 5 minutos
4. Repite 4 veces
5. Mueve a "Completada"
```

### 2. Gestión de Prioridades

#### Matriz de Eisenhower
```
URGENTE + IMPORTANTE = Alta prioridad
URGENTE + NO IMPORTANTE = Media prioridad
NO URGENTE + IMPORTANTE = Media prioridad
NO URGENTE + NO IMPORTANTE = Baja prioridad
```

#### Revisión Semanal
```
Lunes: Revisa todas las tareas pendientes
Martes-Viernes: Ejecuta tareas
Viernes tarde: Limpia completadas y planea siguiente semana
```

### 3. Uso de Categorías

#### Contexto de Trabajo
```
💼 Trabajo → Solo en horario laboral
👤 Personal → Después del trabajo
📚 Estudio → Fines de semana
🏠 Casa → Sábados/Domingos
```

#### Balance de Vida
```
Revisa tus tareas semanalmente:
¿Tienes balance entre trabajo y vida personal?
¿Hay categorías descuidadas?
```

### 4. Fechas de Vencimiento

#### Cuándo Usar Fechas
```
✅ Deadlines reales (cliente, jefe, evento)
✅ Compromisos externos
✅ Fechas límite legales
❌ Metas personales flexibles
❌ "Me gustaría hacerlo en..."
```

#### Buffer Time
```
Si un cliente pide algo para el viernes,
establece la fecha para el jueves.
Así tienes margen de error.
```

### 5. Mantenimiento del Tablero

#### Limpieza Diaria
```
Final del día:
- Revisa tareas completadas
- Mueve a "Pendiente" lo que no avanzó
- Planifica el día siguiente
```

#### Limpieza Semanal
```
Viernes o Domingo:
- Elimina tareas completadas antiguas
- Exporta un respaldo (JSON)
- Revisa tareas vencidas
- Reajusta prioridades
```

#### Limpieza Mensual
```
- Exporta respaldo completo
- Elimina todas las completadas
- Revisa tareas pendientes de hace más de 1 mes
- Decide: ¿Siguen siendo relevantes?
```

### 6. Trucos Avanzados

#### Subtareas con Emojis
```
Original: "Preparar presentación"

Desglosado:
"📊 Presentación - Investigar datos"
"✏️ Presentación - Crear slides"
"🎨 Presentación - Diseñar gráficos"
"🎤 Presentación - Practicar"
```

#### Códigos Personales
```
[P] = Proyecto específico
[C] = Llamada pendiente
[@] = Esperando respuesta de alguien
[5min] = Tarea rápida

Ejemplo: "[P][Sitio Web] Actualizar página de contacto [5min]"
```

#### Tareas Recurrentes
```
Para tareas que repites semanalmente:
"🔁 [Lunes] Revisar correos"
"🔁 [Viernes] Respaldo de datos"

Cuando completes, crea una nueva para la próxima semana
```

### 7. Trabajo en Equipo

#### Compartir Progreso
```
1. Exporta a PDF al final del día
2. Envía a tu equipo/jefe
3. Muestra transparencia en tu trabajo
```

#### Reuniones con Kanban
```
1. Abre tu tablero en la reunión
2. Muestra visualmente tu progreso
3. Explica qué está en "En Curso"
4. Recibe retroalimentación en vivo
```

### 8. Productividad

#### Regla de 2 Minutos
```
Si una tarea toma menos de 2 minutos:
❌ No la agregues al Kanban
✅ Hazla inmediatamente
```

#### Batch Processing
```
Agrupa tareas similares:
- Todas las llamadas juntas
- Todos los correos juntos
- Todas las compras juntas

Úsalas como una categoría o prefijo
```

#### Time Blocking
```
Asigna bloques de tiempo a categorías:
9:00-11:00 → 💼 Trabajo
11:00-12:00 → 📚 Estudio
14:00-17:00 → 💼 Trabajo
17:00-18:00 → 🏠 Casa
```

---

## 🆘 PREGUNTAS FRECUENTES (FAQ)

### ¿Se sincronizan mis tareas entre dispositivos?

**Sí**, si estás usando el backend (MariaDB). Las tareas se guardan en la base de datos y son accesibles desde cualquier navegador.

Si el backend no está disponible, las tareas se guardan solo en el navegador actual (localStorage).

### ¿Puedo recuperar una tarea eliminada?

**No**, las eliminaciones son permanentes. Se recomienda:
- Exportar respaldos semanales (JSON)
- Confirmar siempre antes de eliminar

### ¿Cuántas tareas puedo tener?

**Ilimitadas** técnicamente, pero se recomienda:
- Máximo 50 tareas pendientes
- Máximo 5 tareas en curso
- Limpiar completadas semanalmente

### ¿Puedo cambiar la prioridad o categoría de una tarea?

**No directamente**. Debes:
1. Anotar el texto de la tarea
2. Eliminar la tarea
3. Crear una nueva con los nuevos atributos

### ¿Las fechas se ajustan a mi zona horaria?

**Sí**, el navegador usa tu zona horaria local automáticamente.

### ¿Puedo imprimir solo una columna?

Usa los filtros:
1. Filtro por Estado → Selecciona la columna deseada
2. Exportar PDF
3. Solo esa columna aparecerá

### ¿Funciona sin conexión a internet?

**Sí**, si el backend no está disponible, usa localStorage como respaldo. Las funcionalidades básicas funcionan sin conexión.

### ¿Cómo hago un respaldo de mis tareas?

**Opción 1 (Recomendada):**
- Exportar JSON semanalmente
- Guarda el archivo en tu computadora/nube

**Opción 2:**
- Si usas backend, los datos están en MariaDB
- Haz respaldo de la base de datos

---

## 📞 SOPORTE Y AYUDA

### Si algo no funciona:

1. **Recarga la página** (F5 o Ctrl+R)
2. **Verifica la consola** (F12) para ver errores
3. **Verifica que el backend esté corriendo** (si lo usas)
4. **Limpia el caché del navegador**

### Consulta la documentación técnica:

- `CONEXION_COMPLETADA.md` - Si hay problemas de conexión
- `server/REFERENCIA_MODELOS.md` - Documentación del backend
- `server/INICIO_RAPIDO.md` - Configuración del servidor

---

## 🎓 GLOSARIO

- **Kanban:** Método visual japonés de gestión de tareas
- **Drag & Drop:** Arrastrar y soltar con el ratón
- **Backend:** Servidor que guarda los datos
- **Frontend:** Interfaz que ves en el navegador
- **LocalStorage:** Almacenamiento local del navegador
- **API REST:** Forma de comunicación entre frontend y backend
- **CSV:** Formato de archivo compatible con Excel
- **JSON:** Formato estructurado de datos
- **Timestamp:** Fecha/hora en formato numérico

---

## 🎉 ¡Listo para Empezar!

Ahora que conoces todas las funcionalidades, ¡empieza a usar tu Tablero Kanban!

### Primer paso recomendado:

1. Crea 3 tareas de prueba con diferentes prioridades
2. Muévelas entre columnas usando drag & drop
3. Prueba los filtros y búsqueda
4. Cambia al tema oscuro
5. Exporta un JSON de respaldo

### Recursos adicionales:

- GitHub Copilot puede ayudarte con dudas específicas
- Lee las mejores prácticas en la sección "Consejos y Trucos"
- Experimenta con las diferentes funcionalidades

---

**¡Feliz gestión de tareas! 📋✨**

*Última actualización: Febrero 2026*

