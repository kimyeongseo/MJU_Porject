package com.mju.mobile.Request.Client;

import lombok.Data;

import java.time.LocalDate;

@Data
public class SignUpRequest {
    private String id;
    private String password;
    private String name;
    private LocalDate birth;
    private String phone;
    private String email;
}
