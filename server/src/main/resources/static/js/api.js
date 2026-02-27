/**
 * API Module - Conexión con el Backend REST
 *
 * Este módulo maneja todas las llamadas HTTP al backend Spring Boot
 */

const API_BASE_URL = '/api';

/**
 * Configuración de fetch con manejo de errores
 */
const fetchConfig = {
    headers: {
        'Content-Type': 'application/json',
    }
};

// ============================================
// FUNCIONES DE API
// ============================================

/**
 * Verifica si el backend está disponible
 * @returns {Promise<boolean>}
 */
async function verificarBackend() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`, {
            method: 'GET',
            headers: fetchConfig.headers
        });
        return response.ok;
    } catch (error) {
        console.error('❌ Backend no disponible:', error);
        return false;
    }
}

/**
 * Obtiene todas las tareas desde el backend
 * @returns {Promise<Array>} Array de tareas
 */
async function obtenerTodasLasTareas() {
    try {
        const response = await fetch(`${API_BASE_URL}/tareas`, {
            method: 'GET',
            headers: fetchConfig.headers
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const tareasBackend = await response.json();
        return tareasBackend.map(mapearTareaBackendAFrontend);
    } catch (error) {
        console.error('❌ Error al obtener tareas:', error);
        throw error;
    }
}

/**
 * Crea una nueva tarea en el backend
 * @param {Object} tarea - Datos de la tarea a crear
 * @returns {Promise<Object>} Tarea creada
 */
async function crearTarea(tarea) {
    try {
        const tareaRequest = mapearTareaFrontendABackend(tarea);

        const response = await fetch(`${API_BASE_URL}/tareas`, {
            method: 'POST',
            headers: fetchConfig.headers,
            body: JSON.stringify(tareaRequest)
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Error al crear tarea');
        }

        const tareaCreada = await response.json();
        return mapearTareaBackendAFrontend(tareaCreada);
    } catch (error) {
        console.error('❌ Error al crear tarea:', error);
        throw error;
    }
}

/**
 * Actualiza una tarea existente
 * @param {string} id - ID de la tarea
 * @param {Object} tarea - Datos actualizados
 * @returns {Promise<Object>} Tarea actualizada
 */
async function actualizarTarea(id, tarea) {
    try {
        const tareaRequest = mapearTareaFrontendABackend(tarea);

        const response = await fetch(`${API_BASE_URL}/tareas/${id}`, {
            method: 'PUT',
            headers: fetchConfig.headers,
            body: JSON.stringify(tareaRequest)
        });

        if (!response.ok) {
            throw new Error('Error al actualizar tarea');
        }

        const tareaActualizada = await response.json();
        return mapearTareaBackendAFrontend(tareaActualizada);
    } catch (error) {
        console.error('❌ Error al actualizar tarea:', error);
        throw error;
    }
}

/**
 * Cambia solo el estado de una tarea
 * @param {string} id - ID de la tarea
 * @param {string} nuevoEstado - Nuevo estado ('pendiente', 'en-curso', 'completada')
 * @returns {Promise<Object>} Tarea actualizada
 */
async function cambiarEstadoTarea(id, nuevoEstado) {
    try {
        const estadoBackend = mapearEstadoFrontendABackend(nuevoEstado);

        const response = await fetch(`${API_BASE_URL}/tareas/${id}/estado`, {
            method: 'PATCH',
            headers: fetchConfig.headers,
            body: JSON.stringify({ estado: estadoBackend })
        });

        if (!response.ok) {
            throw new Error('Error al cambiar estado');
        }

        const tareaActualizada = await response.json();
        return mapearTareaBackendAFrontend(tareaActualizada);
    } catch (error) {
        console.error('❌ Error al cambiar estado:', error);
        throw error;
    }
}

/**
 * Elimina una tarea
 * @param {string} id - ID de la tarea a eliminar
 * @returns {Promise<void>}
 */
async function eliminarTarea(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/tareas/${id}`, {
            method: 'DELETE',
            headers: fetchConfig.headers
        });

        if (!response.ok) {
            throw new Error('Error al eliminar tarea');
        }
    } catch (error) {
        console.error('❌ Error al eliminar tarea:', error);
        throw error;
    }
}

/**
 * Elimina todas las tareas completadas
 * @returns {Promise<void>}
 */
async function eliminarTareasCompletadas() {
    try {
        const response = await fetch(`${API_BASE_URL}/tareas/completadas`, {
            method: 'DELETE',
            headers: fetchConfig.headers
        });

        if (!response.ok) {
            throw new Error('Error al eliminar tareas completadas');
        }
    } catch (error) {
        console.error('❌ Error al eliminar tareas completadas:', error);
        throw error;
    }
}

