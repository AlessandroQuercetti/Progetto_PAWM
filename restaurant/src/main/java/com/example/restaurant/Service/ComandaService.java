package com.example.restaurant.Service;

import com.example.restaurant.Model.Comanda;
import com.example.restaurant.Repository.ComandaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ComandaService {

    @Autowired
    private ComandaRepository comandaRepository;

    public UUID salvaComanda(Comanda comanda)
    {
        return comandaRepository.save(comanda).getId();
    }

    public List<Comanda> getAllComande()
    {
        return comandaRepository.findAll();
    }

    public Optional<Comanda> getComandaById(UUID id)
    {
        return comandaRepository.findById(id);
    }

    public int getNumComande()
    {
        return comandaRepository.findAll().size();
    }




}
