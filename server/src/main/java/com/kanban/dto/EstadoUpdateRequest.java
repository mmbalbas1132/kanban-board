package com.kanban.dto;

import com.kanban.model.Estado;
import jakarta.validation.constraints.NotNull;

public class EstadoUpdateRequest {

    @NotNull(message = "El estado es obligatorio")
    private Estado estado;

    public EstadoUpdateRequest() {
    }

    public EstadoUpdateRequest(Estado estado) {
        this.estado = estado;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
}

