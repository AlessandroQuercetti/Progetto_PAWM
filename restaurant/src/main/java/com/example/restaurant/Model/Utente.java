package com.example.restaurant.Model;

import org.springframework.data.annotation.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Utente {

    @Id
    private UUID id;

    private String nome;

    private String cognome;

    private String email;

    private String ristorante;

    private String password;

    private Ruolo ruolo;


    public Utente(UUID id,String nome,String cognome, String email,String password,String ristorante,Ruolo ruolo)
    {
        this.id=id;
        this.nome=nome;
        this.cognome=cognome;
        this.email=email;
        this.password=password;
        this.ristorante=ristorante;
        this.ruolo=ruolo;
    }
}
