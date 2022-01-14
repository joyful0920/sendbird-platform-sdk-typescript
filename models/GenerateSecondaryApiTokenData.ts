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

export class GenerateSecondaryApiTokenData {
    /**
    * Specifies the master API token of the application.
    */
    'HTTP_API_TOKEN': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "HTTP_API_TOKEN",
            "baseName": "HTTP_API_TOKEN",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GenerateSecondaryApiTokenData.attributeTypeMap;
    }

    public constructor() {
    }
}

