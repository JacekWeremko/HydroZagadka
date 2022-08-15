/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelObject } from '../models/CollectionModelObject';
import type { EntityModelFarm } from '../models/EntityModelFarm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementPhPropertyReferenceControllerService {

    /**
     * get-farm-by-measurementph-Id
     * @param id 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static followPropertyReferenceMeasurementphGet1(
id: string,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementPHs/{id}/farm',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * update-farm-by-measurementph-Id
     * @param id 
     * @param requestBody 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static createPropertyReferenceMeasurementphPut(
id: string,
requestBody: CollectionModelObject,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/measurementPHs/{id}/farm',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete-farm-by-measurementph-Id
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static deletePropertyReferenceMeasurementphDelete(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementPHs/{id}/farm',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * patch-farm-by-measurementph-Id
     * @param id 
     * @param requestBody 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static createPropertyReferenceMeasurementphPatch(
id: string,
requestBody: CollectionModelObject,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measurementPHs/{id}/farm',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get-farm-by-measurementph-Id
     * @param id 
     * @param propertyId 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static followPropertyReferenceMeasurementphGet(
id: string,
propertyId: string,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementPHs/{id}/farm/{propertyId}',
            path: {
                'id': id,
                'propertyId': propertyId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * delete-farm-by-measurementph-Id
     * @param id 
     * @param propertyId 
     * @returns void 
     * @throws ApiError
     */
    public static deletePropertyReferenceIdMeasurementphDelete(
id: string,
propertyId: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementPHs/{id}/farm/{propertyId}',
            path: {
                'id': id,
                'propertyId': propertyId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

}
