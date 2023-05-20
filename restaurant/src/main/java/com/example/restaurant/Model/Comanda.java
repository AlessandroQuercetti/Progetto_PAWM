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

    private List<StatoComanda> statoElements;

    private String tipo;

    private List<MenuElement> menuElements;


    public Comanda(String tipo,List<MenuElement> menuElements)
    {
        for(int i=0;i<menuElements.size();i++)
        {
            statoElements.add(StatoComanda.ORDINATO);
        }
        this.id=UUID.randomUUID();
        this.tipo=tipo;
        this.menuElements= menuElements;
    }

}
