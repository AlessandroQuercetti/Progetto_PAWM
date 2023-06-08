package com.example.restaurant.Service;

import com.example.restaurant.Model.Tavolo;
import com.example.restaurant.Repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TavoloService {

    @Autowired
    private TavoloRepository tavoloRepository;


    public UUID AggiungiTavolo(Tavolo tavolo)
    {
        return tavoloRepository.save(tavolo).getId();
    }

    public List<Tavolo> getTavoli()
    {
        return tavoloRepository.findAll();
    }

    public void removeTavolo(UUID id)
    {
        tavoloRepository.deleteById(id);
    }

    public Tavolo getTavolo(UUID id)
    {
        return tavoloRepository.findById(id).get();
    }

    public Tavolo updateTavolo(Tavolo tavolo)
    {
        var tavoloToUpdate = tavoloRepository.findAll().stream().filter(u -> u.equals(tavolo)).findFirst();
        if (tavoloToUpdate.isPresent()) {
            var tavoloToEdit = tavoloToUpdate.get();
            if (tavolo.getNumeroPersone() > 0 ) {
                tavoloToEdit.setNumeroPersone(tavolo.getNumeroPersone());
            }
            if (tavolo.getNumeroTavolo() > 0 ) {
                tavoloToEdit.setNumeroTavolo(tavolo.getNumeroTavolo());
            }


            return tavoloRepository.save(tavoloToEdit);
        }
        return null;
    }

}
