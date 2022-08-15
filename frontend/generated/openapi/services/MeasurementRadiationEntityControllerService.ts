/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelMeasurementRadiation } from '../models/EntityModelMeasurementRadiation';
import type { MeasurementRadiationRequestBody } from '../models/MeasurementRadiationRequestBody';
import type { PagedModelEntityModelMeasurementRadiation } from '../models/PagedModelEntityModelMeasurementRadiation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementRadiationEntityControllerService {

    /**
     * get-measurementradiation
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns PagedModelEntityModelMeasurementRadiation OK
     * @throws ApiError
     */
    public static getCollectionResourceMeasurementradiationGet1(
page?: number,
size: number = 20,
sort?: Array<string>,
): CancelablePromise<PagedModelEntityModelMeasurementRadiation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementRadiations',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }

    /**
     * create-measurementradiation
     * @param requestBody 
     * @returns EntityModelMeasurementRadiation Created
     * @throws ApiError
     */
    public static postCollectionResourceMeasurementradiationPost(
requestBody: MeasurementRadiationRequestBody,
): CancelablePromise<EntityModelMeasurementRadiation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/measurementRadiations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get-measurementradiation
     * @param id 
     * @returns EntityModelMeasurementRadiation OK
     * @throws ApiError
     */
    public static getItemResourceMeasurementradiationGet(
id: string,
): CancelablePromise<EntityModelMeasurementRadiation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementRadiations/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * update-measurementradiation
     * @param id 
     * @param requestBody 
     * @returns EntityModelMeasurementRadiation OK
     * @throws ApiError
     */
    public static putItemResourceMeasurementradiationPut(
id: string,
requestBody: MeasurementRadiationRequestBody,
): CancelablePromise<EntityModelMeasurementRadiation> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/measurementRadiations/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete-measurementradiation
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static deleteItemResourceMeasurementradiationDelete(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementRadiations/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * patch-measurementradiation
     * @param id 
     * @param requestBody 
     * @returns EntityModelMeasurementRadiation OK
     * @throws ApiError
     */
    public static patchItemResourceMeasurementradiationPatch(
id: string,
requestBody: MeasurementRadiationRequestBody,
): CancelablePromise<EntityModelMeasurementRadiation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measurementRadiations/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