/**
 * Busca tareas por texto
 * @param {string} texto - Texto a buscar
 * @returns {Promise<Array>} Tareas encontradas
 */
async function buscarTareasPorTexto(texto) {
    try {
        const response = await fetch(`${API_BASE_URL}/tareas/buscar?texto=${encodeURIComponent(texto)}`, {
            method: 'GET',
            headers: fetchConfig.headers
        });

        if (!response.ok) {
            throw new Error('Error al buscar tareas');
        }

        const tareas = await response.json();
        return tareas.map(mapearTareaBackendAFrontend);
    } catch (error) {
        console.error('❌ Error al buscar tareas:', error);
        throw error;
    }
}

/**
 * Obtiene tareas filtradas por estado
 * @param {string} estado - Estado a filtrar
 * @returns {Promise<Array>} Tareas filtradas
 */
async function obtenerTareasPorEstado(estado) {
    try {
        const estadoBackend = mapearEstadoFrontendABackend(estado);
        const response = await fetch(`${API_BASE_URL}/tareas/estado/${estadoBackend}`, {
            method: 'GET',
            headers: fetchConfig.headers
        });

        if (!response.ok) {
            throw new Error('Error al obtener tareas por estado');
        }

        const tareas = await response.json();
        return tareas.map(mapearTareaBackendAFrontend);
    } catch (error) {
        console.error('❌ Error al obtener tareas por estado:', error);
        throw error;
    }
}

// ============================================
// FUNCIONES DE MAPEO (Frontend ↔ Backend)
// ============================================

/**
 * Mapea una tarea del backend al formato del frontend
 * @param {Object} tareaBackend - Tarea desde la API
 * @returns {Object} Tarea en formato frontend
 */
function mapearTareaBackendAFrontend(tareaBackend) {
    return {
        id: tareaBackend.id.toString(),
        texto: tareaBackend.texto,
        estado: mapearEstadoBackendAFrontend(tareaBackend.estado),
        prioridad: tareaBackend.prioridad.toLowerCase(),
        categoria: tareaBackend.categoria || '',
        fechaVencimiento: tareaBackend.fechaVencimiento
            ? new Date(tareaBackend.fechaVencimiento).getTime()
            : null,
        fechaCreacion: new Date(tareaBackend.fechaCreacion).getTime()
    };
}

/**
 * Mapea una tarea del frontend al formato del backend
 * @param {Object} tareaFrontend - Tarea desde el frontend
 * @returns {Object} Tarea en formato backend
 */
function mapearTareaFrontendABackend(tareaFrontend) {
    return {
        texto: tareaFrontend.texto,
        estado: mapearEstadoFrontendABackend(tareaFrontend.estado),
        prioridad: tareaFrontend.prioridad.toUpperCase(),
        categoria: tareaFrontend.categoria || null,
        fechaVencimiento: tareaFrontend.fechaVencimiento
            ? new Date(tareaFrontend.fechaVencimiento).toISOString().slice(0, 19)
            : null
    };
}

/**
 * Mapea estado del frontend al backend
 * @param {string} estadoFrontend - 'pendiente' | 'en-curso' | 'completada'
 * @returns {string} 'PENDIENTE' | 'EN_CURSO' | 'COMPLETADA'
 */
function mapearEstadoFrontendABackend(estadoFrontend) {
    const mapeo = {
        'pendiente': 'PENDIENTE',
        'en-curso': 'EN_CURSO',
        'completada': 'COMPLETADA'
    };
    return mapeo[estadoFrontend] || 'PENDIENTE';
}

/**
 * Mapea estado del backend al frontend
 * @param {string} estadoBackend - 'PENDIENTE' | 'EN_CURSO' | 'COMPLETADA'
 * @returns {string} 'pendiente' | 'en-curso' | 'completada'
 */
function mapearEstadoBackendAFrontend(estadoBackend) {
    const mapeo = {
        'PENDIENTE': 'pendiente',
        'EN_CURSO': 'en-curso',
        'COMPLETADA': 'completada'
    };
    return mapeo[estadoBackend] || 'pendiente';
}

// ============================================
// EXPORTAR FUNCIONES
// ============================================

// Si se usa como módulo ES6
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        verificarBackend,
        obtenerTodasLasTareas,
        crearTarea,
        actualizarTarea,
        cambiarEstadoTarea,
        eliminarTarea,
        eliminarTareasCompletadas,
        buscarTareasPorTexto,
        obtenerTareasPorEstado
    };
}


