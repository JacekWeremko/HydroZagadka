/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelMeasurementPH } from '../models/EntityModelMeasurementPH';
import type { MeasurementPHRequestBody } from '../models/MeasurementPHRequestBody';
import type { PagedModelEntityModelMeasurementPH } from '../models/PagedModelEntityModelMeasurementPH';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementPhEntityControllerService {

    /**
     * get-measurementph
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns PagedModelEntityModelMeasurementPH OK
     * @throws ApiError
     */
    public static getCollectionResourceMeasurementphGet1(
page?: number,
size: number = 20,
sort?: Array<string>,
): CancelablePromise<PagedModelEntityModelMeasurementPH> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementPHs',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }

    /**
     * create-measurementph
     * @param requestBody 
     * @returns EntityModelMeasurementPH Created
     * @throws ApiError
     */
    public static postCollectionResourceMeasurementphPost(
requestBody: MeasurementPHRequestBody,
): CancelablePromise<EntityModelMeasurementPH> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/measurementPHs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get-measurementph
     * @param id 
     * @returns EntityModelMeasurementPH OK
     * @throws ApiError
     */
    public static getItemResourceMeasurementphGet(
id: string,
): CancelablePromise<EntityModelMeasurementPH> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementPHs/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * update-measurementph
     * @param id 
     * @param requestBody 
     * @returns EntityModelMeasurementPH OK
     * @throws ApiError
     */
    public static putItemResourceMeasurementphPut(
id: string,
requestBody: MeasurementPHRequestBody,
): CancelablePromise<EntityModelMeasurementPH> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/measurementPHs/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete-measurementph
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static deleteItemResourceMeasurementphDelete(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementPHs/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * patch-measurementph
     * @param id 
     * @param requestBody 
     * @returns EntityModelMeasurementPH OK
     * @throws ApiError
     */
    public static patchItemResourceMeasurementphPatch(
id: string,
requestBody: MeasurementPHRequestBody,
): CancelablePromise<EntityModelMeasurementPH> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measurementPHs/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
