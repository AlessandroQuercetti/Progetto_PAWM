package com.example.restaurant.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class Tavolo {

    @Id
    private UUID id;

    private int numeroTavolo;

    private int numeroPersone;

    private List<Comanda> comande;

    public Tavolo(UUID id, int numeroTavolo, int numeroPersone)
    {
        this.numeroPersone=numeroPersone;
        this.id=UUID.randomUUID();
        this.numeroTavolo=numeroTavolo;
    }

    public void addComanda(Comanda comanda)
    {
        this.comande.add(comanda);
    }
}
