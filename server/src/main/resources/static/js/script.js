/**
 * @typedef {Object} Tarea
 * @property {string} id - ID único de la tarea
 * @property {string} texto - Texto de la tarea
 * @property {string} estado - Estado: 'pendiente', 'en-curso', 'completada'
 * @property {string} prioridad - Prioridad: 'alta', 'media', 'baja'
 * @property {string} categoria - Categoría de la tarea
 * @property {number|null} fechaVencimiento - Timestamp de vencimiento
 * @property {number} fechaCreacion - Timestamp de creación
 */

// ============================================
// ELEMENTOS DEL DOM
// ============================================
const inputTarea = document.getElementById('inputTarea');
const selectPrioridad = document.getElementById('selectPrioridad');
const selectCategoria = document.getElementById('selectCategoria');
const inputFechaVencimiento = document.getElementById('inputFechaVencimiento');
const btnAgregar = document.getElementById('btnAgregar');
const btnToggleTema = document.getElementById('btnToggleTema');
const btnLimpiarCompletadas = document.getElementById('btnLimpiarCompletadas');

// Filtros y búsqueda
const inputBuscador = document.getElementById('inputBuscador');
const selectFiltroPrioridad = document.getElementById('selectFiltroPrioridad');
const selectFiltroCategoria = document.getElementById('selectFiltroCategoria');
const selectFiltroEstado = document.getElementById('selectFiltroEstado');
const btnLimpiarFiltros = document.getElementById('btnLimpiarFiltros');

// Exportación
const btnExportarJSON = document.getElementById('btnExportarJSON');
const btnExportarCSV = document.getElementById('btnExportarCSV');
const btnExportarPDF = document.getElementById('btnExportarPDF');

const columnaPendiente = document.getElementById('columnaPendiente');
const columnaEnCurso = document.getElementById('columnaEnCurso');
const columnaCompletada = document.getElementById('columnaCompletada');

const contadorPendiente = document.getElementById('contadorPendiente');
const contadorEnCurso = document.getElementById('contadorEnCurso');
const contadorCompletada = document.getElementById('contadorCompletada');

const countPendiente = document.getElementById('countPendiente');
const countEnCurso = document.getElementById('countEnCurso');
const countCompletada = document.getElementById('countCompletada');

// ============================================
// VARIABLES GLOBALES
// ============================================
let tareas = [];
let filtroActivo = {
    busqueda: '',
    prioridad: '',
    categoria: '',
    estado: ''
};

// ============================================
// INICIALIZACIÓN
// ============================================
/**
 * Inicializa la aplicación cargando datos y configurando listeners
 */
async function inicializar() {
    await cargarDatos();
    configurarEventListeners();
    aplicarTemaGuardado();
    renderizarTablero();
    verificarRecordatorios();
    setInterval(verificarRecordatorios, 60000); // Verificar cada minuto
}

// ============================================
// GESTIÓN DE DATOS
// ============================================
/**
 * Carga las tareas desde el backend (con fallback a localStorage)
 */
async function cargarDatos() {
    try {
        // Intentar cargar del backend
        const backendDisponible = await verificarBackend();

        if (backendDisponible) {
            tareas = await obtenerTodasLasTareas();
            console.log('✅ Tareas cargadas del backend:', tareas.length);
        } else {
            // Fallback a localStorage
            console.warn('⚠️ Backend no disponible, usando localStorage');
            const tareasGuardadas = localStorage.getItem('tareasKanban');
            tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
        }
    } catch (error) {
        console.error('❌ Error al cargar tareas:', error);
        // Fallback a localStorage en caso de error
        const tareasGuardadas = localStorage.getItem('tareasKanban');
        tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    }
}

/**
 * Guarda las tareas en localStorage
 */
function guardarEnLocal() {
    localStorage.setItem('tareasKanban', JSON.stringify(tareas));
}

/**
 * Genera un ID único para una tarea
 * @returns {string} ID único basado en timestamp y número aleatorio
 */
