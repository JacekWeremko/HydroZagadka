package org.weremkocompany.hydrozagadka.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.weremkocompany.hydrozagadka.entity.MeasurementHumidity;

@RepositoryRestResource
public interface MeasurementHumidityRepository extends MeasurementRepository<MeasurementHumidity> {
}