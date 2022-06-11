package com.mju.mobile.Config.Constant;

public class Constant {
    public class ConstantResponseSrvice {
        public static final boolean successFlag = true;
        public static final boolean failFlag = false;
        public static final int successCode = 200;
        public static final String successMessage = "Success";
    }

    public class ConstantAdviceException {
        public static final int codeAuthNotFoundException = -1001;
        public static final String messageAuthNotFoundException = "Auth Not Found";

        public static final int codeWrongPasswordException = -1002;
        public static final String messageWrongPasswordException = "Password is not correct";

        public static final int codeItemNotFoundException = -1003;
        public static final String messageItemNotFoundException = "Item Not Found";

        public static final int codeAlreadyExistClientException = -1004;
        public static final String messageAlreadyExistClientException = "Auth is already Exist";

        public static final int codeAlreadyExistArticleException = -1005;
        public static final String messageAlreadyExistArticleException = "Already Exist Article";

        public static final int codeAlreadyRecommendationException = -1006;
        public static final String messageAlreadyRecommendationException = "Already RecommendationException";
    }
}
