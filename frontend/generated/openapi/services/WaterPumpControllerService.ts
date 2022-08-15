/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WaterPumpControllerService {

    /**
     * @returns any OK
     * @throws ApiError
     */
    public static useWaterPump(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/water-pump/use',
        });
    }

}
