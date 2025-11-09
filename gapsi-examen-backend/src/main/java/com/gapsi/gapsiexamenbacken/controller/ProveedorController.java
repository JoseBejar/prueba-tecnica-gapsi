package com.gapsi.gapsiexamenbacken.controller;


import com.gapsi.gapsiexamenbacken.dto.PageResponseDto;
import com.gapsi.gapsiexamenbacken.dto.ProveedorRequestDto;
import com.gapsi.gapsiexamenbacken.dto.ProveedorResponseDto;
import com.gapsi.gapsiexamenbacken.service.ProveedorService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/proveedores")
@CrossOrigin(origins = "*")
public class ProveedorController {

    private static final String PAGE_SIZE_0 = "0";
    private static final String  PAGE_SIZE_10 = "10";

    private final ProveedorService proveedorService;

    public ProveedorController(ProveedorService proveedorService) {
        this.proveedorService = proveedorService;
    }

    @GetMapping
    public PageResponseDto<ProveedorResponseDto> listar(
            @RequestParam(defaultValue = PAGE_SIZE_0) int page,
            @RequestParam(defaultValue = PAGE_SIZE_10) int size
    ) {
        return proveedorService.listar(page, size);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProveedorResponseDto crear(@RequestBody @Valid ProveedorRequestDto dto) {
        return proveedorService.crear(dto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminar(@PathVariable Long id) {
        proveedorService.eliminar(id);
    }
}
