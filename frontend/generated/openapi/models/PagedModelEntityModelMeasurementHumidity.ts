/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityModelMeasurementHumidity } from './EntityModelMeasurementHumidity';
import type { Links } from './Links';
import type { PageMetadata } from './PageMetadata';

export type PagedModelEntityModelMeasurementHumidity = {
    _embedded?: {
measurementHumidities?: Array<EntityModelMeasurementHumidity>;
};
    _links?: Links;
    page?: PageMetadata;
};
