package com.mju.mobile.Request.Item;

import com.mju.mobile.Model.Item.Item;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ItemSaveRequest {
    private String ownerId;
    private String title;
    private String content;

    public Item toEntity() {
        Item item = new Item();
        item.setOwnerId(this.ownerId);
        item.setTitle(this.title);
        item.setContent(this.content);
        item.setViews(0);
        item.setLikes(0);
        return item;
    }
}
