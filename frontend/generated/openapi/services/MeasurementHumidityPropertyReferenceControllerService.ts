/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelObject } from '../models/CollectionModelObject';
import type { EntityModelFarm } from '../models/EntityModelFarm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementHumidityPropertyReferenceControllerService {

    /**
     * get-farm-by-measurementhumidity-Id
     * @param id 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static followPropertyReferenceMeasurementhumidityGet1(
id: string,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementHumidities/{id}/farm',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * update-farm-by-measurementhumidity-Id
     * @param id 
     * @param requestBody 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static createPropertyReferenceMeasurementhumidityPut(
id: string,
requestBody: CollectionModelObject,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/measurementHumidities/{id}/farm',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete-farm-by-measurementhumidity-Id
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static deletePropertyReferenceMeasurementhumidityDelete(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementHumidities/{id}/farm',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * patch-farm-by-measurementhumidity-Id
     * @param id 
     * @param requestBody 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static createPropertyReferenceMeasurementhumidityPatch(
id: string,
requestBody: CollectionModelObject,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measurementHumidities/{id}/farm',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get-farm-by-measurementhumidity-Id
     * @param id 
     * @param propertyId 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static followPropertyReferenceMeasurementhumidityGet(
id: string,
propertyId: string,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementHumidities/{id}/farm/{propertyId}',
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
     * delete-farm-by-measurementhumidity-Id
     * @param id 
     * @param propertyId 
     * @returns void 
     * @throws ApiError
     */
    public static deletePropertyReferenceIdMeasurementhumidityDelete(
id: string,
propertyId: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementHumidities/{id}/farm/{propertyId}',
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
