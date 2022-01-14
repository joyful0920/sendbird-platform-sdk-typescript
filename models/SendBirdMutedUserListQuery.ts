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

export class SendBirdMutedUserListQuery {
    'hasNext'?: boolean;
    'isLoading'?: boolean;
    'limit'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hasNext",
            "baseName": "hasNext",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isLoading",
            "baseName": "isLoading",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdMutedUserListQuery.attributeTypeMap;
    }

    public constructor() {
    }
}

