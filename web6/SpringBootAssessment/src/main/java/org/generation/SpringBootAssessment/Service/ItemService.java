package org.generation.SpringBootAssessment.Service;

import org.generation.SpringBootAssessment.Repository.Entity.Item;
import java.util.List;

public interface ItemService {

    Item save(Item item);

//    void delete(int itemId);


    List<Item> all();



}
