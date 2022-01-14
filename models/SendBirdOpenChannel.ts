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

import { SendBirdUser } from './SendBirdUser';
import { HttpFile } from '../http/http';

export class SendBirdOpenChannel {
    'coverUrl'?: string;
    'createdAt'?: number;
    'creator'?: SendBirdUser;
    'customType'?: string;
    'data'?: string;
    'isEphemeral'?: boolean;
    'isFrozen'?: boolean;
    'name'?: string;
    'operators'?: Array<SendBirdUser>;
    'participantCount'?: number;
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "coverUrl",
            "baseName": "coverUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number",
            "format": ""
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "customType",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "isEphemeral",
            "baseName": "isEphemeral",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFrozen",
            "baseName": "isFrozen",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "operators",
            "baseName": "operators",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "participantCount",
            "baseName": "participantCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdOpenChannel.attributeTypeMap;
    }

    public constructor() {
    }
}

