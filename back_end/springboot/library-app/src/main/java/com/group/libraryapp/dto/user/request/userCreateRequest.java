package com.group.libraryapp.dto.user.request;

public class userCreateRequest {
    private String name; // 별도 null은 체크
    private Integer age; // 대문자 Integer는 null을 표현

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }
}
