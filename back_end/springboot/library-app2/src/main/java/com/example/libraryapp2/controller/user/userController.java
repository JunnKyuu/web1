package com.example.libraryapp2.controller.user;

import com.example.libraryapp2.domain.user.Fruit;
import com.example.libraryapp2.dto.user.request.UserUpdateRequest;
import com.example.libraryapp2.dto.user.request.UserCreateRequest;
import com.example.libraryapp2.dto.user.response.UserResponse;
import com.example.libraryapp2.service.user.UserService;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class userController {

    private final UserService userService;
    private final JdbcTemplate jdbcTemplate;
    public userController(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate=jdbcTemplate;
        this.userService= new UserService(jdbcTemplate);
    }

    @PostMapping("/user")
    public void saveUser(@RequestBody UserCreateRequest request){

        /*
        String sql = "INSERT INTO user(name,age) VALUES(?,?)";
        jdbcTemplate.update(sql, request.getName(), request.getAge());

        */
        userService.saveUser(request);
    }
    @GetMapping("/user")
    //이 메서드는 HTTP GET 요청을 처리하고, List<UserResponse> 형식의 데이터를 반환합
    public List<UserResponse> getUsers(){
       /* String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, new RowMapper<UserResponse>() {
            @Override
            public UserResponse mapRow(ResultSet rs, int rowNum)throws SQLException{
                long id = rs.getLong("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                return new UserResponse(id, name, age);
            }
        }); */

        return userService.getUsers();
    }

    @PutMapping("/user")
    public void updateUser(@RequestBody UserUpdateRequest request){
    userService.updateUser(jdbcTemplate, request);
    }

    @DeleteMapping("/user")
    public void deleteUser(@RequestParam String name){
        userService.deleteUser(name);
    }

    @GetMapping("/user/error-test")
    public void errorTest(){
        throw new IllegalArgumentException();
    }

    @GetMapping("/fruit")
    public Fruit fruit(){
        return new Fruit("바나나", 2000);
    }


}
