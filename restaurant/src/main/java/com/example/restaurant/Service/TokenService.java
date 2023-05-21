package com.example.restaurant.Service;

import com.example.restaurant.Model.Token;
import com.example.restaurant.Model.Utente;
import com.example.restaurant.Repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Service
public class TokenService {


    @Autowired
    private TokenRepository tokenRepository;

    public Token createToken(Utente utente) {
        var token = new Token(utente);
        tokenRepository.save(token);
        return token;
    }

    public void deleteToken(UUID id){
        Token token =  tokenRepository.findAll().stream().filter(t -> (t.getId().equals(id))).findFirst().get();
        this.tokenRepository.delete(token);
    }

    public Utente getUtenteByToken(UUID id){
        Token token =  tokenRepository.findAll().stream().filter(t -> (t.getId().equals(id))).findFirst().get();
        return token.getUtente();
    }




}
