package com.example.restaurant.Controller;

import com.example.restaurant.Model.AuthenticationRequest;
import com.example.restaurant.Model.AuthenticationResponse;
import com.example.restaurant.Model.RegisterRequest;
import com.example.restaurant.Service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping("/registra")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request ){
        return  ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request ){
        return  ResponseEntity.ok(authService.authenticate(request));
    }
}
