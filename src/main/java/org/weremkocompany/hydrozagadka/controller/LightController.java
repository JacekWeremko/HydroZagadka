package org.weremkocompany.hydrozagadka.controller;

import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.NotSupportedException;


@BasePathAwareController
public class LightController {


    @GetMapping("/light")
    Double getLightLevel() throws NotSupportedException {
        throw new NotSupportedException("implement me");
    }

    @PostMapping("/light/level")
    void setLightLevel(@RequestBody Double lightLevel) throws NotSupportedException {
        throw new NotSupportedException("implement me");
    }

    @PostMapping("/light/on")
    void turnLightOn() throws NotSupportedException {
        throw new NotSupportedException("implement me");
    }

    @PostMapping("/light/off")
    void turnLightOff() throws NotSupportedException {
        throw new NotSupportedException("implement me");
    }
}
