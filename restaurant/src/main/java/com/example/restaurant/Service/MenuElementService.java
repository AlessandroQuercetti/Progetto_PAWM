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

    public List<MenuElement> getAllMenuElement()
    {
        return menuElementRepository.findAll();
    }

    public void removeMenuElement(MenuElement menuElement)
    {
        menuElementRepository.delete(menuElement);
    }


}
