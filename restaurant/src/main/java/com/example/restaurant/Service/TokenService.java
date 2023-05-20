package com.example.restaurant.Service;

import com.example.restaurant.Model.Token;
import com.example.restaurant.Model.Utente;
import com.example.restaurant.Repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TokenService {


    @Autowired
    private TokenRepository tokenRepository;

    public Token createToken(Utente utente) {
        deleteToken(utente);
        var token = new Token(utente);
        tokenRepository.save(token.getId());
        return token;
    }

    public void removeToken(Token token)
    {
        tokenRepository.delete(token.getId());
    }


    private void deleteToken(Utente utente) {

        tokenRepository.deleteById(utente);
    }

}
