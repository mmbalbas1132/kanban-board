-- ========================================
-- SETUP COMPLETO DE KANBAN_DB
-- ========================================

-- 1. Crear la base de datos
CREATE DATABASE IF NOT EXISTS kanban_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- 2. Usar la base de datos
USE kanban_db;

-- 3. Crear tabla TAREAS
CREATE TABLE IF NOT EXISTS tareas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    texto VARCHAR(500) NOT NULL,
    estado VARCHAR(20) NOT NULL,
    prioridad VARCHAR(10) NOT NULL,
    categoria VARCHAR(50),
    fecha_vencimiento DATETIME,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_estado (estado),
    INDEX idx_prioridad (prioridad),
    INDEX idx_categoria (categoria),
    INDEX idx_fecha_vencimiento (fecha_vencimiento)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Crear usuario kanban si no existe
CREATE USER IF NOT EXISTS 'kanban'@'localhost' IDENTIFIED BY 'kanban';

-- 5. Otorgar permisos
GRANT ALL PRIVILEGES ON kanban_db.* TO 'kanban'@'localhost';
GRANT CREATE ON *.* TO 'kanban'@'localhost';
FLUSH PRIVILEGES;

-- 6. Verificar creación
SELECT '=== SETUP COMPLETADO ===' as Mensaje;
SELECT DATABASE() as 'Base de Datos Actual';
SHOW TABLES;

-- 7. Insertar datos de prueba (opcional)
INSERT INTO tareas (texto, estado, prioridad, categoria, fecha_vencimiento, fecha_creacion, fecha_actualizacion)
VALUES
    ('Configurar backend Spring Boot', 'COMPLETADA', 'ALTA', 'trabajo', NULL, NOW(), NOW()),
    ('Conectar frontend con API', 'EN_CURSO', 'ALTA', 'trabajo', DATE_ADD(NOW(), INTERVAL 2 DAY), NOW(), NOW()),
    ('Documentar endpoints REST', 'PENDIENTE', 'MEDIA', 'trabajo', DATE_ADD(NOW(), INTERVAL 5 DAY), NOW(), NOW());

-- 8. Mostrar resultados
SELECT '=== TABLA TAREAS ===' as Tipo;
SELECT * FROM tareas;

