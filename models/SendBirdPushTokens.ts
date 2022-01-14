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

export class SendBirdPushTokens {
    'deviceTokens'?: Array<string>;
    'hasMore'?: boolean;
    'token'?: string;
    'type'?: SendBirdPushTokensTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deviceTokens",
            "baseName": "deviceTokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "hasMore",
            "baseName": "hasMore",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SendBirdPushTokensTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdPushTokens.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdPushTokensTypeEnum = "apns" | "apns_voip" | "gcm" ;

