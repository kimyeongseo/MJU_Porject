package com.mju.mobile.Exception.Item;

public class ItemNotFoundException extends RuntimeException{

    public ItemNotFoundException() {
        super();
    }

    public ItemNotFoundException(String message) {
        super(message);
    }

    public ItemNotFoundException(String message, Throwable th) {
        super(message, th);
    }
}
