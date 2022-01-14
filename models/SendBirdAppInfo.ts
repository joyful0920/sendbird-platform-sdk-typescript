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

export class SendBirdAppInfo {
    'applicationAttributes'?: Array<string>;
    'emojiHash'?: string;
    'isUsingReaction'?: boolean;
    'premiumFeatureList'?: Array<string>;
    'uploadSizeLimit'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "applicationAttributes",
            "baseName": "applicationAttributes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "emojiHash",
            "baseName": "emojiHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "isUsingReaction",
            "baseName": "isUsingReaction",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "premiumFeatureList",
            "baseName": "premiumFeatureList",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "uploadSizeLimit",
            "baseName": "uploadSizeLimit",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdAppInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

