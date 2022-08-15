/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelEntityModelMeasurementRadiation } from '../models/CollectionModelEntityModelMeasurementRadiation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementRadiationSearchControllerService {

    /**
     * @param farmId 
     * @returns CollectionModelEntityModelMeasurementRadiation OK
     * @throws ApiError
     */
    public static executeSearchMeasurementradiationGet(
farmId?: number,
): CancelablePromise<CollectionModelEntityModelMeasurementRadiation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementRadiations/search/findAllByFarmId',
            query: {
                'farmId': farmId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

}
