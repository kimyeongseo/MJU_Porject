package com.mju.mobile.Service.Item;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ItemPhotoServiceImpl implements ItemPhotoService{

    @Override
    public List<String> save(List<MultipartFile> multipartFile) throws IOException {
        List<String> urls = new ArrayList<String>();
        for(MultipartFile a: multipartFile){
            File uploadFile = convert(a).orElseThrow(() -> new IllegalArgumentException("파일 변환 실패"));
            urls.add("ItemPhoto" + "/" + a.getOriginalFilename());
        }
        return urls;
    }

    private Optional<File> convert(MultipartFile file) throws IOException {
        File convertFile = new File("ItemPhoto" + "/" + file.getOriginalFilename());
        if (convertFile.createNewFile()) { // 위에서 지정한 경로에 파일 생성
            try (FileOutputStream fos = new FileOutputStream(convertFile)) { // 데이터를 파일에 바이트 스트림으로 저장
                fos.write(file.getBytes());
            }
            return Optional.of(convertFile);
        }
        return Optional.empty();
    }
}
