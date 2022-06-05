package com.mju.mobile.Config.Controller;

import com.mju.mobile.Model.Client.Client;
import com.mju.mobile.Model.Item.Item;
import com.mju.mobile.Model.Response.CommonResponse;
import com.mju.mobile.Request.Client.EmailChangeRequest;
import com.mju.mobile.Request.Client.PasswordUpdateRequest;
import com.mju.mobile.Service.Client.ClientService;
import com.mju.mobile.Service.Response.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/clients")
public class ClientController {

    private final ClientService clientService;
    private final ResponseService responseService;

    @GetMapping("/{id}")
    public CommonResponse clientDetail(@PathVariable("id")String id) {
        Client client = clientService.findById(id);
        return responseService.singleResponse(client);
    }

    @PostMapping("/signUp")
    public CommonResponse signUp(@RequestBody Client client) {
        clientService.signUp(client);
        return responseService.getSuccessfulResult();
    }

    @PutMapping("/email")
    public CommonResponse updateEmail(@RequestBody EmailChangeRequest emailChangeRequest) {
        clientService.updateEmail(emailChangeRequest.getId(), emailChangeRequest.getEmail());
        return responseService.getSuccessfulResult();
    }

    @PutMapping("/password")
    public CommonResponse updatePassword(@RequestBody PasswordUpdateRequest passwordUpdateRequest) {
        clientService.updatePassword(passwordUpdateRequest.getId(), passwordUpdateRequest.getPassword());
        return responseService.getSuccessfulResult();
    }
}
