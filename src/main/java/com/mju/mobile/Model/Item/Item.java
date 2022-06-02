package com.mju.mobile.Model.Item;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Item{
    @Id
    private int id;
    private String ownerId;
    private String title;
    private String content;
    private int views;
    private int likes;

    @OneToMany
    @JoinColumn(name = "id")
    private List<ItemPhoto> photos = new ArrayList<ItemPhoto>();
}
