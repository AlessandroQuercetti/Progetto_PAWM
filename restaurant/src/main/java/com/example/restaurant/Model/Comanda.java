package com.example.restaurant.Model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.UUID;

@Getter
@Setter

public class Comanda {

    @Id
    private UUID id;

    private StatoComanda statoComanda;

    private String tipo;


    public Comanda(UUID id,StatoComanda statoComanda,String tipo)
    {
        this.id=id;
        this.statoComanda=statoComanda;
        this.tipo=tipo;
    }

}
