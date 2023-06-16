package com.example.restaurant.Service;


import com.example.restaurant.Model.Token;
import com.example.restaurant.Model.Utente;
import com.example.restaurant.Repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UtenteService {

    @Autowired
    private UtenteRepository utenteRepository;

    @Autowired
    private TokenService tokenService;

    public Utente getUtente(UUID id)
    {
        return utenteRepository.findById(id).get();
    }

    public void deleteUtente(UUID id)
    {
        utenteRepository.deleteById(id);
    }

    //TODO non servono i controlli, si fanno nel front
    public Utente updateUtente(Utente utente)
    {
        var utenteToUpdate = utenteRepository.findAll().stream().filter(u -> u.equals(utente)).findFirst();
        if (utenteToUpdate.isPresent()) {
            var userToEdit = utenteToUpdate.get();
            if (utente.getEmail() != null && !utente.getEmail().isEmpty()) {
                userToEdit.setEmail(utente.getEmail());
            }
            if (utente.getPassword() != null && !utente.getPassword().isEmpty()) {
                userToEdit.setPassword(utente.getPassword());
            }
            if (utente.getNome() != null && !utente.getNome().isEmpty()) {
                userToEdit.setNome(utente.getNome());
            }
            if (utente.getCognome() != null && !utente.getCognome().isEmpty()) {
                userToEdit.setCognome(utente.getCognome());
            }
            if (utente.getRuolo()!=null && utente.getRuolo()!=null) {
                userToEdit.setRuolo(utente.getRuolo());
            }
            return utenteRepository.save(userToEdit);
        }
        return null;
    }

    public List<Utente> getUtenti(){
        return utenteRepository.findAll();
    }

    public void logout(UUID id)
    {
        //TODO da vedere se fare in authService
        //tokenService.deleteToken(id);
    }



}
