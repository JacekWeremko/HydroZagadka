package org.weremkocompany.hydrozagadka.config;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.weremkocompany.hydrozagadka.entity.Measurement;
import org.weremkocompany.hydrozagadka.entity.MeasurementHumidity;
//import org.weremkocompany.hydrozagadka.entity.MeasurementPH;

@Component
public class SpringRestConfiguration implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.setDefaultMediaType(MediaType.APPLICATION_JSON);
        config.useHalAsDefaultJsonMediaType(true);
    }
}