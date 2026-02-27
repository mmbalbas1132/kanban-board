package com.kanban.dto;

import com.kanban.model.Estado;
import com.kanban.model.Prioridad;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

public class TareaRequest {

    @NotBlank(message = "El texto de la tarea no puede estar vacio")
    @Size(max = 500, message = "El texto no puede superar los 500 caracteres")
    private String texto;

    @NotNull(message = "El estado es obligatorio")
    private Estado estado;

    @NotNull(message = "La prioridad es obligatoria")
    private Prioridad prioridad;

    private String categoria;

    private LocalDateTime fechaVencimiento;

    public TareaRequest() {
    }

    public TareaRequest(String texto, Estado estado, Prioridad prioridad, String categoria, LocalDateTime fechaVencimiento) {
        this.texto = texto;
        this.estado = estado;
        this.prioridad = prioridad;
        this.categoria = categoria;
        this.fechaVencimiento = fechaVencimiento;
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
}

