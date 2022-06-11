package com.mju.mobile.Exception.Item;

public class AlreadyRecommendationException extends RuntimeException{
    public AlreadyRecommendationException() {
        super();
    }

    public AlreadyRecommendationException(String message) {
        super(message);
    }

    public AlreadyRecommendationException(String message, Throwable th) {
        super(message, th);
    }
}
