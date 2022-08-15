/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityModelMeasurementRadiation } from './EntityModelMeasurementRadiation';
import type { Links } from './Links';
import type { PageMetadata } from './PageMetadata';

export type PagedModelEntityModelMeasurementRadiation = {
    _embedded?: {
measurementRadiations?: Array<EntityModelMeasurementRadiation>;
};
    _links?: Links;
    page?: PageMetadata;
};
