package com.kanban.service.impl;

import com.kanban.dto.EstadoUpdateRequest;
import com.kanban.dto.TareaRequest;
import com.kanban.dto.TareaResponse;
import com.kanban.exception.TareaNotFoundException;
import com.kanban.model.Estado;
import com.kanban.model.Prioridad;
import com.kanban.model.Tarea;
import com.kanban.repository.TareaRepository;
import com.kanban.service.TareaService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TareaServiceImpl implements TareaService {

    private final TareaRepository tareaRepository;

    public TareaServiceImpl(TareaRepository tareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    @Override
    public TareaResponse crearTarea(TareaRequest request) {
        Tarea tarea = new Tarea();
        tarea.setTexto(request.getTexto());
        tarea.setEstado(request.getEstado());
        tarea.setPrioridad(request.getPrioridad());
        tarea.setCategoria(request.getCategoria());
        tarea.setFechaVencimiento(request.getFechaVencimiento());
        return new TareaResponse(tareaRepository.save(tarea));
    }

    @Override
    @Transactional(readOnly = true)
    public TareaResponse obtenerTareaPorId(Long id) {
        return new TareaResponse(obtenerEntidadPorId(id));
    }

    @Override
    @Transactional(readOnly = true)
    public List<TareaResponse> obtenerTodasLasTareas() {
        return mapToResponse(tareaRepository.findAllByOrderByPrioridadAscFechaCreacionDesc());
    }

    @Override
    public TareaResponse actualizarTarea(Long id, TareaRequest request) {
        Tarea tarea = obtenerEntidadPorId(id);
        tarea.setTexto(request.getTexto());
        tarea.setEstado(request.getEstado());
        tarea.setPrioridad(request.getPrioridad());
        tarea.setCategoria(request.getCategoria());
        tarea.setFechaVencimiento(request.getFechaVencimiento());
        return new TareaResponse(tareaRepository.save(tarea));
    }

    @Override
    public void eliminarTarea(Long id) {
        Tarea tarea = obtenerEntidadPorId(id);
        tareaRepository.delete(tarea);
    }

    @Override
    public TareaResponse cambiarEstado(Long id, EstadoUpdateRequest request) {
        Tarea tarea = obtenerEntidadPorId(id);
        tarea.setEstado(request.getEstado());
        return new TareaResponse(tareaRepository.save(tarea));
    }

    @Override
    public void eliminarTareasCompletadas() {
        tareaRepository.deleteByEstado(Estado.COMPLETADA);
    }

    @Override
    @Transactional(readOnly = true)
    public List<TareaResponse> obtenerTareasPorEstado(Estado estado) {
        return mapToResponse(tareaRepository.findByEstado(estado));
    }

    @Override
    @Transactional(readOnly = true)
    public List<TareaResponse> obtenerTareasPorPrioridad(Prioridad prioridad) {
        return mapToResponse(tareaRepository.findByPrioridad(prioridad));
    }

    @Override
    @Transactional(readOnly = true)
    public List<TareaResponse> obtenerTareasPorCategoria(String categoria) {
        return mapToResponse(tareaRepository.findByCategoria(categoria));
    }

    @Override
    @Transactional(readOnly = true)
    public List<TareaResponse> buscarTareasPorTexto(String texto) {
        return mapToResponse(tareaRepository.findByTextoContainingIgnoreCase(texto));
    }

    @Override
    @Transactional(readOnly = true)
    public List<TareaResponse> obtenerTareasVencidas() {
        return mapToResponse(tareaRepository.findTareasVencidas());
    }

    @Override
    @Transactional(readOnly = true)
    public long contarTareasPorEstado(Estado estado) {
        return tareaRepository.countByEstado(estado);
    }

    private Tarea obtenerEntidadPorId(Long id) {
        return tareaRepository.findById(id).orElseThrow(() -> new TareaNotFoundException(id));
    }

    private List<TareaResponse> mapToResponse(List<Tarea> tareas) {
        return tareas.stream().map(TareaResponse::new).toList();
    }
}

