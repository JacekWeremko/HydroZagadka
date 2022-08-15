/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelObject } from '../models/CollectionModelObject';
import type { EntityModelFarm } from '../models/EntityModelFarm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementHicPropertyReferenceControllerService {

    /**
     * get-farm-by-measurementhic-Id
     * @param id 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static followPropertyReferenceMeasurementhicGet1(
id: string,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementHICs/{id}/farm',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * update-farm-by-measurementhic-Id
     * @param id 
     * @param requestBody 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static createPropertyReferenceMeasurementhicPut(
id: string,
requestBody: CollectionModelObject,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/measurementHICs/{id}/farm',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete-farm-by-measurementhic-Id
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static deletePropertyReferenceMeasurementhicDelete(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementHICs/{id}/farm',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * patch-farm-by-measurementhic-Id
     * @param id 
     * @param requestBody 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static createPropertyReferenceMeasurementhicPatch(
id: string,
requestBody: CollectionModelObject,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measurementHICs/{id}/farm',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get-farm-by-measurementhic-Id
     * @param id 
     * @param propertyId 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static followPropertyReferenceMeasurementhicGet(
id: string,
propertyId: string,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementHICs/{id}/farm/{propertyId}',
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
     * delete-farm-by-measurementhic-Id
     * @param id 
     * @param propertyId 
     * @returns void 
     * @throws ApiError
     */
    public static deletePropertyReferenceIdMeasurementhicDelete(
id: string,
propertyId: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementHICs/{id}/farm/{propertyId}',
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
