package org.generation.SpringBootAssessment.Controller;

import org.generation.SpringBootAssessment.Component.FileUploadUtil;
import org.generation.SpringBootAssessment.Repository.Entity.Item;
import org.generation.SpringBootAssessment.Controller.dto.ItemDTO;

import org.generation.SpringBootAssessment.Service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.util.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.*;

import java.io.*;

@RestController
@RequestMapping("/item")
public class ItemController {

    final ItemService itemService;

    public ItemController( @Autowired ItemService itemService )
    {
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping( "/all" )
    public Iterable<Item> getItems()
    {
        return itemService.all();
    }

}


