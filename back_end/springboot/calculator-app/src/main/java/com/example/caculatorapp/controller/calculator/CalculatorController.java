package com.example.caculatorapp.controller.calculator;

import com.example.caculatorapp.dto.calculator.request.CalculatorAddRequest;
import com.example.caculatorapp.dto.calculator.request.CalculatorMultiplyRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

    @GetMapping("/add")
    public int addTwoNum(CalculatorAddRequest request) {
        return request.getNum1() + request.getNum2();
    }

    @PostMapping("/multiply")
    public int multiplyTwoNum(@RequestBody CalculatorMultiplyRequest request) {
        return request.getNum1() * request.getNum2();
    }
}
