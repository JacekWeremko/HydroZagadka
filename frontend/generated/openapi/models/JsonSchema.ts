/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbstractJsonSchemaPropertyObject } from './AbstractJsonSchemaPropertyObject';
import type { Item } from './Item';

export type JsonSchema = {
    title?: string;
    description?: string;
    properties?: Record<string, AbstractJsonSchemaPropertyObject>;
    requiredProperties?: Array<string>;
    definitions?: Record<string, Item>;
    type?: string;
    $schema?: string;
};
