package com.example.restaurant.Controller;

import com.example.restaurant.Model.Comanda;
import com.example.restaurant.Service.ComandaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/Comanda")
@CrossOrigin(origins = "*",allowedHeaders = "*")

public class ComandaController {

    @Autowired
    private ComandaService comandaService;

    @RequestMapping("/CreaComanda")
    public UUID creaComanda(Comanda comanda)
    {
        return comandaService.salvaComanda(comanda);
    }
}
