package com.example.restaurant.Model;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.UUID;

@Getter
@Setter
public class MenuElement {

    @Id
    private UUID id;

    private String nome;

    private Categoria categoria;

    private String descrizione;

    private float prezzo;


    public MenuElement(UUID id, String nome, Categoria categoria, String descrizione, float prezzo)
    {
        this.id=id;
        this.nome=nome;
        this.categoria=categoria;
        this.descrizione=descrizione;
        this.prezzo=prezzo;
    }
}
