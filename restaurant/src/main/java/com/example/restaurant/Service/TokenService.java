package com.example.restaurant.Service;

import com.example.restaurant.Model.Token;
import com.example.restaurant.Repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TokenService {


    @Autowired
    private TokenRepository tokenRepository;

    public void removeToken(Token token)
    {
        tokenRepository.delete(token.getId());
    }
}
