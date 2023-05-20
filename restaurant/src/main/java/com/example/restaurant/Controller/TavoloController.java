package com.example.restaurant.Controller;

import com.example.restaurant.Model.Tavolo;
import com.example.restaurant.Service.TavoloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/tavolo")
@CrossOrigin(origins = "*",allowedHeaders = "*")

public class TavoloController {

    @Autowired
    private TavoloService tavoloService;

    @PostMapping("/aggiungiTavolo")
    public UUID aggiungiTavolo(@RequestBody Tavolo tavolo)
    {
        return tavoloService.AggiungiTavolo(tavolo);
    }

    @PostMapping("/getTavoli")
    public List<Tavolo> getTavoli()
    {
        return tavoloService.getTavoli();
    }

    @PostMapping("/getTavolo")
    public Tavolo getTavolo(@RequestBody UUID id)
    {
        return tavoloService.getTavolo(id);
    }

    @PostMapping("/updateTavolo")
    public Tavolo updateTavolo(@RequestBody Tavolo tavolo)
    {
        return tavoloService.updateTavolo(tavolo);
    }

    @PostMapping("/deleteTavolo")
    public void deleteTavolo(@RequestBody UUID id)
    {
        tavoloService.removeTavolo(id);
    }



}
