package org.weremkocompany.hydrozagadka.entity;


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
@MappedSuperclass
public abstract class Measurement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    protected Long id;

    @Column(updatable = false, nullable = false)
    protected Date date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "farmId", referencedColumnName = "id")
    protected Farm farm;
}
