package com.example.restaurant.Service;

import com.example.restaurant.Repository.MenuElementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.UUID;

@Service
public class menuElementService {

    @Autowired
    private MenuElementRepository menuElementRepository;


   /* public UUID save(MenuElement menuElement)
    {
        return menuElementRepository.save(menuElement).getId();
    }*/
}
