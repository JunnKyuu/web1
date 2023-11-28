package com.example.caculatorapp.controller.calculator;

import com.example.caculatorapp.dto.caculator.request.CaculatorAddRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CaculatorController {

    @GetMapping("/add")
    public int addTwoNum(CaculatorAddRequest request) {
        return request.getNum1() + request.getNum2();
    }
}
