package org.generation.SpringBootAssessment.Repository.Entity;

import org.generation.SpringBootAssessment.Controller.dto.ItemDTO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//import java.util.Date;
import java.sql.Date;

@Entity
public class Item {

    //Needs to have the same attributes with the table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String title;
    private String description;
    private Date date;


    public Item() {}

    public Item( ItemDTO itemDto )
    {
        this.title = itemDto.getTitle();
        this.description = itemDto.getDescription();
        this.date = (Date) itemDto.getDate();

    }

    public String getTitle()
    {
        return title;
    }
    public void setTitle( String title )
    {
        this.title = title;
    }

    public String getDescription()
    {
        return description;
    }
    public void setDescription( String description )
    {
        this.description = description;
    }

    public Date getDate()
    {
        return date;
    }
    public void setDate( Date date )
    {
        this.date = date;
    }


}

