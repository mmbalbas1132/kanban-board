package com.kanban.controller;

import com.kanban.dto.EstadoUpdateRequest;
import com.kanban.dto.TareaRequest;
import com.kanban.dto.TareaResponse;
import com.kanban.model.Estado;
import com.kanban.model.Prioridad;
import com.kanban.service.TareaService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tareas")
public class TareaController {

    private final TareaService tareaService;

    public TareaController(TareaService tareaService) {
        this.tareaService = tareaService;
    }

    @GetMapping
    public ResponseEntity<List<TareaResponse>> obtenerTodas() {
        return ResponseEntity.ok(tareaService.obtenerTodasLasTareas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TareaResponse> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(tareaService.obtenerTareaPorId(id));
    }

    @GetMapping("/estado/{estado}")
    public ResponseEntity<List<TareaResponse>> obtenerPorEstado(@PathVariable String estado) {
        return ResponseEntity.ok(tareaService.obtenerTareasPorEstado(parseEstado(estado)));
    }

    @GetMapping("/prioridad/{prioridad}")
    public ResponseEntity<List<TareaResponse>> obtenerPorPrioridad(@PathVariable String prioridad) {
        return ResponseEntity.ok(tareaService.obtenerTareasPorPrioridad(parsePrioridad(prioridad)));
    }

    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<List<TareaResponse>> obtenerPorCategoria(@PathVariable String categoria) {
        return ResponseEntity.ok(tareaService.obtenerTareasPorCategoria(categoria));
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<TareaResponse>> buscarPorTexto(@RequestParam String texto) {
        return ResponseEntity.ok(tareaService.buscarTareasPorTexto(texto));
    }

    @GetMapping("/vencidas")
    public ResponseEntity<List<TareaResponse>> obtenerVencidas() {
        return ResponseEntity.ok(tareaService.obtenerTareasVencidas());
    }

    @GetMapping("/contar/{estado}")
    public ResponseEntity<Long> contarPorEstado(@PathVariable String estado) {
        return ResponseEntity.ok(tareaService.contarTareasPorEstado(parseEstado(estado)));
    }

    @PostMapping
    public ResponseEntity<TareaResponse> crearTarea(@Valid @RequestBody TareaRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(tareaService.crearTarea(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TareaResponse> actualizarTarea(@PathVariable Long id, @Valid @RequestBody TareaRequest request) {
        return ResponseEntity.ok(tareaService.actualizarTarea(id, request));
    }

    @PatchMapping("/{id}/estado")
    public ResponseEntity<TareaResponse> cambiarEstado(
            @PathVariable Long id,
            @Valid @RequestBody EstadoUpdateRequest request) {
        return ResponseEntity.ok(tareaService.cambiarEstado(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarTarea(@PathVariable Long id) {
        tareaService.eliminarTarea(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/completadas")
    public ResponseEntity<Void> eliminarCompletadas() {
        tareaService.eliminarTareasCompletadas();
        return ResponseEntity.noContent().build();
    }

    private Estado parseEstado(String value) {
        return Estado.fromValue(value);
    }

    private Prioridad parsePrioridad(String value) {
        return Prioridad.fromValue(value);
    }
}

