/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class InlineResponse20043 {
    'uniqueId'?: string;
    'openCounts'?: Array<number>;
    'openRates'?: Array<number>;
    'cumulativeOpenCounts'?: Array<number>;
    'cumulativeOpenRates'?: Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uniqueId",
            "baseName": "unique_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "openCounts",
            "baseName": "open_counts",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "openRates",
            "baseName": "open_rates",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "cumulativeOpenCounts",
            "baseName": "cumulative_open_counts",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "cumulativeOpenRates",
            "baseName": "cumulative_open_rates",
            "type": "Array<number>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20043.attributeTypeMap;
    }

    public constructor() {
    }
}

