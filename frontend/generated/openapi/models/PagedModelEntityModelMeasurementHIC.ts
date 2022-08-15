/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityModelMeasurementHIC } from './EntityModelMeasurementHIC';
import type { Links } from './Links';
import type { PageMetadata } from './PageMetadata';

export type PagedModelEntityModelMeasurementHIC = {
    _embedded?: {
measurementHICs?: Array<EntityModelMeasurementHIC>;
};
    _links?: Links;
    page?: PageMetadata;
};
