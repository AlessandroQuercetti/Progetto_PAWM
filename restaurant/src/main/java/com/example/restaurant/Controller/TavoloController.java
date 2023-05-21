package com.example.restaurant.Controller;

import com.example.restaurant.Model.Tavolo;
import com.example.restaurant.Service.TavoloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController

@CrossOrigin(origins = "*",allowedHeaders = "*")

public class TavoloController {

    @Autowired
    private TavoloService tavoloService;

    @RequestMapping(value="/tavolo", method = RequestMethod.POST)
    public UUID aggiungiTavolo(@RequestBody Tavolo tavolo)
    {
        return tavoloService.AggiungiTavolo(tavolo);
    }

    @RequestMapping(value = "/tavolo/all", method = RequestMethod.GET)
    public List<Tavolo> getTavoli()
    {
        return tavoloService.getTavoli();
    }

    @RequestMapping(value = "/tavolo/{id}", method = RequestMethod.GET)
    public Tavolo getTavolo(@PathVariable UUID id)
    {
        return tavoloService.getTavolo(id);
    }

    @RequestMapping(value = "/tavolo", method = RequestMethod.PUT)
    public Tavolo updateTavolo(@RequestBody Tavolo tavolo)
    {
        return tavoloService.updateTavolo(tavolo);
    }

    @RequestMapping(value = "/tavolo/{id}", method = RequestMethod.DELETE)
    public void deleteTavolo(@PathVariable UUID id)
    {
        tavoloService.removeTavolo(id);
    }



}
