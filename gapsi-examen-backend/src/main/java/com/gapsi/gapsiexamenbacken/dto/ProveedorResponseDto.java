package com.gapsi.gapsiexamenbacken.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProveedorResponseDto {

    private Long id;
    private String nombre;
    private String razonSocial;
    private String direccion;
}
