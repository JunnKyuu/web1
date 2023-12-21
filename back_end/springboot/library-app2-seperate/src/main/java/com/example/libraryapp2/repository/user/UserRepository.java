package com.example.libraryapp2.repository.user;

import com.example.libraryapp2.dto.user.request.UserUpdateRequest;
import com.example.libraryapp2.dto.user.request.userCreateRequest;
import com.example.libraryapp2.dto.user.response.UserResponse;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class UserRepository {
    private final JdbcTemplate jdbcTemplate;
    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public boolean updateUser(UserUpdateRequest request) {
        String sql = "SELECT * FROM user WHERE id =?";
        boolean isUserNotExist = jdbcTemplate.query(sql, (rs, rowNum)-> 0, request.getId()).isEmpty();
        return isUserNotExist;
    }

    public void realUpdate(UserUpdateRequest request) {
        String updateSql = "UPDATE user SET name = ? WHERE id =?";
        jdbcTemplate.update(updateSql, request.getName(), request.getId());
    }

    public void saveUSer(userCreateRequest request) {
        String sql = "INSERT INTO user(name,age) VALUES(?,?)";
        this.jdbcTemplate.update(sql, request.getName(), request.getAge());
    }

    public List<UserResponse> getUsers(){
        String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, new RowMapper<UserResponse>() {
            @Override
            public UserResponse mapRow(ResultSet rs, int rowNum)throws SQLException {
                long id = rs.getLong("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                return new UserResponse(id, name, age);
            }
        });
    }

    public void deleteUser(@RequestParam String name){
        String sql = "DELETE FROM user WHERE name = ? ";
        jdbcTemplate.update(sql,name);
    }
}
