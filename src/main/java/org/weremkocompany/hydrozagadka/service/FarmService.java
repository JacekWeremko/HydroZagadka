package org.weremkocompany.hydrozagadka.service;

import org.springframework.stereotype.Service;
import org.weremkocompany.hydrozagadka.entity.Measurement;
import org.weremkocompany.hydrozagadka.repository.*;

import java.util.List;

/**
 * Design choice:
 * - simplicity, let's put everything in a single place, sort out later how many services should be there
 *
 * Considerations:
 * - find all by farm and in date range
 */
@Service
public class FarmService {

    protected final FarmRepository farmRepository;
//    protected final MeasurementPHRepository measurementPHRepository;
//    protected final MeasurementRadiationRepository measurementRadiationRepository;
    protected final MeasurementHumidityRepository measurementHumidityRepository;

    enum MeasurementType {
        PH,
        HUMIDITY,
        RADIATION
    }

    public FarmService(FarmRepository farmRepository, MeasurementHumidityRepository measurementHumidityRepository) {
        this.farmRepository = farmRepository;
//        this.measurementPHRepository = measurementPHRepository;
//        this.measurementRadiationRepository = measurementRadiationRepository;
        this.measurementHumidityRepository = measurementHumidityRepository;
    }
}
