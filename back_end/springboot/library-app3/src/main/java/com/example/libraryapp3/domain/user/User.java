package com.example.libraryapp3.domain.user;

public class User {
    private String name;
    private Integer age;

    public User(String name, Integer age) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException(String.format("Wrong name(%s)", name));
        }
        this.name = name;
        this.age = age;
    }
}
