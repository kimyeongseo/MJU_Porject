package com.mju.mobile.Config.Controller;

import com.mju.mobile.Exception.Auth.ClientNotFoundException;
import com.mju.mobile.Exception.Auth.WrongPasswordException;
import com.mju.mobile.Model.Client.Client;
import com.mju.mobile.Model.Response.CommonResponse;
import com.mju.mobile.Repository.ClientRepository;
import com.mju.mobile.Request.Auth.LoginRequest;
import com.mju.mobile.Service.Response.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final ClientRepository authRepository;
    private final ResponseService responseService;

    @PostMapping("/login")
    public CommonResponse login(@RequestBody LoginRequest loginRequest) {
        Client auth = authRepository.findById(loginRequest.getId()).orElseThrow(ClientNotFoundException::new);
        CommonResponse response = this.verifyPassword(auth, loginRequest);
        return response;
    }

    private CommonResponse verifyPassword(Client auth, LoginRequest loginRequest) {
        if(auth.getPassword().matches(loginRequest.getPassword())) {
            return responseService.singleResponse("success");
        } else {
            throw new WrongPasswordException();
        }
    }
}
