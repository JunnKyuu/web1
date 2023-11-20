package com.example.libraryapp2.service.user;

import com.example.libraryapp2.domain.user.User;
import com.example.libraryapp2.domain.user.UserRepository;
import com.example.libraryapp2.dto.user.request.UserCreateRequest;
import com.example.libraryapp2.dto.user.request.UserUpdateRequest;
import com.example.libraryapp2.dto.user.response.UserResponse;

import java.util.List;
import java.util.stream.Collectors;

public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(UserCreateRequest request) {
        userRepository.save(new User(request.getName(), request.getAge()));
    }

    public List<UserResponse> getUsers() {
        return userRepository.findAll().stream()
                .map(UserResponse::new)
                .collect(Collectors.toList());
    }


    public void updateUser(UserUpdateRequest request) {
        User user = userRepository.findById(request.getId())
                .orElseThrow(IllegalArgumentException::new);

        user.updateName(request.getName());
    }


    public void deleteUser(String name) {
        User user = userRepository.findByName(name)
                .orElseThrow(IllegalArgumentException::new);

        userRepository.delete(user);
    }
}
