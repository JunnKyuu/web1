package com.example.libraryapp2.domain.user;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id = null;

    @Column(nullable = false, length = 20, name = "name")
    private String name;
    private Integer age;

    protected User() {}

    public User(Long id, String name, Integer age) {
        if (name == null || name.isBlank()){
            throw new IllegalArgumentException(
                    String.format("잘못된  name(%s)이 들어왔습니다",name)
            );
        }
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public Long getId() { return id; }

    public String getName() { return name; }

    public Integer getAge() { return age; }
}
