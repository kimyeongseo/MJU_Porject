package com.mju.mobile.Service.Response;

import com.mju.mobile.Config.Constant.Constant;
import com.mju.mobile.Model.Response.CommonResponse;
import com.mju.mobile.Model.Response.ListResponse;
import com.mju.mobile.Model.Response.SingleResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponseService {

    public <T> SingleResponse<T> singleResponse(T data) {
        SingleResponse<T> response = new SingleResponse<T>();
        response.setData(data);
        this.setSuccessResult(response);
        return response;
    }

    public <T> ListResponse<T> listResponse(List<T> list) {
        ListResponse<T> result = new ListResponse<T>();
        result.setList(list);
        this.setSuccessResult(result);
        return result;
    }

    public CommonResponse getSuccessfulResult() {
        CommonResponse result = new CommonResponse();
        this.setSuccessResult(result);
        return result;
    }

    public CommonResponse getFailResponse(int code, String message) {
        CommonResponse response = new CommonResponse();
        response.setSuccess(Constant.ConstantResponseSrvice.failFlag);
        response.setCode(code);
        response.setMessage(message);
        return response;
    }

    private void setSuccessResult(CommonResponse response) {
        response.setSuccess(Constant.ConstantResponseSrvice.successFlag);
        response.setCode(Constant.ConstantResponseSrvice.successCode);
        response.setMessage(Constant.ConstantResponseSrvice.successMessage);
    }
}
