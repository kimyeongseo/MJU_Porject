package com.mju.mobile.Request.Client;

import lombok.Data;

@Data
public class PasswordUpdateRequest {
    private String id;
    private String password;
}
