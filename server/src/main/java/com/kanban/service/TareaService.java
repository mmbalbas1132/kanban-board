package com.kanban.service;

import com.kanban.dto.EstadoUpdateRequest;
import com.kanban.dto.TareaRequest;
import com.kanban.dto.TareaResponse;
import com.kanban.model.Estado;
import com.kanban.model.Prioridad;

import java.util.List;

public interface TareaService {

    TareaResponse crearTarea(TareaRequest request);

    TareaResponse obtenerTareaPorId(Long id);

    List<TareaResponse> obtenerTodasLasTareas();

    TareaResponse actualizarTarea(Long id, TareaRequest request);

    void eliminarTarea(Long id);

    TareaResponse cambiarEstado(Long id, EstadoUpdateRequest request);

    void eliminarTareasCompletadas();

    List<TareaResponse> obtenerTareasPorEstado(Estado estado);

    List<TareaResponse> obtenerTareasPorPrioridad(Prioridad prioridad);

    List<TareaResponse> obtenerTareasPorCategoria(String categoria);

    List<TareaResponse> buscarTareasPorTexto(String texto);

    List<TareaResponse> obtenerTareasVencidas();

    long contarTareasPorEstado(Estado estado);
}

