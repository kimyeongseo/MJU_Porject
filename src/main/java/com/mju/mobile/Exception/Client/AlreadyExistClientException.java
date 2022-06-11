package com.mju.mobile.Exception.Client;

public class AlreadyExistClientException extends RuntimeException{
    public AlreadyExistClientException() {
        super();
    }

    public AlreadyExistClientException(String message) {
        super(message);
    }

    public AlreadyExistClientException(String message, Throwable th) {
        super(message, th);
    }
}
