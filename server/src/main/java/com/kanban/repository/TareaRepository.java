package com.kanban.repository;

import com.kanban.model.Estado;
import com.kanban.model.Prioridad;
import com.kanban.model.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TareaRepository extends JpaRepository<Tarea, Long> {

    List<Tarea> findByEstado(Estado estado);

    List<Tarea> findByPrioridad(Prioridad prioridad);

    List<Tarea> findByCategoria(String categoria);

    List<Tarea> findByTextoContainingIgnoreCase(String texto);

    List<Tarea> findByEstadoAndPrioridad(Estado estado, Prioridad prioridad);

    @Query("SELECT t FROM Tarea t WHERE t.fechaVencimiento < CURRENT_TIMESTAMP AND t.estado <> 'COMPLETADA'")
    List<Tarea> findTareasVencidas();

    long countByEstado(Estado estado);

    List<Tarea> findAllByOrderByPrioridadAscFechaCreacionDesc();

    void deleteByEstado(Estado estado);
}

