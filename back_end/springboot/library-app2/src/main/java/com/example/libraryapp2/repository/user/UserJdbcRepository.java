package com.example.libraryapp2.repository.user;

import com.example.libraryapp2.dto.user.response.UserResponse;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class UserJdbcRepository {
//    private final JdbcTemplate jdbcTemplate;
//    public UserJdbcRepository(JdbcTemplate jdbcTemplate) {
//        this.jdbcTemplate = jdbcTemplate;
//    }
//
//    public boolean isUserNotExist(JdbcTemplate jdbcTemplate, long id)
//    {
//        String readSql = "SELECT * FROM user id = ?";
//        return jdbcTemplate.query(readSql, (rs, rowNum)-> 0, id).isEmpty();
//    }
//
//    public void updateUserName(JdbcTemplate jdbcTemplate, String name, long id){
//        String sql = "UPDATE user SET name = ? WHERE id = ?";
//        jdbcTemplate.update(sql, name, id);
//    }
//
//    public boolean isUserNotExist(String name){
//        String readSql = "SELECT * FROM user WHERE name = ?";
//        return jdbcTemplate.query(readSql,
//                (rs,rowNum)-> 0, name).isEmpty();
//    }
//
//    public void deleteUser(String name){
//        String sql = "DELETE FROM user WHERE name =?";
//        jdbcTemplate.update(sql, name);
//    }
//
//    public void saveUser(String name, Integer age) {
//        String sql = "INSERT INTO user(name, age) VALUES(?, ?)";
//        jdbcTemplate.update(sql, name, age);
//    }
//
//    public List<UserResponse> getUserResponses() {
//        String sql = "SELECT * FROM user";
//        return jdbcTemplate.query(sql, (rs, rowNum) -> {
//            Long id = rs.getLong("id");
//            String name = rs.getString("name");
//            int age = rs.getInt("age");
//            return new UserResponse(id, name, age);
//        });
//    }
}
