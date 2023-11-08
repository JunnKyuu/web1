package com.example.libraryapp2.service.user;

import com.example.libraryapp2.domain.user.User;
import com.example.libraryapp2.domain.user.UserRepository;
import com.example.libraryapp2.dto.user.request.UserUpdateRequest;
import com.example.libraryapp2.dto.user.request.UserCreateRequest;
import com.example.libraryapp2.dto.user.response.UserResponse;
import com.example.libraryapp2.repository.user.UserJdbcRepository;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.stream.Collectors;

public class UserService {
    private final UserRepository userRepository;

//    public UserService(JdbcTemplate jdbcTemplate) {
//        this.userRepository = new UserJdbcRepository(jdbcTemplate);
//    }

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void updateUser(UserUpdateRequest request) {
         User user = userRepository.findById(request.getId()).orElseThrow(IllegalArgumentException::new);
         user.updateName(request.getName());
         userRepository.save(user);
    }

    // 유저 저장
    public void saveUser(UserCreateRequest request) {
        userRepository.save(new User(request.getId(), request.getName(), request.getAge()));
    }


    // 유저 조회
    public List<UserResponse> getUsers() {
        return userRepository.findAll().stream()
                .map(user -> new UserResponse(user.getId(), user.getName(), user.getAge()))
                .collect(Collectors.toList());
    }
}
