package com.example.restaurant.Model;

import org.springframework.data.annotation.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@Document(collection="utenti")
public class Utente {

    @Id
    private UUID id;

    private String nome;

    private String cognome;

    private String email;

    private String ristorante;

    private String password;

    private String ruolo;


    public Utente(String nome,String cognome, String email,String password,String ristorante,String ruolo)
    {
        this.id=UUID.randomUUID();
        this.nome=nome;
        this.cognome=cognome;
        this.email=email;
        this.password=password;
        this.ristorante=ristorante;
        this.ruolo=ruolo;
    }
}
