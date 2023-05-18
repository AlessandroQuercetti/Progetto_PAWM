package com.example.restaurant.Controller;

import com.example.restaurant.Model.Utente;
import com.example.restaurant.Service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/utente")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UtenteController {

    @Autowired
    private UtenteService utenteService;
    @PostMapping("/crea")
    public UUID creaUtente(@RequestBody Utente utente)
    {
        return utenteService.creaUtente(utente);
    }

}
