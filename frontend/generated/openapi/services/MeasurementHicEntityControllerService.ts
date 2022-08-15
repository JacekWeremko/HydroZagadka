/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelMeasurementHIC } from '../models/EntityModelMeasurementHIC';
import type { MeasurementHICRequestBody } from '../models/MeasurementHICRequestBody';
import type { PagedModelEntityModelMeasurementHIC } from '../models/PagedModelEntityModelMeasurementHIC';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MeasurementHicEntityControllerService {

    /**
     * get-measurementhic
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns PagedModelEntityModelMeasurementHIC OK
     * @throws ApiError
     */
    public static getCollectionResourceMeasurementhicGet1(
page?: number,
size: number = 20,
sort?: Array<string>,
): CancelablePromise<PagedModelEntityModelMeasurementHIC> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementHICs',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }

    /**
     * create-measurementhic
     * @param requestBody 
     * @returns EntityModelMeasurementHIC Created
     * @throws ApiError
     */
    public static postCollectionResourceMeasurementhicPost(
requestBody: MeasurementHICRequestBody,
): CancelablePromise<EntityModelMeasurementHIC> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/measurementHICs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get-measurementhic
     * @param id 
     * @returns EntityModelMeasurementHIC OK
     * @throws ApiError
     */
    public static getItemResourceMeasurementhicGet(
id: string,
): CancelablePromise<EntityModelMeasurementHIC> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measurementHICs/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * update-measurementhic
     * @param id 
     * @param requestBody 
     * @returns EntityModelMeasurementHIC OK
     * @throws ApiError
     */
    public static putItemResourceMeasurementhicPut(
id: string,
requestBody: MeasurementHICRequestBody,
): CancelablePromise<EntityModelMeasurementHIC> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/measurementHICs/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete-measurementhic
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static deleteItemResourceMeasurementhicDelete(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/measurementHICs/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * patch-measurementhic
     * @param id 
     * @param requestBody 
     * @returns EntityModelMeasurementHIC OK
     * @throws ApiError
     */
    public static patchItemResourceMeasurementhicPatch(
id: string,
requestBody: MeasurementHICRequestBody,
): CancelablePromise<EntityModelMeasurementHIC> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/measurementHICs/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
