package com.example.restaurant.Service;


import com.example.restaurant.Model.Utente;
import com.example.restaurant.Repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UtenteService {

    @Autowired
    private UtenteRepository utenteRepository;

    public UUID creaUtente(Utente utente)
    {
        return utenteRepository.save(utente).getId();
    }

    public Optional<Utente> login(UUID id,String password)
    {
        if(utenteRepository.findById(id).get().getPassword().equals(password))
        {
            return utenteRepository.findById(id);
        }
        return null;
    }
}
