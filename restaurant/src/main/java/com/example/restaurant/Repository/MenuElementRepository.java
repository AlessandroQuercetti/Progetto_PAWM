package com.example.restaurant.Repository;

import com.example.restaurant.Model.MenuElement;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MenuElementRepository extends MongoRepository<MenuElement, UUID> {
}
