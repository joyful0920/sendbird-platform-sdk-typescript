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

import { SendBirdGroupChannelContextSource } from './SendBirdGroupChannelContextSource';
import { HttpFile } from '../http/http';

export class SendBirdMessageContext {
    'isFromEvent'?: boolean;
    'sendingStatus'?: SendBirdMessageContextSendingStatusEnum;
    'source'?: SendBirdGroupChannelContextSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isFromEvent",
            "baseName": "isFromEvent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sendingStatus",
            "baseName": "sendingStatus",
            "type": "SendBirdMessageContextSendingStatusEnum",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "SendBirdGroupChannelContextSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdMessageContext.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdMessageContextSendingStatusEnum = "canceled" | "failed" | "none" | "pending" | "succeeded" ;

