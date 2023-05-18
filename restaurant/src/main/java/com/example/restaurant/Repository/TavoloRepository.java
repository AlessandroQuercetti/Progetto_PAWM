package com.example.restaurant.Repository;

import com.example.restaurant.Model.Tavolo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface TavoloRepository extends MongoRepository<Tavolo, UUID> {
}
