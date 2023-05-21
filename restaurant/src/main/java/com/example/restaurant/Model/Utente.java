package com.example.restaurant.Model;

import lombok.Data;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.annotation.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.security.SecureRandom;
import java.util.UUID;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@Setter
@Document(collection="utenti")
@Data
public class Utente {

    @Id
    private UUID id;

    private String nome;

    private String cognome;

    private String email;

    private String ristorante;

    private String password;

    private Ruolo ruolo;


    public Utente(String nome,String cognome, String email,String password,String ristorante,Ruolo ruolo)
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
