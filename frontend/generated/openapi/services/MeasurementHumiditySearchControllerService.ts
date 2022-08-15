/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelEntityModelMeasurementHumidity } from '../models/CollectionModelEntityModelMeasurementHumidity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementHumiditySearchControllerService {

    /**
     * @param farmId 
     * @returns CollectionModelEntityModelMeasurementHumidity OK
     * @throws ApiError
     */
    public static executeSearchMeasurementhumidityGet(
farmId?: number,
): CancelablePromise<CollectionModelEntityModelMeasurementHumidity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementHumidities/search/findAllByFarmId',
            query: {
                'farmId': farmId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

}
