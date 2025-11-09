package com.gapsi.gapsiexamenbacken.service;

import com.gapsi.gapsiexamenbacken.domain.Proveedor;
import com.gapsi.gapsiexamenbacken.dto.PageResponseDto;
import com.gapsi.gapsiexamenbacken.dto.ProveedorRequestDto;
import com.gapsi.gapsiexamenbacken.dto.ProveedorResponseDto;
import com.gapsi.gapsiexamenbacken.exception.RecursoDuplicadoException;
import com.gapsi.gapsiexamenbacken.repository.ProveedorRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class ProveedorService {

    private static final String MENSAJE_EXISTE_PROVEEDOR = "Ya existe un proveedor con el nombre: ";


    private final ProveedorRepository proveedorRepository;

    public ProveedorService(ProveedorRepository proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }

    public PageResponseDto<ProveedorResponseDto> listar(int pagina, int tamanio) {
        Page<Proveedor> page = proveedorRepository.findAll(PageRequest.of(pagina, tamanio));

        return new PageResponseDto<>(
                page.map(p -> new ProveedorResponseDto(
                        p.getId(), p.getNombre(), p.getRazonSocial(), p.getDireccion())
                ).getContent(),
                page.getNumber(),
                page.getSize(),
                page.getTotalElements(),
                page.getTotalPages()
        );
    }

    public ProveedorResponseDto crear(ProveedorRequestDto dto) {
        if (proveedorRepository.existsByNombreIgnoreCase(dto.getNombre())) {
            throw new RecursoDuplicadoException(MENSAJE_EXISTE_PROVEEDOR+" " + dto.getNombre());
        }

        Proveedor proveedor = Proveedor.builder()
                .nombre(dto.getNombre())
                .razonSocial(dto.getRazonSocial())
                .direccion(dto.getDireccion())
                .build();

        Proveedor guardado = proveedorRepository.save(proveedor);

        return new ProveedorResponseDto(
                guardado.getId(),
                guardado.getNombre(),
                guardado.getRazonSocial(),
                guardado.getDireccion()
        );
    }

    public void eliminar(Long id) {
        proveedorRepository.deleteById(id);
    }

}
