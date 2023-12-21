package com.example.libraryapp2.service.user;

import com.example.libraryapp2.dto.user.request.UserUpdateRequest;
import com.example.libraryapp2.dto.user.request.userCreateRequest;
import com.example.libraryapp2.dto.user.response.UserResponse;
import com.example.libraryapp2.repository.user.UserRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class UserService {
    private final UserRepository userRepository;
    public UserService(JdbcTemplate jdbcTemplate) {
        this.userRepository = new UserRepository(jdbcTemplate);
    }
    public void updateUser(@RequestBody UserUpdateRequest request){
        boolean isUserNotExist = userRepository.updateUser(request);
        if(isUserNotExist){
            throw new IllegalArgumentException();
        }
        userRepository.realUpdate(request);
    }

    public void saveUser(@RequestBody userCreateRequest request) {
        userRepository.saveUSer(request);
    }

    public List<UserResponse> getUsers(){
        return userRepository.getUsers();
    }

    public void deleteUser(@RequestParam String name){
        userRepository.deleteUser(name);
    }
}