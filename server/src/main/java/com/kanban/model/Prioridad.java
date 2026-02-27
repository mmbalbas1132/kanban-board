package com.kanban.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Prioridad {
    ALTA("alta"),
    MEDIA("media"),
    BAJA("baja");

    private final String apiValue;

    Prioridad(String apiValue) {
        this.apiValue = apiValue;
    }

    @JsonValue
    public String getApiValue() {
        return apiValue;
    }

    @JsonCreator
    public static Prioridad fromValue(String value) {
        if (value == null) {
            return null;
        }
        String normalized = value.trim();
        for (Prioridad prioridad : values()) {
            if (prioridad.name().equalsIgnoreCase(normalized) || prioridad.apiValue.equalsIgnoreCase(normalized)) {
                return prioridad;
            }
        }
        throw new IllegalArgumentException("Prioridad no valida: " + value);
    }
}

