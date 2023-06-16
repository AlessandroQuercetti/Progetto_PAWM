package com.example.restaurant.Model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection= "utente")
public class Utente implements UserDetails {

    @Id
    private UUID id;

    private String nome;

    private String cognome;

    private String email;

    private String password;

    private Ruolo ruolo;

    public Utente(String nome,String cognome, String email,String password, Ruolo ruolo)
    {
        this.id = UUID.randomUUID();
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
