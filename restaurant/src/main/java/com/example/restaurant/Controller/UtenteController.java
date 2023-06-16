package com.example.restaurant.Controller;

import com.example.restaurant.Model.Token;
import com.example.restaurant.Model.Utente;
import com.example.restaurant.Service.TokenService;
import com.example.restaurant.Service.UtenteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

import java.util.List;

@RestController

public class UtenteController {

    @Autowired
    private UtenteService utenteService;


    @RequestMapping(value = "/utente", method = RequestMethod.PUT)
    public Utente updateUtente(@RequestBody Utente utente)
    {
        return utenteService.updateUtente(utente);
    }

    @RequestMapping(value = "/utente", method = RequestMethod.DELETE)
    public void deleteUtente(@RequestBody UUID id)
    {
        utenteService.deleteUtente(id);
    }

    @RequestMapping(value = "/utente/{id}", method = RequestMethod.GET)
    public Utente getUtente(@PathVariable UUID id)
    {
        return utenteService.getUtente(id);
    }

    @RequestMapping(value = "/utente/all", method = RequestMethod.GET)
    public List<Utente> getUtenti()
    {
        return utenteService.getUtenti();
    }

    //TODO da modificare
    @RequestMapping(value = "/utentebytoken/{id}", method = RequestMethod.GET)
    public Utente getUtenteByToken(@PathVariable UUID id)
    {
        return null;
        //return tokenService.getUtenteByToken(id);
    }

    //TODO da vedere bene
    @RequestMapping(value = "/logout/{token}", method = RequestMethod.POST)
    public void logout(@PathVariable UUID id)
    {
        utenteService.logout(id);
    }



}
