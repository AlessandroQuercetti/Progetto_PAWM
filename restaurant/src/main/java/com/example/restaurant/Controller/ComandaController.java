package com.example.restaurant.Controller;

import com.example.restaurant.Model.Comanda;
import com.example.restaurant.Service.ComandaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/Comanda")
@CrossOrigin(origins = "*",allowedHeaders = "*")

public class ComandaController {

    @Autowired
    private ComandaService comandaService;

    @PostMapping("/CreaComanda")
    public UUID creaComanda(Comanda comanda)
    {
        return comandaService.salvaComanda(comanda);
    }

    @PostMapping("/modificaComanda")
    public Comanda updateComanda(@RequestBody Comanda comanda)
    {
        return comandaService.updateComanda(comanda);
    }

    @PostMapping("/getComande")
    public List<Comanda> getAllComande()
    {
        return comandaService.getAllComande();
    }

    @PostMapping("/deleteComanda")
    public void deleteComanda(@RequestBody  UUID id)
    {
        comandaService.removeComanda(id);
    }

    @PostMapping("/removeComandeByTavolo")
    public void removeComandeByTavolo(@RequestBody UUID id)
    {
        comandaService.removeComandaByTavolo(id);
    }

    @PostMapping("/getComandeByTavolo")
    public List<Comanda> getComandeByTavolo(@RequestBody UUID id)
    {
        return comandaService.getComandeByTavolo(id);
    }
}
