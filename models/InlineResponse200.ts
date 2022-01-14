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

import { InlineResponse200Results } from './InlineResponse200Results';
import { HttpFile } from '../http/http';

export class InlineResponse200 {
    'count'?: number;
    'previous'?: string;
    'next'?: string;
    'results'?: Array<InlineResponse200Results>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<InlineResponse200Results>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse200.attributeTypeMap;
    }

    public constructor() {
    }
}

