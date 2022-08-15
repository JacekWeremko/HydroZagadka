/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelEntityModelMeasurementPH } from '../models/CollectionModelEntityModelMeasurementPH';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementPhSearchControllerService {

    /**
     * @param farmId 
     * @returns CollectionModelEntityModelMeasurementPH OK
     * @throws ApiError
     */
    public static executeSearchMeasurementphGet(
farmId?: number,
): CancelablePromise<CollectionModelEntityModelMeasurementPH> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementPHs/search/findAllByFarmId',
            query: {
                'farmId': farmId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

}
