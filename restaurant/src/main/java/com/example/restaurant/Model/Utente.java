package com.example.restaurant.Model;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.annotation.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.security.SecureRandom;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@Setter
@Document(collection="utenti")
@Data
public class Utente implements UserDetails {

    @Id
    private UUID id;

    private String nome;

    private String cognome;

    private String email;


    private String password;

<<<<<<< HEAD
    @Enumerated(EnumType.STRING)
    private Ruolo ruolo;


    public Utente(String nome, String cognome, String email,String password, Ruolo ruolo)
=======
    private String ruolo;


    public Utente(String nome,String cognome, String email,String password,String ristorante,String ruolo)
>>>>>>> 6462cd90caef09f63528fdd86d88569c0df1929d
    {
        this.id=UUID.randomUUID();
        this.nome=nome;
        this.cognome=cognome;
        this.email=email;
        this.password=password;
        this.ruolo=ruolo;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(ruolo.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
