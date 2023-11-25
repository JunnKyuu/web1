package com.example.calculatorapp.controller.calculator;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

    @GetMapping("/add")
    public int addNum(@RequestParam int num1,  @RequestParam int num2) {
        return num1 + num2;
    }
}
