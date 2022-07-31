package org.weremkocompany.hydrozagadka.controller;

import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.PostMapping;

import javax.transaction.NotSupportedException;


@BasePathAwareController
public class WaterPumpController {

    @PostMapping("/water-pump/use")
    void useWaterPump() throws NotSupportedException {
        throw new NotSupportedException("implement me");
    }

}