function generarId() {
    return `tarea-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// ============================================
// OPERACIONES CON TAREAS
// ============================================
/**
 * Agrega una nueva tarea al tablero
 * Valida que no existan duplicados
 */
async function agregarTarea() {
    const texto = inputTarea.value.trim();
    const prioridad = selectPrioridad.value;
    const categoria = selectCategoria.value;
    const fechaVencimiento = inputFechaVencimiento.value;

    if (texto === '') {
        alert('Por favor, escribe una tarea');
        inputTarea.focus();
        return;
    }

    // Validar duplicados
    if (existeTareaDuplicada(texto)) {
        if (!confirm('Ya existe una tarea similar. ¿Deseas agregarla de todos modos?')) {
            return;
        }
    }

    const nuevaTarea = {
        id: generarId(),
        texto: texto,
        estado: 'pendiente',
        prioridad: prioridad,
        categoria: categoria || '',
        fechaVencimiento: fechaVencimiento ? new Date(fechaVencimiento).getTime() : null,
        fechaCreacion: Date.now()
    };

    try {
        // Intentar crear en el backend
        const tareaCreada = await crearTarea(nuevaTarea);
        tareas.push(tareaCreada);
        console.log('✅ Tarea creada en el backend');
    } catch (error) {
        console.error('❌ Error al crear tarea en backend:', error);
        // Fallback: agregar localmente
        tareas.push(nuevaTarea);
        guardarEnLocal();
    }

    inputTarea.value = '';
    inputTarea.focus();
    selectPrioridad.value = 'media';
    selectCategoria.value = '';
    inputFechaVencimiento.value = '';

    renderizarTablero();
}

/**
 * Verifica si existe una tarea con texto similar
 * @param {string} texto - Texto a verificar
 * @returns {boolean} True si existe una tarea similar
 */
function existeTareaDuplicada(texto) {
    const textoNormalizado = texto.toLowerCase().trim();
    return tareas.some(tarea =>
        tarea.texto.toLowerCase().trim() === textoNormalizado
    );
}

/**
 * Cambia el estado de una tarea
 * @param {string} id - ID de la tarea
 * @param {string} nuevoEstado - Nuevo estado de la tarea
 */
async function cambiarEstado(id, nuevoEstado) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        try {
            // Intentar cambiar estado en el backend
            await cambiarEstadoTarea(id, nuevoEstado);
            tarea.estado = nuevoEstado;
            console.log('✅ Estado actualizado en el backend');
        } catch (error) {
            console.error('❌ Error al cambiar estado en backend:', error);
            // Fallback: cambiar localmente
            tarea.estado = nuevoEstado;
            guardarEnLocal();
        }
        renderizarTablero();
    }
}

/**
 * Elimina una tarea del tablero
 * @param {string} id - ID de la tarea a eliminar
 */
async function eliminarTareaConfirmar(id) {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
        try {
            // Intentar eliminar del backend
            await eliminarTarea(id);
            tareas = tareas.filter(t => t.id !== id);
            console.log('✅ Tarea eliminada del backend');
        } catch (error) {
            console.error('❌ Error al eliminar tarea del backend:', error);
            // Fallback: eliminar localmente
            tareas = tareas.filter(t => t.id !== id);
            guardarEnLocal();
        }
        renderizarTablero();
    }
}

/**
 * Inicia la edición de una tarea
 * @param {string} id - ID de la tarea a editar
 */
async function editarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return;

    const nuevoTexto = prompt('Editar tarea:', tarea.texto);
    if (nuevoTexto && nuevoTexto.trim() !== '') {
        try {
            // Actualizar en el backend
            tarea.texto = nuevoTexto.trim();
            await actualizarTarea(id, tarea);
            console.log('✅ Tarea actualizada en el backend');
        } catch (error) {
            console.error('❌ Error al actualizar tarea en backend:', error);
            // Fallback: actualizar localmente
            tarea.texto = nuevoTexto.trim();
            guardarEnLocal();
        }
        renderizarTablero();
    }
}

/**
 * Elimina todas las tareas completadas
 */
async function limpiarCompletadas() {
    const completadas = tareas.filter(t => t.estado === 'completada').length;

    if (completadas === 0) {
        alert('No hay tareas completadas para limpiar');
        return;
    }

    if (confirm(`¿Deseas eliminar ${completadas} tarea(s) completada(s)?`)) {
        try {
            // Intentar eliminar del backend
            await eliminarTareasCompletadas();
            tareas = tareas.filter(t => t.estado !== 'completada');
            console.log('✅ Tareas completadas eliminadas del backend');
        } catch (error) {
            console.error('❌ Error al eliminar tareas completadas del backend:', error);
            // Fallback: eliminar localmente
            tareas = tareas.filter(t => t.estado !== 'completada');
            guardarEnLocal();
        }
        renderizarTablero();
    }
}

// ============================================
// RENDERIZADO
// ============================================
/**
 * Renderiza todo el tablero Kanban
 * Optimizado para evitar re-renders innecesarios
 */
function renderizarTablero() {
    // Limpiar columnas
    columnaPendiente.innerHTML = '';
    columnaEnCurso.innerHTML = '';
    columnaCompletada.innerHTML = '';

    // Aplicar filtros
    const tareasFiltradas = aplicarFiltros(tareas);

    // Filtrar tareas por estado
    const pendientes = tareasFiltradas.filter(t => t.estado === 'pendiente');
    const enCurso = tareasFiltradas.filter(t => t.estado === 'en-curso');
    const completadas = tareasFiltradas.filter(t => t.estado === 'completada');

    // Renderizar cada columna
    renderizarColumna(pendientes, columnaPendiente);
    renderizarColumna(enCurso, columnaEnCurso);
    renderizarColumna(completadas, columnaCompletada);

    // Actualizar contadores
    actualizarContadores();
}

/**
 * Renderiza las tareas de una columna específica
 * @param {Tarea[]} tareas - Array de tareas a renderizar
 * @param {HTMLElement} columna - Elemento de la columna
 */
function renderizarColumna(tareas, columna) {
    if (tareas.length === 0) {
        columna.innerHTML = '<div class="mensaje-vacio">No hay tareas aquí</div>';
        return;
    }

    // Ordenar por prioridad: alta > media > baja
    const prioridadOrden = { alta: 1, media: 2, baja: 3 };
    const tareasOrdenadas = [...tareas].sort((a, b) =>
        prioridadOrden[a.prioridad] - prioridadOrden[b.prioridad]
    );

    const fragment = document.createDocumentFragment();

    tareasOrdenadas.forEach(tarea => {
        const card = crearTarjetaTarea(tarea);
        fragment.appendChild(card);
    });

    columna.appendChild(fragment);
}

/**
 * Crea el HTML de una tarjeta de tarea
 * @param {Tarea} tarea - Datos de la tarea
 * @returns {HTMLElement} Elemento de la tarjeta
 */
function crearTarjetaTarea(tarea) {
    const card = document.createElement('div');
    card.className = 'tarea-card';
    card.draggable = true;
    card.dataset.id = tarea.id;

    // Verificar si está vencida
    const estaVencida = tarea.fechaVencimiento && tarea.fechaVencimiento < Date.now() && tarea.estado !== 'completada';
    if (estaVencida) {
        card.style.borderColor = 'var(--prioridad-alta)';
        card.style.borderWidth = '3px';
    }

    // Determinar botones según el estado
    let botonesAccion = '';
    if (tarea.estado === 'pendiente') {
        botonesAccion = `<button class="btn-action btn-mover" onclick="cambiarEstado('${tarea.id}', 'en-curso')">▶ En Curso</button>`;
    } else if (tarea.estado === 'en-curso') {
        botonesAccion = `
            <button class="btn-action btn-mover" onclick="cambiarEstado('${tarea.id}', 'pendiente')">◀ Pendiente</button>
            <button class="btn-action btn-mover" onclick="cambiarEstado('${tarea.id}', 'completada')">✓ Completar</button>
        `;
    } else if (tarea.estado === 'completada') {
        botonesAccion = `<button class="btn-action btn-mover" onclick="cambiarEstado('${tarea.id}', 'en-curso')">◀ En Curso</button>`;
    }

    // Mostrar categoría si existe
    const categoriaHTML = tarea.categoria ? `<span class="categoria-badge">${obtenerEmojiCategoria(tarea.categoria)} ${tarea.categoria}</span>` : '';

    // Mostrar fecha de vencimiento si existe
    let fechaHTML = '';
    if (tarea.fechaVencimiento) {
        const fecha = new Date(tarea.fechaVencimiento);
        const fechaTexto = formatearFecha(fecha);
        const claseVencimiento = estaVencida ? 'vencida' : '';
        fechaHTML = `<div class="fecha-vencimiento ${claseVencimiento}">📅 ${fechaTexto}</div>`;
    }

    card.innerHTML = `
        <div class="tarea-header">
            <span class="prioridad-badge prioridad-${tarea.prioridad}">
                ${tarea.prioridad.toUpperCase()}
            </span>
            ${categoriaHTML}
        </div>
        <div class="tarea-texto">${escapeHtml(tarea.texto)}</div>
        ${fechaHTML}
        <div class="tarea-actions">
            ${botonesAccion}
            <button class="btn-action btn-editar" onclick="editarTarea('${tarea.id}')">✏ Editar</button>
            <button class="btn-action btn-eliminar" onclick="eliminarTareaConfirmar('${tarea.id}')">🗑 Eliminar</button>
        </div>
    `;

    // Configurar drag and drop
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);

    return card;
}

/**
 * Escapa caracteres HTML para prevenir XSS
 * @param {string} texto - Texto a escapar
 * @returns {string} Texto escapado
 */
function escapeHtml(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

/**
 * Actualiza todos los contadores del tablero
 */
function actualizarContadores() {
    const pendientes = tareas.filter(t => t.estado === 'pendiente').length;
    const enCurso = tareas.filter(t => t.estado === 'en-curso').length;
    const completadas = tareas.filter(t => t.estado === 'completada').length;

    contadorPendiente.textContent = pendientes;
    contadorEnCurso.textContent = enCurso;
    contadorCompletada.textContent = completadas;

    countPendiente.textContent = pendientes;
    countEnCurso.textContent = enCurso;
    countCompletada.textContent = completadas;
}

// ============================================
// DRAG AND DROP
// ============================================
let tareaArrastrada = null;

/**
 * Maneja el inicio del arrastre
 * @param {DragEvent} e - Evento de arrastre
 */
function handleDragStart(e) {
    tareaArrastrada = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

/**
 * Maneja el fin del arrastre
 * @param {DragEvent} e - Evento de arrastre
 */
function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

/**
 * Configura los eventos de drag and drop en las columnas
 */
function configurarDragAndDrop() {
    const columnas = document.querySelectorAll('.column-content');

    columnas.forEach(columna => {
        columna.addEventListener('dragover', handleDragOver);
        columna.addEventListener('drop', handleDrop);
    });
}

/**
 * Maneja el evento dragover
 * @param {DragEvent} e - Evento de arrastre
 */
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

/**
 * Maneja el evento drop
 * @param {DragEvent} e - Evento de soltar
 */
function handleDrop(e) {
    e.preventDefault();

    if (!tareaArrastrada) return;

    const columna = e.target.closest('.kanban-column');
    if (!columna) return;

    const nuevoEstado = columna.dataset.estado;
    const tareaId = tareaArrastrada.dataset.id;

    cambiarEstado(tareaId, nuevoEstado);
    tareaArrastrada = null;
}

// ============================================
// TEMA OSCURO/CLARO
// ============================================
/**
 * Alterna entre tema claro y oscuro
 */
function toggleTema() {
    const body = document.body;
    const temaActual = body.dataset.tema;

    if (temaActual === 'oscuro') {
        body.removeAttribute('data-tema');
        btnToggleTema.textContent = '🌙';
        localStorage.setItem('tema', 'claro');
    } else {
        body.dataset.tema = 'oscuro';
        btnToggleTema.textContent = '☀️';
        localStorage.setItem('tema', 'oscuro');
    }
}

/**
 * Aplica el tema guardado en localStorage
 */
function aplicarTemaGuardado() {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'oscuro') {
        document.body.dataset.tema = 'oscuro';
        btnToggleTema.textContent = '☀️';
    }
}

// ============================================
// FILTROS Y BÚSQUEDA
// ============================================
/**
 * Aplica los filtros activos a las tareas
 * @param {Tarea[]} tareas - Array de tareas a filtrar
 * @returns {Tarea[]} Array de tareas filtradas
 */
function aplicarFiltros(tareas) {
    return tareas.filter(tarea => {
        // Filtro de búsqueda
        if (filtroActivo.busqueda) {
            const busqueda = filtroActivo.busqueda.toLowerCase();
            const textoTarea = tarea.texto.toLowerCase();
            if (!textoTarea.includes(busqueda)) {
                return false;
            }
        }

        // Filtro de prioridad
        if (filtroActivo.prioridad && tarea.prioridad !== filtroActivo.prioridad) {
            return false;
        }

        // Filtro de categoría
        if (filtroActivo.categoria && tarea.categoria !== filtroActivo.categoria) {
            return false;
        }

        // Filtro de estado
        if (filtroActivo.estado && tarea.estado !== filtroActivo.estado) {
            return false;
        }

        return true;
    });
}

/**
 * Actualiza el filtro de búsqueda
 */
function actualizarBusqueda() {
    filtroActivo.busqueda = inputBuscador.value.trim();
    renderizarTablero();
}

/**
 * Actualiza el filtro de prioridad
 */
function actualizarFiltroPrioridad() {
    filtroActivo.prioridad = selectFiltroPrioridad.value;
    renderizarTablero();
}

/**
 * Actualiza el filtro de categoría
 */
function actualizarFiltroCategoria() {
    filtroActivo.categoria = selectFiltroCategoria.value;
    renderizarTablero();
}

/**
 * Actualiza el filtro de estado
 */
function actualizarFiltroEstado() {
    filtroActivo.estado = selectFiltroEstado.value;
    renderizarTablero();
}

/**
 * Limpia todos los filtros activos
 */
function limpiarFiltros() {
    filtroActivo = {
        busqueda: '',
        prioridad: '',
        categoria: '',
        estado: ''
    };
    inputBuscador.value = '';
    selectFiltroPrioridad.value = '';
    selectFiltroCategoria.value = '';
    selectFiltroEstado.value = '';
    renderizarTablero();
}

// ============================================
// RECORDATORIOS Y FECHAS
// ============================================
/**
 * Verifica si hay tareas próximas a vencer y muestra recordatorios
 */
function verificarRecordatorios() {
    const ahora = Date.now();
    const unDia = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

    tareas.forEach(tarea => {
        if (tarea.fechaVencimiento && tarea.estado !== 'completada') {
            const tiempoRestante = tarea.fechaVencimiento - ahora;

            // Si ya venció
            if (tiempoRestante < 0) {
                const clave = `recordatorio-vencida-${tarea.id}`;
                if (!sessionStorage.getItem(clave)) {
                    mostrarNotificacion(`⚠️ Tarea vencida: "${tarea.texto}"`, 'error');
                    sessionStorage.setItem(clave, 'true');
                }
            }
            // Si vence en menos de 24 horas
            else if (tiempoRestante < unDia) {
                const clave = `recordatorio-pronto-${tarea.id}`;
                if (!sessionStorage.getItem(clave)) {
                    const horas = Math.floor(tiempoRestante / (60 * 60 * 1000));
                    mostrarNotificacion(`⏰ Tarea próxima a vencer en ${horas}h: "${tarea.texto}"`, 'warning');
                    sessionStorage.setItem(clave, 'true');
                }
            }
        }
    });
}

/**
 * Muestra una notificación al usuario
 * @param {string} mensaje - Mensaje a mostrar
 * @param {string} tipo - Tipo de notificación: 'info', 'warning', 'error'
 */
function mostrarNotificacion(mensaje, tipo = 'info') {
    // Usar Notification API si está disponible
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Tablero Kanban', {
            body: mensaje,
            icon: '📋'
        });
    } else {
        // Fallback a alert
        console.log(`[${tipo.toUpperCase()}] ${mensaje}`);
    }
}

/**
 * Solicita permiso para mostrar notificaciones
 */
function solicitarPermisoNotificaciones() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

/**
 * Formatea una fecha para mostrar
 * @param {Date} fecha - Fecha a formatear
 * @returns {string} Fecha formateada
 */
function formatearFecha(fecha) {
    const ahora = new Date();
    const diff = fecha.getTime() - ahora.getTime();
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (dias < 0) {
        return `Vencida ${Math.abs(dias)} día(s) atrás`;
    } else if (dias === 0) {
        return 'Hoy';
    } else if (dias === 1) {
        return 'Mañana';
    } else if (dias < 7) {
        return `En ${dias} días`;
    } else {
        return fecha.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }
}

/**
 * Obtiene el emoji correspondiente a una categoría
 * @param {string} categoria - Nombre de la categoría
 * @returns {string} Emoji de la categoría
 */
function obtenerEmojiCategoria(categoria) {
    const emojis = {
        'trabajo': '💼',
        'personal': '👤',
        'estudio': '📚',
        'casa': '🏠',
        'salud': '❤️',
        'otros': '📌'
    };
    return emojis[categoria] || '📌';
}

// ============================================
// EXPORTACIÓN
// ============================================
/**
 * Exporta las tareas a formato JSON
 */
function exportarJSON() {
    const dataStr = JSON.stringify(tareas, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    descargarArchivo(dataBlob, 'tareas-kanban.json');
}

/**
 * Exporta las tareas a formato CSV
 */
function exportarCSV() {
    let csv = 'ID,Texto,Estado,Prioridad,Categoría,Fecha Vencimiento,Fecha Creación\n';

    tareas.forEach(tarea => {
        const fechaVenc = tarea.fechaVencimiento ? new Date(tarea.fechaVencimiento).toLocaleString('es-ES') : 'Sin fecha';
        const fechaCreac = new Date(tarea.fechaCreacion).toLocaleString('es-ES');
        const textoEscapado = `"${tarea.texto.replace(/"/g, '""')}"`;

        csv += `${tarea.id},${textoEscapado},${tarea.estado},${tarea.prioridad},${tarea.categoria || 'Sin categoría'},${fechaVenc},${fechaCreac}\n`;
    });

    const dataBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    descargarArchivo(dataBlob, 'tareas-kanban.csv');
}

