package com.example.restaurant.Service;

import com.example.restaurant.Repository.MenuElementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.restaurant.Model.MenuElement;

import java.util.List;
import java.util.UUID;

@Service
public class MenuElementService {

    @Autowired
    private MenuElementRepository menuElementRepository;

    public UUID salva(MenuElement menuElement)
    {
        return menuElementRepository.save(menuElement).getId();
    }

    public List<MenuElement> getAllMenuElements()
    {
        return menuElementRepository.findAll();
    }

    public void removeMenuElement(UUID id)
    {
        menuElementRepository.deleteById(id);
    }

    public MenuElement modificaMenuElement(MenuElement menuElement)
    {
        var elementToUpdate = menuElementRepository.findAll().stream().filter(u -> u.equals(menuElement)).findFirst();
        if (elementToUpdate.isPresent()) {
            var elementToEdit = elementToUpdate.get();
            if (menuElement.getNome() != null && !menuElement.getNome().isEmpty()) {
                elementToEdit.setNome(menuElement.getNome());
            }
            if (menuElement.getCategoria() != null) {
                elementToEdit.setCategoria(menuElement.getCategoria());
            }
            if (menuElement.getPrezzo() != 0) {
                elementToEdit.setPrezzo(menuElement.getPrezzo());
            }
            if (menuElement.getDescrizione() != null && !menuElement.getDescrizione().isEmpty()) {
                elementToEdit.setDescrizione(menuElement.getDescrizione());
            }

            return menuElementRepository.save(elementToEdit);
        }
        return null;
    }
}
