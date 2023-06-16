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
@Data
public class Comanda {

    @Id
    private UUID id;

    private List<StatoComanda> statoElements;

    private String tipo;

    private List<MenuElement> menuElements;

    private Tavolo tavolo;

    public Comanda(String tipo, Tavolo tavolo, List<MenuElement> menuElements, List<StatoComanda> statoElements)
    {
        this.id=UUID.randomUUID();
        this.tipo=tipo;
        this.tavolo=tavolo;
        this.menuElements= menuElements;
        this.statoElements = statoElements;
    }

}
