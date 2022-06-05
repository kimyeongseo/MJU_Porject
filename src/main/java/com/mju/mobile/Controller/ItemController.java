package com.mju.mobile.Config.Controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.mju.mobile.Exception.Item.AlreadyRecommendationException;
import com.mju.mobile.Model.Item.Item;
import com.mju.mobile.Model.Response.CommonResponse;
import com.mju.mobile.Request.Item.ItemSaveRequest;
import com.mju.mobile.Request.Item.RecommendationRequest;
import com.mju.mobile.Service.Item.ItemService;
import com.mju.mobile.Service.Response.ResponseService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {

    private final ItemService itemService;
    private final ResponseService responseService;

    @GetMapping("/{itemId}")
    public CommonResponse itemDetail(@PathVariable("itemId") Integer id) {
        Item itme = itemService.findById(id);
        return responseService.singleResponse(itme);
    }

    @GetMapping("/written/{clientId}")
    public CommonResponse written(@PathVariable("clientId")String clientId) {
        List<Item> items = itemService.getWritten(clientId);
        return responseService.listResponse(items);
    }

    @PostMapping("/save")
    public CommonResponse itemSave(@RequestParam(value = "item") String json,
                                   @RequestParam(value = "itemPhoto") List<MultipartFile> itemPhotoSaveRequest) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper().registerModule(new SimpleModule());
        ItemSaveRequest itemSaveRequest = objectMapper.readValue(json, new TypeReference<ItemSaveRequest>() {});
        itemService.save(itemSaveRequest.toEntity(), itemPhotoSaveRequest);
        return responseService.getSuccessfulResult();
    }

    @PostMapping("/recommendation")
    public CommonResponse recommendation(@RequestBody RecommendationRequest recommendationRequest) {
        this.tryRecommendation(recommendationRequest);
        return responseService.getSuccessfulResult();
    }

    private void tryRecommendation(RecommendationRequest recommendationRequest) {
        try {
            itemService.recommendation(recommendationRequest.getClientId(), recommendationRequest.getItemId());
        } catch (Exception e) {
            throw new AlreadyRecommendationException();
        }
    }
}
