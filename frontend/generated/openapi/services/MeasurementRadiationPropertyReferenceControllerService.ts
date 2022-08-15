/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelObject } from '../models/CollectionModelObject';
import type { EntityModelFarm } from '../models/EntityModelFarm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementRadiationPropertyReferenceControllerService {

    /**
     * get-farm-by-measurementradiation-Id
     * @param id 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static followPropertyReferenceMeasurementradiationGet1(
id: string,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementRadiations/{id}/farm',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * update-farm-by-measurementradiation-Id
     * @param id 
     * @param requestBody 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static createPropertyReferenceMeasurementradiationPut(
id: string,
requestBody: CollectionModelObject,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/measurementRadiations/{id}/farm',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete-farm-by-measurementradiation-Id
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static deletePropertyReferenceMeasurementradiationDelete(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementRadiations/{id}/farm',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * patch-farm-by-measurementradiation-Id
     * @param id 
     * @param requestBody 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static createPropertyReferenceMeasurementradiationPatch(
id: string,
requestBody: CollectionModelObject,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measurementRadiations/{id}/farm',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get-farm-by-measurementradiation-Id
     * @param id 
     * @param propertyId 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static followPropertyReferenceMeasurementradiationGet(
id: string,
propertyId: string,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementRadiations/{id}/farm/{propertyId}',
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
     * delete-farm-by-measurementradiation-Id
     * @param id 
     * @param propertyId 
     * @returns void 
     * @throws ApiError
     */
    public static deletePropertyReferenceIdMeasurementradiationDelete(
id: string,
propertyId: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementRadiations/{id}/farm/{propertyId}',
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
