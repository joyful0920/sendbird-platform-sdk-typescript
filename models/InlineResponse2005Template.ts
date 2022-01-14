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

export class InlineResponse2005Template {
    'MESG'?: string;
    'FILE'?: string;
    'ADMM'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "MESG",
            "baseName": "MESG",
            "type": "string",
            "format": ""
        },
        {
            "name": "FILE",
            "baseName": "FILE",
            "type": "string",
            "format": ""
        },
        {
            "name": "ADMM",
            "baseName": "ADMM",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2005Template.attributeTypeMap;
    }

    public constructor() {
    }
}

