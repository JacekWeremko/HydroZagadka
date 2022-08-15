package org.weremkocompany.hydrozagadka;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.weremkocompany.hydrozagadka.entity.Farm;
import org.weremkocompany.hydrozagadka.entity.MeasurementHumidity;
import org.weremkocompany.hydrozagadka.entity.MeasurementPH;
import org.weremkocompany.hydrozagadka.repository.FarmRepository;
import org.weremkocompany.hydrozagadka.repository.MeasurementHumidityRepository;
import org.weremkocompany.hydrozagadka.repository.MeasurementPHRepository;

import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    protected final FarmRepository farmRepository;
    protected final MeasurementHumidityRepository measurementHumidityRepository;
    protected final MeasurementPHRepository measurementPHRepository;

    public DataLoader(FarmRepository farmRepository, MeasurementHumidityRepository measurementHumidityRepository, MeasurementPHRepository measurementPHRepository) {
        this.farmRepository = farmRepository;
        this.measurementHumidityRepository = measurementHumidityRepository;
        this.measurementPHRepository = measurementPHRepository;
    }

    public void run(ApplicationArguments args) {
        Farm sampleFarm = farmRepository.save(new Farm(0L, "sample farm", "jajacek", "TBD"));

        Date baseDate = new Date();
        int delta= 10;
        for (int i=0+delta;i<100+delta; i++) {
            Date sampleDate = new Date(baseDate.getTime() - (1000 * 1000) + (i * 100 * 100));
            Double pointMeasurementHumidity = Math.sin(i) / Math.log(i);
            MeasurementHumidity mh = MeasurementHumidity.builder().farm(sampleFarm).point(pointMeasurementHumidity).date(sampleDate).build();
            measurementHumidityRepository.save(mh);


            Double point = Math.tan(i) / Math.sin(i);
            MeasurementPH mph = MeasurementPH.builder().farm(sampleFarm).point(point).date(sampleDate).build();
            measurementPHRepository.save(mph);
        }
    }
}