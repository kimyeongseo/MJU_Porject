package com.mju.mobile.Exception.Auth;

public class WrongPasswordException extends RuntimeException{

    public WrongPasswordException() {
        super();
    }
    public WrongPasswordException(String message) {
        super(message);
    }

    public WrongPasswordException(String message, Throwable th) {
        super(message, th);
    }
}
