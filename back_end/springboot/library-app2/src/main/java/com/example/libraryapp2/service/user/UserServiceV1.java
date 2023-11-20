package com.example.libraryapp2.service.user;

public class UserServiceV1 {
//    private final UserRepository userRepository;

//    public UserServiceV1(JdbcTemplate jdbcTemplate) {
//        this.userRepository = new UserJdbcRepository(jdbcTemplate);
//    }

//    public UserServiceV1(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    public void updateUser(UserUpdateRequest request) {
//         User user = userRepository.findById(request.getId()).orElseThrow(IllegalArgumentException::new);
//         user.updateName(request.getName());
//         userRepository.save(user);
//    }
//
//    // 유저 저장
//    public void saveUser(UserCreateRequest request) {
//        userRepository.save(new User(request.getId(), request.getName(), request.getAge()));
//    }
//
//
//    // 유저 조회
//    public List<UserResponse> getUsers() {
//        return userRepository.findAll().stream()
//                .map(user -> new UserResponse(user.getId(), user.getName(), user.getAge()))
//                .collect(Collectors.toList());
//    }
}
