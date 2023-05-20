package com.example.restaurant.Service;

import com.example.restaurant.Model.Ruolo;
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

    public String createToken(Utente utente) {
        deleteToken(user);
        var token = new Token(user);
        tokenRepository.save(token);
        return token.getId().toString();
    }

    public void removeToken(Token token)
    {
        tokenRepository.delete(token.getId());
    }
    public Utente getUserFromUUID(String tokenId) {
        if (tokenId == null) return null;
        var token = tokenRepository.findAll().stream().filter(t -> t.getId().equals(UUID.fromString(tokenId))).findFirst();
        return token.map(Token::getUtente).orElse(null);
    }

    public boolean checkToken(String tokenId, Ruolo ruolo) {
        var user = getUserFromUUID(tokenId);
        if (user == null) return false;
        return user.getRuolo().equals(ruolo);
}
