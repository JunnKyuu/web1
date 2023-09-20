package com.group.libraryapp.controller.user;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @PostMapping("/user") // POST /user
    public void saveUser(@RequestBody userCreateRequest request) {

    }
}
