package com.example.restaurant.Service;

import com.example.restaurant.Model.Comanda;
import com.example.restaurant.Model.Tavolo;
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

    public UUID salvaComanda(Comanda comanda) { return comandaRepository.save(comanda).getId(); }

    public List<Comanda> getAllComande()
    {
        return comandaRepository.findAll();
    }

    public Comanda updateComanda(Comanda comanda)
    {
        var comandaToUpdate = comandaRepository.findAll().stream().filter(u -> u.equals(comanda)).findFirst();
        if (comandaToUpdate.isPresent()) {
            var comandaToEdit = comandaToUpdate.get();
            if (comanda.getTipo() != null && !comanda.getTipo().isEmpty()) {
                comandaToEdit.setTipo(comanda.getTipo());
            }
            if (comanda.getStatoElements() != null && !comanda.getStatoElements().isEmpty()) {
                comandaToEdit.setStatoElements(comanda.getStatoElements());
            }
            if (comanda.getTavolo() != null) {
                comandaToEdit.setTavolo(comanda.getTavolo());
            }
            if (comanda.getMenuElements() != null && !comanda.getMenuElements().isEmpty()) {
                comandaToEdit.setMenuElements(comanda.getMenuElements());
            }


            return comandaRepository.save(comandaToEdit);
        }
        return null;
    }
    public void removeComanda(UUID id)
    {
        comandaRepository.deleteById(id);
    }


    public void removeComandaByTavolo(UUID idTavolo)
    {
        List<Comanda> listaComande = comandaRepository.findAll().stream().filter(comanda -> comanda.getTavolo().getId().equals(idTavolo)).toList();
        for(int i=0;i<listaComande.size();i++)
        {
            comandaRepository.deleteById(listaComande.get(i).getId());
        }
    }

    public List<Comanda> getComandeByTavolo(UUID idTavolo)
    {
        return comandaRepository.findAll().stream().filter(comanda -> comanda.getTavolo().getId().equals(idTavolo)).toList();
    }



}
