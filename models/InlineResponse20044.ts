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

import { InlineResponse20044OpenStatus } from './InlineResponse20044OpenStatus';
import { HttpFile } from '../http/http';

export class InlineResponse20044 {
    'openStatus'?: Array<InlineResponse20044OpenStatus>;
    'next'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "openStatus",
            "baseName": "open_status",
            "type": "Array<InlineResponse20044OpenStatus>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20044.attributeTypeMap;
    }

    public constructor() {
    }
}

