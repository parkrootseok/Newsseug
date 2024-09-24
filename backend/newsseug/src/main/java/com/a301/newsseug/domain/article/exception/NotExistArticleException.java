package com.a301.newsseug.domain.article.exception;

import com.a301.newsseug.global.exception.BaseException;
import com.a301.newsseug.global.exception.ErrorCode;

public class NotExistArticleException extends BaseException {
    public NotExistArticleException() {
        super(ErrorCode.NOT_EXIST_ARTICLE);
    }
}