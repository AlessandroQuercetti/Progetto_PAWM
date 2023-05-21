package com.example.restaurant.Repository;

import com.example.restaurant.Model.Token;
import com.example.restaurant.Model.Utente;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.UUID;


@Repository
public interface TokenRepository extends MongoRepository<Token, UUID> {

}
