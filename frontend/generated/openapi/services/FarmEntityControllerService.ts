/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelFarm } from '../models/EntityModelFarm';
import type { FarmRequestBody } from '../models/FarmRequestBody';
import type { PagedModelEntityModelFarm } from '../models/PagedModelEntityModelFarm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmEntityControllerService {

    /**
     * get-farm
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns PagedModelEntityModelFarm OK
     * @throws ApiError
     */
    public static getCollectionResourceFarmGet1(
page?: number,
size: number = 20,
sort?: Array<string>,
): CancelablePromise<PagedModelEntityModelFarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/farms',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }

    /**
     * create-farm
     * @param requestBody 
     * @returns EntityModelFarm Created
     * @throws ApiError
     */
    public static postCollectionResourceFarmPost(
requestBody: FarmRequestBody,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/farms',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get-farm
     * @param id 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static getItemResourceFarmGet(
id: string,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/farms/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * update-farm
     * @param id 
     * @param requestBody 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static putItemResourceFarmPut(
id: string,
requestBody: FarmRequestBody,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/farms/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete-farm
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public static deleteItemResourceFarmDelete(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/farms/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * patch-farm
     * @param id 
     * @param requestBody 
     * @returns EntityModelFarm OK
     * @throws ApiError
     */
    public static patchItemResourceFarmPatch(
id: string,
requestBody: FarmRequestBody,
): CancelablePromise<EntityModelFarm> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/farms/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
