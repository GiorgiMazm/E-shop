package com.example.service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class HomeController {
    @GetMapping(path = "/")
    public String home() {
        return "Welcome to E-shop Backend!";
    }
}
