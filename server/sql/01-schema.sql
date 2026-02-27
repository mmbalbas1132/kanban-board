-- Schema de la tabla tareas generado por Hibernate
-- Base de datos: kanban_db
-- Usuario: kanban

CREATE DATABASE IF NOT EXISTS kanban_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE kanban_db;

CREATE TABLE tareas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    texto VARCHAR(500) NOT NULL,
    estado VARCHAR(20) NOT NULL,
    prioridad VARCHAR(10) NOT NULL,
    categoria VARCHAR(50),
    fecha_vencimiento DATETIME,
    fecha_creacion DATETIME NOT NULL,
    fecha_actualizacion DATETIME NOT NULL,

    INDEX idx_estado (estado),
    INDEX idx_prioridad (prioridad),
    INDEX idx_categoria (categoria),
    INDEX idx_fecha_vencimiento (fecha_vencimiento)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Datos de prueba (opcional)
INSERT INTO tareas (texto, estado, prioridad, categoria, fecha_vencimiento, fecha_creacion, fecha_actualizacion)
VALUES
    ('Configurar backend Spring Boot', 'COMPLETADA', 'ALTA', 'trabajo', NULL, NOW(), NOW()),
    ('Conectar frontend con API', 'EN_CURSO', 'ALTA', 'trabajo', DATE_ADD(NOW(), INTERVAL 2 DAY), NOW(), NOW()),
    ('Documentar endpoints REST', 'PENDIENTE', 'MEDIA', 'trabajo', DATE_ADD(NOW(), INTERVAL 5 DAY), NOW(), NOW());

