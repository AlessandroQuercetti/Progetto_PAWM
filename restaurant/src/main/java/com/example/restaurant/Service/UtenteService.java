package com.example.restaurant.Service;


import com.example.restaurant.Config.PasswordEncoderConfig;
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
    private PasswordEncoderConfig passwordEncoder;

    @Autowired
    private TokenService tokenService;

    public Utente creaUtente(Utente utente)
    {
        if (utenteRepository.findAll().stream().anyMatch(u ->
                utente.getEmail().equals(u.getEmail()) ||
                        utente.getEmail().equals(u.getEmail()))) {
            return null;
        }
        utente.setPassword(passwordEncoder.passwordEncoder().encode(utente.getPassword()));
        return utenteRepository.save(utente);
    }

    public void deleteUtente(Utente utente)
    {
        utenteRepository.delete(utente);
    }

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
            if (utente.getRistorante() != null && !utente.getRistorante().isEmpty()) {
                userToEdit.setRistorante(utente.getRistorante());
            }
            if (utente.getRuolo()!=null && utente.getRuolo()!=null) {
                userToEdit.setRuolo(utente.getRuolo());
            }
            return utenteRepository.save(userToEdit);
        }
        return null;
    }

    public Token login(String email, String password)
    {
        var utente =utenteRepository.findAll().stream()
                .filter(u ->
                        ( email.equals(u.getEmail()) && (passwordEncoder.passwordEncoder().matches(password,u.getPassword()))

                        )).findFirst();

        if(!utente.isEmpty()){
            return tokenService.createToken(utente.get());
        }
        return null;

    }
    public List<Utente> getUtenti(){
        return utenteRepository.findAll();
    }

    public void logout(Token token)
    {
        tokenService.removeToken(token);
    }



}
