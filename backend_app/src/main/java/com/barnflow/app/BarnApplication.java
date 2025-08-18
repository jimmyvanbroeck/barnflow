package com.barnflow.app;

import com.barnflow.app.controller.BarnController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BarnApplication {

	public static void main(String[] args) {

        SpringApplication.run(BarnApplication.class, args);

	}

    @Bean
    public BarnController barnController() {
        return new BarnController();
    }

    @Bean
    public SecurityConfig config() {
        return new SecurityConfig();
    }


}
