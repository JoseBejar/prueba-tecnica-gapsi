package com.gapsi.gapsiexamenbacken.repository;

import com.gapsi.gapsiexamenbacken.domain.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProveedorRepository extends JpaRepository<Proveedor, Long> {

    boolean existsByNombreIgnoreCase(String nombre);
}
