package com.example.restaurant.Controller;

import com.example.restaurant.Model.MenuElement;
import com.example.restaurant.Service.MenuElementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class MenuElementController {

    @Autowired
    private MenuElementService menuElementService;

    @RequestMapping(value="/menuElement", method=RequestMethod.POST)
    public UUID addMenuElement(@RequestBody MenuElement menuElement)
    {
        return menuElementService.salva(menuElement);
    }

    @RequestMapping(value="/menuElement/all", method=RequestMethod.GET)
    public List<MenuElement> getAllMenuElements()
    {
        return menuElementService.getAllMenuElements();
    }

    @RequestMapping(value="/menuElement/{id}", method=RequestMethod.DELETE)
    public void removeMenuElement(@PathVariable UUID id)
    {
        menuElementService.removeMenuElement(id);
    }

    @RequestMapping(value="/menuElement", method=RequestMethod.PUT)
    public MenuElement updateMenuElement(@RequestBody MenuElement menuElement)
    {
        return menuElementService.modificaMenuElement(menuElement);
    }

}
