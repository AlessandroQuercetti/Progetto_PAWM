package com.example.restaurant.Controller;

import com.example.restaurant.Model.Tavolo;
import com.example.restaurant.Service.TavoloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/removeAllComande")
    public void removeAllComande(Tavolo tavolo)
    {
        tavoloService.removeAllComande(tavolo);
    }

}
