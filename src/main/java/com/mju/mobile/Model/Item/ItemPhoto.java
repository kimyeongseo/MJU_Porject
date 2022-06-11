package com.mju.mobile.Model.Item;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class ItemPhoto {
    @Id
    private int id;
    private String url;
}
