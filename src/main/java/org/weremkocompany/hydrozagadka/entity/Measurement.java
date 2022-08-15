package org.weremkocompany.hydrozagadka.entity;


import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.util.Date;


/**
 * Design choice:
 * - simplicity
 * - ease of extension particular types of measurements
 * - ease of migration to more efficient db or model
 *
 * Considerations:
 * - time series efficient database model
 * - how users will use data in common cases
 * - what interfaces should be provided for offline dat analysis
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@MappedSuperclass
public class Measurement {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(updatable = false, nullable = false)
    Long id;

    @Column(updatable = false, nullable = false)
    Date date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "farmId", referencedColumnName = "id")
    Farm farm;
}
