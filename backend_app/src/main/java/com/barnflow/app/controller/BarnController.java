package com.barnflow.app.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BarnController {

    private static Logger LOGGER = LoggerFactory.getLogger(BarnController.class);

    @GetMapping("/barns")
    public List<String> listBarns() {
        LOGGER.warn("Inside listbarns");
        List<String> barns = new ArrayList<>();
        barns.add("MyBarn");
        barns.add("YourBarn");
        return barns;
    }
}
