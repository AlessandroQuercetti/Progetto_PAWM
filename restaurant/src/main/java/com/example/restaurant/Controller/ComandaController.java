package com.example.restaurant.Controller;

import com.example.restaurant.Model.Comanda;
import com.example.restaurant.Service.ComandaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class ComandaController {

    @Autowired
    private ComandaService comandaService;

    @RequestMapping(value="/comanda", method = RequestMethod.POST)
    public UUID creaComanda(Comanda comanda)
    {
        return comandaService.salvaComanda(comanda);
    }

    @RequestMapping(value="/comanda", method = RequestMethod.PUT)
    public Comanda updateComanda(@RequestBody Comanda comanda)
    {
        return comandaService.updateComanda(comanda);
    }

    @RequestMapping(value="/comanda/all", method = RequestMethod.GET)
    public List<Comanda> getAllComande()
    {
        return comandaService.getAllComande();
    }

    @RequestMapping(value="/comanda/{id}", method = RequestMethod.DELETE)
    public void deleteComanda(@PathVariable  UUID id)
    {
        comandaService.removeComanda(id);
    }

    @RequestMapping(value="/comanda/bytavolo/{id}", method = RequestMethod.DELETE)
    public void removeComandeByTavolo(@PathVariable UUID id)
    {
        comandaService.removeComandaByTavolo(id);
    }

    @RequestMapping(value="/comanda/bytavolo/{id}", method = RequestMethod.GET)
    public List<Comanda> getComandeByTavolo(@PathVariable UUID id)
    {
        return comandaService.getComandeByTavolo(id);
    }
}
