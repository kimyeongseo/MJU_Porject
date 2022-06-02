package com.mju.mobile.Service.Item;

import com.mju.mobile.Model.Item.Item;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ItemService {
    public void save(Item itemSaveRequest, List<MultipartFile> itemPhotoSaveRequest) throws IOException;

    public Item findById(Integer id);

    public List<Item> getWritten(String clientId);

    public void recommendation(String clientId, int itemId);
}
