package com.example.libraryapp2.controller.user;

import com.example.libraryapp2.domain.user.Fruit;
import com.example.libraryapp2.domain.user.User;
import com.example.libraryapp2.dto.user.request.UserUpdateRequest;
import com.example.libraryapp2.dto.user.request.userCreateRequest;
import com.example.libraryapp2.dto.user.response.UserResponse;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class userController {

    private final JdbcTemplate jdbcTemplate;
    public userController(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate=jdbcTemplate;
    }

    @PostMapping("/user")
    public void saveUser(@RequestBody userCreateRequest request){
        String sql = "INSERT INTO user(name,age) VALUES(?,?)";
        jdbcTemplate.update(sql, request.getName(), request.getAge());
    }
    @GetMapping("/user")
    public List<UserResponse> getUsers(){
        String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, new RowMapper<UserResponse>() {
            @Override
            public UserResponse mapRow(ResultSet rs, int rowNum)throws SQLException{
                long id = rs.getLong("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                return new UserResponse(id, name, age);
            }
        });
    }

    @PutMapping("/user")
    public void updateUser(@RequestBody UserUpdateRequest request){
        String readSql = "UPDATE user SET name = ? WHERE id = ?";

        /*
       String sql = "SELECT * FROM user WHERE id =?";
       boolean isUserNotExist = jdbcTemplate.query(sql, (rs, rowNum)-> 0, request.getId()).isEmpty();
        if(isUserNotExist){
            throw new IllegalArgumentException();
        }

        String updateSql = "UPDATE user SET name = ? WHERE id =?";

        jdbcTemplate.update(updateSql, request.getName(), request.getId()); */

        jdbcTemplate.update(readSql, request.getName(), request.getId());
    }

    @DeleteMapping("/user")
    public void deleteUser(@RequestParam String name){
        String select = "SELECT * FROM user WHERE name = ?";
        boolean isUser = jdbcTemplate.query(select, (resultSet, index)-> 0,name).isEmpty();
        if(isUser) throw new IllegalArgumentException();
        String delete = "DELETE FROM user WHERE name = ?";
        jdbcTemplate.update(delete, name);
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
