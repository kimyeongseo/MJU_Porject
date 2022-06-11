package com.mju.mobile.Service.Item;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ItemPhotoService {
    public List<String> save(List<MultipartFile> itemPhotoSaveRequest) throws IOException;
}
