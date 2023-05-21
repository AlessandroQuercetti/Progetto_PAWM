package com.example.restaurant.Model;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@Document(collection="token")
@Data
public class Token {

    @Id
    private UUID id;

    private Utente utente;

    protected Token() {
        id = UUID.randomUUID();
    }

    public Token(Utente utente) {
        this();
        this.utente=utente;
    }
}
