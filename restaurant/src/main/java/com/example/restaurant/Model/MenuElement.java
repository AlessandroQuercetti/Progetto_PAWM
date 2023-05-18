package com.example.restaurant.Model;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@Document(collection = "menuElement")
public class MenuElement {

    @Id
    private UUID id;

    private String nome;

    private Categoria categoria;

    private String descrizione;

    private float prezzo;


    public MenuElement(UUID id, String nome, Categoria categoria, String descrizione, float prezzo)
    {
        this.id=UUID.randomUUID();
        this.nome=nome;
        this.categoria=categoria;
        this.descrizione=descrizione;
        this.prezzo=prezzo;
    }
}
