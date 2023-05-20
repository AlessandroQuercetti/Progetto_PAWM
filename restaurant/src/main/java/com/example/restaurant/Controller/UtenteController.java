package com.example.restaurant.Controller;

import com.example.restaurant.Model.Token;
import com.example.restaurant.Model.Utente;
import com.example.restaurant.Service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/utente")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UtenteController {

    @Autowired
    private UtenteService utenteService;
    @PostMapping("/crea")
    public Utente creaUtente(@RequestBody Utente utente)
    {
        return utenteService.creaUtente(utente);
    }

    @PostMapping("/update")
    public Utente updateUtente(@RequestBody Utente utente)
    {
        return utenteService.updateUtente(utente);
    }

    @PostMapping("/delete")
    public void deleteUtente(@RequestBody Utente utente)
    {
        utenteService.deleteUtente(utente);
    }
    @PostMapping("/login")
    public Token login(@RequestBody String email,String password)
    {
        return utenteService.login(email, password);
    }

    @PostMapping("/logout")
    public void logout(@RequestBody Token token)
    {
        utenteService.logout(token);
    }

    @PostMapping("getUtenti")
    public List<Utente> getUtenti()
    {
        return utenteService.getUtenti();
    }



}
