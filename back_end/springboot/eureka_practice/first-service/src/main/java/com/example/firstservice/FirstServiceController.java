package com.example.firstservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class FirstServiceController {

    @GetMapping("/first-service")
    public String welcome() {
        return("Otter");
    }
}
