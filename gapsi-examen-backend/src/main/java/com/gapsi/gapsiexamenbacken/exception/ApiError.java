package com.gapsi.gapsiexamenbacken.exception;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ApiError {

    private LocalDateTime timestamp = LocalDateTime.now();
    private int status;
    private String mensaje;

    public ApiError(int status, String mensaje) {
        this.status = status;
        this.mensaje = mensaje;
    }
}
