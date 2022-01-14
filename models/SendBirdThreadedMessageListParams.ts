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

export class SendBirdThreadedMessageListParams {
    'customType'?: string;
    'customTypes'?: Array<string>;
    'includeMetaArray'?: boolean;
    'includeParentMessageInfo'?: boolean;
    'includeParentMessageText'?: boolean;
    'includePollDetails'?: boolean;
    'includeReaction'?: boolean;
    'includeReactions'?: boolean;
    'isInclusive'?: boolean;
    'messageType'?: string;
    'nextResultSize'?: number;
    'prevResultSize'?: number;
    'reverse'?: boolean;
    'senderUserIds'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customType",
            "baseName": "customType",
            "type": "string",
            "format": ""
        },
        {
            "name": "customTypes",
            "baseName": "customTypes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "includeMetaArray",
            "baseName": "includeMetaArray",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "includeParentMessageInfo",
            "baseName": "includeParentMessageInfo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "includeParentMessageText",
            "baseName": "includeParentMessageText",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "includePollDetails",
            "baseName": "includePollDetails",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "includeReaction",
            "baseName": "includeReaction",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "includeReactions",
            "baseName": "includeReactions",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isInclusive",
            "baseName": "isInclusive",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "messageType",
            "baseName": "messageType",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextResultSize",
            "baseName": "nextResultSize",
            "type": "number",
            "format": ""
        },
        {
            "name": "prevResultSize",
            "baseName": "prevResultSize",
            "type": "number",
            "format": ""
        },
        {
            "name": "reverse",
            "baseName": "reverse",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "senderUserIds",
            "baseName": "senderUserIds",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdThreadedMessageListParams.attributeTypeMap;
    }

    public constructor() {
    }
}

