package org.weremkocompany.hydrozagadka.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.NoRepositoryBean;
import org.weremkocompany.hydrozagadka.entity.Measurement;

import java.util.List;

/**
 * Design choice:
 * - common interface for all measurements types
 *
 * Considerations:
 * - find all by farm and in date range
 */
@NoRepositoryBean
public interface MeasurementRepository<T extends Measurement> extends JpaRepository<T, Long>, JpaSpecificationExecutor<T> {

    List<? extends Measurement> findAllByFarmId(Long farmId);

}