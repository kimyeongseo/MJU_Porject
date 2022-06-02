package com.mju.mobile.Exception.Advice;

import com.mju.mobile.Config.Constant.Constant;
import com.mju.mobile.Exception.Auth.ClientNotFoundException;
import com.mju.mobile.Exception.Auth.WrongPasswordException;
import com.mju.mobile.Exception.Client.AlreadyExistClientException;
import com.mju.mobile.Exception.Item.AlreadyExistArticleException;
import com.mju.mobile.Exception.Item.AlreadyRecommendationException;
import com.mju.mobile.Exception.Item.ItemNotFoundException;
import com.mju.mobile.Model.Response.CommonResponse;
import com.mju.mobile.Service.Response.ResponseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RequiredArgsConstructor
@RestControllerAdvice
public class AdviceExceptionException {

    private final ResponseService responseService;

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(ClientNotFoundException.class)
    protected CommonResponse authNotFoundException() {
        return responseService.getFailResponse(Constant.ConstantAdviceException.codeAuthNotFoundException,Constant.ConstantAdviceException.messageAuthNotFoundException);
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(WrongPasswordException.class)
    protected CommonResponse wrongPasswordException() {
        return responseService.getFailResponse(Constant.ConstantAdviceException.codeWrongPasswordException,Constant.ConstantAdviceException.messageWrongPasswordException);
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(ItemNotFoundException.class)
    protected CommonResponse itemNotFoundException() {
        return responseService.getFailResponse(Constant.ConstantAdviceException.codeItemNotFoundException,Constant.ConstantAdviceException.messageItemNotFoundException);
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(AlreadyExistClientException.class)
    protected CommonResponse alreadyExistClientException() {
        return responseService.getFailResponse(Constant.ConstantAdviceException.codeAlreadyExistClientException,Constant.ConstantAdviceException.messageAlreadyExistClientException);
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(AlreadyExistArticleException.class)
    protected CommonResponse alreadyExistArticleException() {
        return responseService.getFailResponse(Constant.ConstantAdviceException.codeAlreadyExistArticleException,Constant.ConstantAdviceException.messageAlreadyExistArticleException);
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(AlreadyRecommendationException.class)
    protected CommonResponse alreadyRecommendationException() {
        return responseService.getFailResponse(Constant.ConstantAdviceException.codeAlreadyRecommendationException,Constant.ConstantAdviceException.messageAlreadyRecommendationException);
    }
}
