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

    /*public Optional<Utente> login(UUID id,String password)
    {
        if(utenteRepository.findById(id).get().getPassword().equals(password))
        {
            return utenteRepository.findById(id);
        }
        return null;
    }
*/

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
    public List<Utente> getUtente(){
        return utenteRepository.findAll();
    }


}
