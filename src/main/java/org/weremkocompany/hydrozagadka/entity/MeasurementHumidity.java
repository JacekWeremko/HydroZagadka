package org.weremkocompany.hydrozagadka.entity;


import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.core.config.Projection;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;
import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper=true)
@Entity
public class MeasurementHumidity extends Measurement {

    @Column(updatable = false, nullable = false)
    Double point;
}