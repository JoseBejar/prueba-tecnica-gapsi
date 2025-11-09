package com.gapsi.gapsiexamenbacken.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppInfoDto {

    private String mensajeBienvenida;
    private String version;
}