/**
 * Exporta las tareas a formato PDF (versión simplificada con HTML)
 */
function exportarPDF() {
    let html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tareas Kanban</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #2c3e50; text-align: center; }
        .columna { margin-bottom: 30px; }
        .columna h2 { background: #3498db; color: white; padding: 10px; }
        .tarea { border: 1px solid #ddd; padding: 10px; margin: 5px 0; }
        .prioridad-alta { border-left: 5px solid #e74c3c; }
        .prioridad-media { border-left: 5px solid #f39c12; }
        .prioridad-baja { border-left: 5px solid #95a5a6; }
        .categoria { background: #ecf0f1; padding: 3px 8px; border-radius: 3px; font-size: 12px; }
        .fecha { color: #7f8c8d; font-size: 12px; }
    </style>
</head>
<body>
    <h1>📋 Tablero Kanban - Tareas</h1>
    <p style="text-align: center; color: #7f8c8d;">Generado el ${new Date().toLocaleString('es-ES')}</p>
`;

    const estados = ['pendiente', 'en-curso', 'completada'];
    const titulos = { 'pendiente': '📝 Pendiente', 'en-curso': '⚡ En Curso', 'completada': '✅ Completada' };

    estados.forEach(estado => {
        const tareasEstado = tareas.filter(t => t.estado === estado);
        html += `<div class="columna"><h2>${titulos[estado]} (${tareasEstado.length})</h2>`;

        if (tareasEstado.length === 0) {
            html += '<p>No hay tareas en esta columna</p>';
        } else {
            tareasEstado.forEach(tarea => {
                const fechaHTML = tarea.fechaVencimiento
                    ? `<div class="fecha">📅 Vence: ${new Date(tarea.fechaVencimiento).toLocaleString('es-ES')}</div>`
                    : '';
                const categoriaHTML = tarea.categoria
                    ? `<span class="categoria">${obtenerEmojiCategoria(tarea.categoria)} ${tarea.categoria}</span>`
                    : '';

                html += `
                <div class="tarea prioridad-${tarea.prioridad}">
                    <strong>${tarea.texto}</strong>
                    <span style="float: right;">${tarea.prioridad.toUpperCase()}</span>
                    <br>${categoriaHTML}
                    ${fechaHTML}
                </div>`;
            });
        }
        html += '</div>';
    });

    html += '</body></html>';

    const dataBlob = new Blob([html], { type: 'text/html' });
    descargarArchivo(dataBlob, 'tareas-kanban.html');

    alert('Se ha generado un archivo HTML. Ábrelo en tu navegador y usa Ctrl+P para imprimir o guardar como PDF.');
}

/**
 * Descarga un archivo Blob
 * @param {Blob} blob - Blob del archivo
 * @param {string} nombreArchivo - Nombre del archivo
 */
function descargarArchivo(blob, nombreArchivo) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ============================================
// EVENT LISTENERS
// ============================================
/**
 * Configura todos los event listeners de la aplicación
 */
function configurarEventListeners() {
    btnAgregar.addEventListener('click', agregarTarea);
    btnToggleTema.addEventListener('click', toggleTema);
    btnLimpiarCompletadas.addEventListener('click', limpiarCompletadas);

    inputTarea.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    });

    // Filtros y búsqueda
    inputBuscador.addEventListener('input', actualizarBusqueda);
    selectFiltroPrioridad.addEventListener('change', actualizarFiltroPrioridad);
    selectFiltroCategoria.addEventListener('change', actualizarFiltroCategoria);
    selectFiltroEstado.addEventListener('change', actualizarFiltroEstado);
    btnLimpiarFiltros.addEventListener('click', limpiarFiltros);

    // Exportación
    btnExportarJSON.addEventListener('click', exportarJSON);
    btnExportarCSV.addEventListener('click', exportarCSV);
    btnExportarPDF.addEventListener('click', exportarPDF);

    // Solicitar permisos de notificación
    solicitarPermisoNotificaciones();

    configurarDragAndDrop();
}

// ============================================
// INICIAR APLICACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', inicializar);


