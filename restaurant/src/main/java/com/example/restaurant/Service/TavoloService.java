package com.example.restaurant.Service;

import com.example.restaurant.Model.Tavolo;
import com.example.restaurant.Repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class TavoloService {

    @Autowired
    private TavoloRepository tavoloRepository;


    public UUID AggiungiTavolo(Tavolo tavolo)
    {
        return tavoloRepository.save(tavolo).getId();
    }

    public void removeComandeByTavolo(Tavolo tavolo)
    {
        tavoloRepository.findAll().remove(tavolo.getComande());
    }
}
