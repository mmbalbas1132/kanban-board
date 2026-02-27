package com.kanban.dto;

import com.kanban.model.Estado;
import com.kanban.model.Prioridad;
import com.kanban.model.Tarea;

import java.time.LocalDateTime;

public class TareaResponse {

    private Long id;
    private String texto;
    private Estado estado;
    private Prioridad prioridad;
    private String categoria;
    private LocalDateTime fechaVencimiento;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;

    public TareaResponse() {
    }

    public TareaResponse(Long id, String texto, Estado estado, Prioridad prioridad, String categoria,
                         LocalDateTime fechaVencimiento, LocalDateTime fechaCreacion, LocalDateTime fechaActualizacion) {
        this.id = id;
        this.texto = texto;
        this.estado = estado;
        this.prioridad = prioridad;
        this.categoria = categoria;
        this.fechaVencimiento = fechaVencimiento;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public TareaResponse(Tarea tarea) {
        this(tarea.getId(), tarea.getTexto(), tarea.getEstado(), tarea.getPrioridad(), tarea.getCategoria(),
                tarea.getFechaVencimiento(), tarea.getFechaCreacion(), tarea.getFechaActualizacion());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public Prioridad getPrioridad() {
        return prioridad;
    }

    public void setPrioridad(Prioridad prioridad) {
        this.prioridad = prioridad;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public LocalDateTime getFechaVencimiento() {
        return fechaVencimiento;
    }

    public void setFechaVencimiento(LocalDateTime fechaVencimiento) {
        this.fechaVencimiento = fechaVencimiento;
    }

    public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDateTime fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public LocalDateTime getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(LocalDateTime fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }
}
