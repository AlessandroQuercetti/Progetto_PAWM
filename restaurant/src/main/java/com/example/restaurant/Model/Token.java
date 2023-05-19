package com.example.restaurant.Model;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@Document(collection="token")
public class Token {

    @Id
    private UUID id;

    private Utente utente;

    public Token(Utente utente, UUID id)
    {
        this.id=id;
        this.utente=utente;
    }
}
