package org.weremkocompany.hydrozagadka.repository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.weremkocompany.hydrozagadka.entity.MeasurementPH;

@RepositoryRestResource
public interface MeasurementPHRepository extends MeasurementRepository<MeasurementPH> {
}