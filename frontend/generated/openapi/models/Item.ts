/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbstractJsonSchemaPropertyObject } from './AbstractJsonSchemaPropertyObject';

export type Item = {
    type?: string;
    properties?: Record<string, AbstractJsonSchemaPropertyObject>;
    requiredProperties?: Array<string>;
};
