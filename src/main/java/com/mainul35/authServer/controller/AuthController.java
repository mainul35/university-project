package com.mainul35.authServer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {

    @GetMapping("/login")
    public String login(Model model) {
        return "/auth/login";
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("msg", "demo msg");
        return "/index";
    }
}
