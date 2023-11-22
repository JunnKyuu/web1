package com.example.userservice.controller;

import com.example.userservice.vo.RequestUser;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class UserController {
    private Environment env;

    public UserController(Environment env) { this.env = env; }

    // User Service가 살아서 돌아가는지 체크하는 기능
    @GetMapping("/health_check")
    public String status() { return "It's Working in User Service"; }

    // welcome message 생성
    @GetMapping("/welcome")
    public String welcome() { return env.getProperty("greeting.message"); }

    // 회원가입 api
    @PostMapping("/users")
    public String createUser(@RequestBody RequestUser user) {
        return "Create user method is called";
    }
}
