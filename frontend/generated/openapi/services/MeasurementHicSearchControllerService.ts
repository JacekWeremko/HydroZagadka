/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelEntityModelMeasurementHIC } from '../models/CollectionModelEntityModelMeasurementHIC';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementHicSearchControllerService {

    /**
     * @param farmId 
     * @returns CollectionModelEntityModelMeasurementHIC OK
     * @throws ApiError
     */
    public static executeSearchMeasurementhicGet(
farmId?: number,
): CancelablePromise<CollectionModelEntityModelMeasurementHIC> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementHICs/search/findAllByFarmId',
            query: {
                'farmId': farmId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

}
