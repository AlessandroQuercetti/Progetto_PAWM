package com.example.restaurant.Repository;

import com.example.restaurant.Model.Tavolo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TavoloRepository extends MongoRepository<Tavolo, UUID> {
}
