package com.example.restaurant.Model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Document(collection="comande")
public class Comanda {

    @Id
    private UUID id;

    private StatoComanda statoComanda;

    private Categoria tipo;

    private List<MenuElement> menuElements;


    public Comanda(UUID id,StatoComanda statoComanda,Categoria tipo,List<MenuElement> menuElements)
    {
        this.id=id;
        this.statoComanda=statoComanda;
        this.tipo=tipo;
        this.menuElements= menuElements;
    }

}
