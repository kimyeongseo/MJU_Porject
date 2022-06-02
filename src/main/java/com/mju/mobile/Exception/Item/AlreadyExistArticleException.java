package com.mju.mobile.Exception.Item;

public class AlreadyExistArticleException extends RuntimeException{
    public AlreadyExistArticleException() {
        super();
    }

    public AlreadyExistArticleException(String message) {
        super(message);
    }

    public AlreadyExistArticleException(String message, Throwable th) {
        super(message, th);
    }
}
