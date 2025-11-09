package com.gapsi.gapsiexamenbacken.controller;

import com.gapsi.gapsiexamenbacken.dto.AppInfoDto;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class InfoController {

    private static final String APP_VERSION = "v1.0.0";
    private static final String APP_BIENVENIDA= "Bienvenido Candidato 01";

    @GetMapping("/info")
    public AppInfoDto obtenerInfo() {
        return new AppInfoDto(APP_BIENVENIDA, APP_VERSION);
    }

}
