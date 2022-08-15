/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelMeasurementHumidity } from '../models/EntityModelMeasurementHumidity';
import type { MeasurementHumidityRequestBody } from '../models/MeasurementHumidityRequestBody';
import type { PagedModelEntityModelMeasurementHumidity } from '../models/PagedModelEntityModelMeasurementHumidity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementHumidityEntityControllerService {

    /**
     * get-measurementhumidity
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns PagedModelEntityModelMeasurementHumidity OK
     * @throws ApiError
     */
    public static getCollectionResourceMeasurementhumidityGet1(
page?: number,
size: number = 20,
sort?: Array<string>,
): CancelablePromise<PagedModelEntityModelMeasurementHumidity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementHumidities',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }

    /**
     * create-measurementhumidity
     * @param requestBody 
     * @returns EntityModelMeasurementHumidity Created
     * @throws ApiError
     */
    public static postCollectionResourceMeasurementhumidityPost(
requestBody: MeasurementHumidityRequestBody,
): CancelablePromise<EntityModelMeasurementHumidity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/measurementHumidities',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get-measurementhumidity
     * @param id 
     * @returns EntityModelMeasurementHumidity OK
     * @throws ApiError
     */
    public static getItemResourceMeasurementhumidityGet(
id: string,
): CancelablePromise<EntityModelMeasurementHumidity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementHumidities/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * update-measurementhumidity
     * @param id 
     * @param requestBody 
     * @returns EntityModelMeasurementHumidity OK
     * @throws ApiError
     */
    public static putItemResourceMeasurementhumidityPut(
id: string,
requestBody: MeasurementHumidityRequestBody,
): CancelablePromise<EntityModelMeasurementHumidity> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/measurementHumidities/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete-measurementhumidity
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static deleteItemResourceMeasurementhumidityDelete(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementHumidities/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * patch-measurementhumidity
     * @param id 
     * @param requestBody 
     * @returns EntityModelMeasurementHumidity OK
     * @throws ApiError
     */
    public static patchItemResourceMeasurementhumidityPatch(
id: string,
requestBody: MeasurementHumidityRequestBody,
): CancelablePromise<EntityModelMeasurementHumidity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measurementHumidities/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
