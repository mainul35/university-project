package com.mainul35.authServer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class GeneralViewController {

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("msg", "demo msg")
        return "/index"
    }

    @GetMapping("/header")
    public String navbar(Model model) {
        model.addAttribute("msg", "demo msg")
        return "includes/header :: header"
    }

    @Controller
    @RequestMapping("/auth")
    class AuthController {
        @GetMapping("/login")
        public String login() {
            return "/includes/auth :: login"
        }
    }
}
