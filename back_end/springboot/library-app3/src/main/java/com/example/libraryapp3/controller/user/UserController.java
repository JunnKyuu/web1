package com.example.libraryapp3.controller.user;

import com.example.libraryapp3.domain.user.User;
import com.example.libraryapp3.dto.request.user.UserCreateRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {
    private final List<User> users = new ArrayList<>();

    @PostMapping("/user")
    public void saveUser(@RequestBody UserCreateRequest request) {
        users.add(new User(request.getName(), request.getAge()));
    }

}
