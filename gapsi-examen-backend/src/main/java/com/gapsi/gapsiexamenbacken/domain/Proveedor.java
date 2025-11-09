package com.gapsi.gapsiexamenbacken.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Entity
@Table(name = "proveedores", uniqueConstraints = {
        @UniqueConstraint(name = "uk_proveedor_nombre", columnNames = "nombre")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Proveedor {

    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false, length = 100)
    private String nombre;

    @NotBlank
    @Column(name = "razon_social", nullable = false, length = 150)
    private String razonSocial;

    @NotBlank
    @Column(nullable = false, length = 255)
    private String direccion;

}
