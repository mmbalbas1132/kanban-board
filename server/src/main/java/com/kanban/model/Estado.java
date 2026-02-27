package com.kanban.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Estado {
    PENDIENTE("pendiente"),
    EN_CURSO("en-curso"),
    COMPLETADA("completada");

    private final String apiValue;

    Estado(String apiValue) {
        this.apiValue = apiValue;
    }

    @JsonValue
    public String getApiValue() {
        return apiValue;
    }

    @JsonCreator
    public static Estado fromValue(String value) {
        if (value == null) {
            return null;
        }
        String normalized = value.trim();
        for (Estado estado : values()) {
            if (estado.name().equalsIgnoreCase(normalized) || estado.apiValue.equalsIgnoreCase(normalized)) {
                return estado;
            }
        }
        throw new IllegalArgumentException("Estado no valido: " + value);
    }
}

