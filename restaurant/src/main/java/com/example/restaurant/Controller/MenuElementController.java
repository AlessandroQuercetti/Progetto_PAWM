package com.example.restaurant.Controller;

import com.example.restaurant.Model.MenuElement;
import com.example.restaurant.Service.MenuElementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/menuElement")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class MenuElementController {

    @Autowired
    private MenuElementService menuElementService;

    @PostMapping("/addMenuElement")
    public UUID addMenuElement(MenuElement menuElement)
    {
        return menuElementService.salva(menuElement);
    }

    @PostMapping("/getAllMenuElement")
    public List<MenuElement> getAllMenuElement()
    {
        return menuElementService.getAllMenuElement();
    }

}
