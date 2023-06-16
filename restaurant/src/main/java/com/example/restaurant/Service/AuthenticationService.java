package com.example.restaurant.Service;

import com.example.restaurant.Model.*;
import com.example.restaurant.Repository.UtenteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UtenteRepository utenteRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request){
        /*var utente = Utente.builder()
                .nome(request.getNome())
                .cognome(request.getCognome())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .ruolo(request.getRuolo())
                .build();*/

        var utente1 = new Utente(
                request.getNome(),
                request.getCognome(),
                request.getEmail(),
                request.getPassword(),
                request.getRuolo()
        );
        utenteRepository.save(utente1);
        var jwtToken = tokenService.generateToken(utente1);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var utente = utenteRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = tokenService.generateToken(utente);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
}
