package org.weremkocompany.hydrozagadka.repository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.weremkocompany.hydrozagadka.entity.MeasurementHIC;

@RepositoryRestResource
public interface MeasurementHICRepository extends MeasurementRepository<MeasurementHIC> {
}