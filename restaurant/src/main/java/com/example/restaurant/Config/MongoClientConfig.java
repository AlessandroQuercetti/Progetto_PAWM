package com.example.restaurant.Config;

import com.mongodb.MongoClientSettings;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Collections;

@Configuration
@EnableMongoRepositories(basePackages = "com.example.restaurant.Repository")
public class MongoClientConfig extends AbstractMongoClientConfiguration {

    @Override
    protected String getDatabaseName(){
        return "Ristorante";
    }

    @Override
    protected void configureClientSettings(MongoClientSettings.Builder builder) {
        builder.credential(MongoCredential.createCredential("enricoprivitera", "Ristorante","RigoQuercio01".toCharArray()))
                .applyToClusterSettings(
                        settings ->
                                settings.hosts(Collections.singletonList(new ServerAddress("localhost", 8080)))
                );
    }
}
