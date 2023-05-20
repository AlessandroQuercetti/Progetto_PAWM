package com.example.restaurant.Controller;

import com.example.restaurant.Model.MenuElement;
import com.example.restaurant.Service.MenuElementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/menuElement")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class MenuElementController {

    @Autowired
    private MenuElementService menuElementService;

    @PostMapping("/addMenuElement")
    public UUID addMenuElement(@RequestBody MenuElement menuElement)
    {
        return menuElementService.salva(menuElement);
    }

    @PostMapping("/getAllMenuElement")
    public List<MenuElement> getAllMenuElements()
    {
        return menuElementService.getAllMenuElements();
    }

    @PostMapping("/removeMenuElement")
    public void removeMenuElement(@RequestBody UUID id)
    {
        menuElementService.removeMenuElement(id);
    }

    @PostMapping("/updateMenuElement")

    public MenuElement updateMenuElement(@RequestBody MenuElement menuElement)
    {
        return menuElementService.modificaMenuElement(menuElement);
    }

}
