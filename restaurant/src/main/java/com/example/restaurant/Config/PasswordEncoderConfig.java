package com.example.restaurant.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.security.SecureRandom;

@Configuration
public class PasswordEncoderConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        //10 is the default strength value for the BCryptPasswordEncoder
        return new BCryptPasswordEncoder(10, new SecureRandom());
    }
}
