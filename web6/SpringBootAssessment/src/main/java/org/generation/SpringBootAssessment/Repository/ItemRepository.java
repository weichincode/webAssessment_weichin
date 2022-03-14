package org.generation.SpringBootAssessment.Repository;

import org.springframework.data.repository.CrudRepository;

import java.sql.Date;

import org.generation.SpringBootAssessment.Repository.Entity.Item;


public interface ItemRepository extends CrudRepository<Item, Date>
{
}
