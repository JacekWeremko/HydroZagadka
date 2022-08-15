/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityModelFarm } from './EntityModelFarm';
import type { Links } from './Links';
import type { PageMetadata } from './PageMetadata';

export type PagedModelEntityModelFarm = {
    _embedded?: {
farms?: Array<EntityModelFarm>;
};
    _links?: Links;
    page?: PageMetadata;
};
