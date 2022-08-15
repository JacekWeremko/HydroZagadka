/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LightControllerService {

    /**
     * @returns any OK
     * @throws ApiError
     */
    public static turnLightOn(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/light/on',
        });
    }

    /**
     * @returns any OK
     * @throws ApiError
     */
    public static turnLightOff(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/light/off',
        });
    }

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static setLightLevel(
requestBody: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/light/level',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns number OK
     * @throws ApiError
     */
    public static getLightLevel(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/light',
        });
    }

}
