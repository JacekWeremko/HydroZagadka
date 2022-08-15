/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityModelMeasurementPH } from './EntityModelMeasurementPH';
import type { Links } from './Links';
import type { PageMetadata } from './PageMetadata';

export type PagedModelEntityModelMeasurementPH = {
    _embedded?: {
measurementPHs?: Array<EntityModelMeasurementPH>;
};
    _links?: Links;
    page?: PageMetadata;
};
