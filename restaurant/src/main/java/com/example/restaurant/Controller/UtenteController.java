package com.example.restaurant.Controller;

import com.example.restaurant.Model.Token;
import com.example.restaurant.Model.Utente;
import com.example.restaurant.Service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController

@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UtenteController {

    @Autowired
    private UtenteService utenteService;

    @RequestMapping(value = "/utente", method = RequestMethod.POST)
    public Utente creaUtente(@RequestBody Utente utente)
    {
        return utenteService.creaUtente(utente);
    }

    @RequestMapping(value = "/utente", method = RequestMethod.PUT)
    public Utente updateUtente(@RequestBody Utente utente)
    {
        return utenteService.updateUtente(utente);
    }

    @RequestMapping(value = "/utente/{id}", method = RequestMethod.DELETE)
    public void deleteUtente(@PathVariable UUID id)
    {
        utenteService.deleteUtente(id);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Token login(@RequestParam String email,@RequestParam String password)
    {
        return utenteService.login(email, password);
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public void logout(@RequestParam Token token)
    {
        utenteService.logout(token);
    }

    @RequestMapping(value = "/utente", method = RequestMethod.GET)
    public List<Utente> getUtenti()
    {
        return utenteService.getUtenti();
    }

    @RequestMapping(value = "/utente/{id}", method = RequestMethod.GET)
    public Utente getUtente(@PathVariable UUID id)
    {
        return utenteService.getUtente(id);
    }

}
