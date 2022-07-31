package org.weremkocompany.hydrozagadka.repository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.weremkocompany.hydrozagadka.entity.MeasurementRadiation;

@RepositoryRestResource
public interface MeasurementRadiationRepository extends MeasurementRepository<MeasurementRadiation> {
}