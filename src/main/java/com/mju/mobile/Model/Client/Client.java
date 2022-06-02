package com.mju.mobile.Model.Client;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Data
@Entity
public class Client {
    @Id
    private String id;
    private String password;
    private String email;
    private String phone;
    private String name;
    private LocalDate birth;
}
