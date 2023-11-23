package com.example.userservice.controller;

import com.example.userservice.dto.UserDto;
import com.example.userservice.service.UserService;
import com.example.userservice.vo.RequestUser;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class UserController {
    private Environment env;
    private UserService userService;

    public UserController(Environment env, UserService userService) {
        this.env = env;
        this.userService = userService;
    }

    // User Service가 살아서 돌아가는지 체크하는 기능
    @GetMapping("/health_check")
    public String status() { return "It's Working in User Service"; }

    // welcome message 생성
    @GetMapping("/welcome")
    public String welcome() { return env.getProperty("greeting.message"); }

    // 회원가입 api
    @PostMapping("/users")
    public String createUser(@RequestBody RequestUser user) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        UserDto userDto = mapper.map(user, UserDto.class);
        userService.createUser(userDto);

        // ResponseUser responseUser = mapper.map(userDto, ResponseUser.class);
        return "Create user method is called";
    }
}
