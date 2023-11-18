package com.example.libraryapp2.controller.user;

import com.example.libraryapp2.domain.user.Fruit;
import com.example.libraryapp2.dto.user.request.UserCreateRequest;
import com.example.libraryapp2.dto.user.request.UserUpdateRequest;
import com.example.libraryapp2.service.user.UserServiceJPA;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private final UserServiceJPA userServiceJPA;
    public UserController(UserServiceJPA userServiceJPA) { this.userServiceJPA = userServiceJPA; }

    @GetMapping("/user")
    public void saveUser(@RequestBody UserCreateRequest request) {
        userServiceJPA.saveUser(request);
    }




}
