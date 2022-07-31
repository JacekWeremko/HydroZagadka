package org.weremkocompany.hydrozagadka.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class MeasurementHIC extends Measurement {

    @Column(updatable = false, nullable = false)
    Double point;
}