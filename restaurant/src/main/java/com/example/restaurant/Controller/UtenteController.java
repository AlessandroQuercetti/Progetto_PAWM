package com.example.restaurant.Controller;

import com.example.restaurant.Model.Token;
import com.example.restaurant.Model.Utente;
import com.example.restaurant.Service.UtenteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

import java.util.List;

@RestController
<<<<<<< HEAD
=======
@RequestMapping("/utente")
@CrossOrigin(origins = "*",allowedHeaders = "*")
>>>>>>> 6462cd90caef09f63528fdd86d88569c0df1929d
public class UtenteController {

    @Autowired
    private UtenteService utenteService;

<<<<<<< HEAD
    //sul front end utente.service

    @RequestMapping(value = "/utente", method = RequestMethod.POST)
=======

    @PostMapping("/crea")
>>>>>>> 6462cd90caef09f63528fdd86d88569c0df1929d
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
    public void deleteUtente(@RequestBody java.util.UUID id)
    {
        utenteService.deleteUtente(id);
    }
<<<<<<< HEAD

    @RequestMapping(value = "/utente/{id}", method = RequestMethod.GET)
    public Utente getUtente(@PathVariable UUID id)
=======
    @PostMapping("/login")
    public Token login(@RequestBody String email,String password)
    {
        return utenteService.login(email, password);
    }

    @PostMapping("/logout")
    public void logout(@RequestBody UUID id)
    {
        utenteService.logout(id);
    }

    @PostMapping("/getUtenti")
    public List<Utente> getUtenti()
    {
        return utenteService.getUtenti();
    }

    @PostMapping("/getUtente")
    public Utente getUtente(UUID id)
>>>>>>> 6462cd90caef09f63528fdd86d88569c0df1929d
    {
        return utenteService.getUtente(id);
    }

<<<<<<< HEAD
    @RequestMapping(value = "/utente//all", method = RequestMethod.GET)
    public List<Utente> getUtenti()
    {
        return utenteService.getUtenti();
    }

    @RequestMapping(value = "/utentebytoken/{id}", method = RequestMethod.GET)
    public Utente getUtenteByToken(@PathVariable UUID id)
    {
        return tokenService.getUtenteByToken(id);
    }
=======

>>>>>>> 6462cd90caef09f63528fdd86d88569c0df1929d

    //sul front end auth.service

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestParam String email,@RequestParam String password)
    {
        return utenteService.login(email, password).getId().toString();
    }

    @RequestMapping(value = "/logout/{token}", method = RequestMethod.POST)
    public void logout(@PathVariable UUID id)
    {
        utenteService.logout(id);
    }



}
