package com.kanban.exception;

public class TareaNotFoundException extends RuntimeException {

    public TareaNotFoundException(Long id) {
        super("No se encontro la tarea con ID: " + id);
    }
}
