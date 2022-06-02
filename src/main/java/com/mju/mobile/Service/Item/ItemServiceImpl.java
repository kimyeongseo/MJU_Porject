package com.mju.mobile.Service.Item;

import com.mju.mobile.Exception.Item.AlreadyExistArticleException;
import com.mju.mobile.Model.Item.Item;
import com.mju.mobile.Model.Item.ItemPhoto;
import com.mju.mobile.Repository.ItemPhotoRepository;
import com.mju.mobile.Repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService{

    private final ItemRepository itemRepository;
    private final ItemPhotoRepository itemPhotoRepository;
    private final ItemPhotoService itemPhotoService;

    @Override
    public void save(Item item, List<MultipartFile> itemPhotoSaveRequest) throws IOException {
        Optional<Integer> id = this.itemRepository.getItemId(item.getOwnerId(), item.getTitle());
        if(id != null) {
            throw new AlreadyExistArticleException();
        } else {
            this.itemRepository.save(item);
        }
        List<String> photoUrls = this.itemPhotoService.save(itemPhotoSaveRequest);
        for(String url: photoUrls) {
            ItemPhoto itemPhoto = new ItemPhoto();
            itemPhoto.setId(id.get());
            itemPhoto.setUrl(url);
            this.itemPhotoRepository.save(itemPhoto);
        }
    }

    @Override
    public Item findById(Integer id) {
        Item item = this.itemRepository.findById(id).orElseThrow(RuntimeException::new);
        return item;
    }

    @Override
    public List<Item> getWritten(String clientId) {
        List<Item> items = this.itemRepository.getWritten(clientId);
        return items;
    }

    @Override
    public void recommendation(String clientId, int itemId) {
        this.itemRepository.recommendation(clientId, itemId);
    }
}
