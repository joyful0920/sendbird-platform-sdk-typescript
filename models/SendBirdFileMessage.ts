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

import { ModelObject } from './ModelObject';
import { SendBirdAdminMessage } from './SendBirdAdminMessage';
import { SendBirdAppleCriticalAlertOptions } from './SendBirdAppleCriticalAlertOptions';
import { SendBirdFileMessageParams } from './SendBirdFileMessageParams';
import { SendBirdMessageMetaArray } from './SendBirdMessageMetaArray';
import { SendBirdOGMetaData } from './SendBirdOGMetaData';
import { SendBirdReaction } from './SendBirdReaction';
import { SendBirdSender } from './SendBirdSender';
import { SendBirdThreadInfo } from './SendBirdThreadInfo';
import { SendBirdThumbnailObject } from './SendBirdThumbnailObject';
import { SendBirdUser } from './SendBirdUser';
import { SendBirdUserMessage } from './SendBirdUserMessage';
import { HttpFile } from '../http/http';

export class SendBirdFileMessage {
    'appleCriticalAlertOptions'?: SendBirdAppleCriticalAlertOptions;
    'channelType'?: string;
    'channelUrl'?: string;
    'createdAt'?: number;
    'customType'?: string;
    'data'?: string;
    'errorCode'?: number;
    'isReplyToChannel'?: boolean;
    'mentionType'?: string;
    'mentionedUsers'?: Array<SendBirdUser>;
    'messageId'?: number;
    'messageParams'?: SendBirdFileMessageParams;
    'messageSurvivalSeconds'?: number;
    'messageType'?: SendBirdFileMessageMessageTypeEnum;
    'metaArray'?: ModelObject;
    'metaArrays'?: Array<SendBirdMessageMetaArray>;
    'name'?: string;
    'ogMetaData'?: SendBirdOGMetaData;
    'parentMessage'?: SendBirdAdminMessage | SendBirdUserMessage | SendBirdFileMessage;
    'parentMessageId'?: number;
    'parentMessageText'?: string;
    'plainUrl'?: string;
    'reactions'?: Array<SendBirdReaction>;
    'reqId'?: string;
    'requestState'?: SendBirdFileMessageRequestStateEnum;
    'requestedMentionUserIds'?: Array<string>;
    'sender'?: SendBirdSender;
    'sendingStatus'?: SendBirdFileMessageSendingStatusEnum;
    'silent'?: boolean;
    'size'?: number;
    'threadInfo'?: SendBirdThreadInfo;
    'thumbnails'?: Array<SendBirdThumbnailObject>;
    'type'?: string;
    'updatedAt'?: number;
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appleCriticalAlertOptions",
            "baseName": "appleCriticalAlertOptions",
            "type": "SendBirdAppleCriticalAlertOptions",
            "format": ""
        },
        {
            "name": "channelType",
            "baseName": "channelType",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrl",
            "baseName": "channelUrl",
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
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "number",
            "format": ""
        },
        {
            "name": "isReplyToChannel",
            "baseName": "isReplyToChannel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mentionType",
            "baseName": "mentionType",
            "type": "string",
            "format": ""
        },
        {
            "name": "mentionedUsers",
            "baseName": "mentionedUsers",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "number",
            "format": ""
        },
        {
            "name": "messageParams",
            "baseName": "messageParams",
            "type": "SendBirdFileMessageParams",
            "format": ""
        },
        {
            "name": "messageSurvivalSeconds",
            "baseName": "messageSurvivalSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "messageType",
            "baseName": "messageType",
            "type": "SendBirdFileMessageMessageTypeEnum",
            "format": ""
        },
        {
            "name": "metaArray",
            "baseName": "metaArray",
            "type": "ModelObject",
            "format": ""
        },
        {
            "name": "metaArrays",
            "baseName": "metaArrays",
            "type": "Array<SendBirdMessageMetaArray>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "ogMetaData",
            "baseName": "ogMetaData",
            "type": "SendBirdOGMetaData",
            "format": ""
        },
        {
            "name": "parentMessage",
            "baseName": "parentMessage",
            "type": "SendBirdAdminMessage | SendBirdUserMessage | SendBirdFileMessage",
            "format": ""
        },
        {
            "name": "parentMessageId",
            "baseName": "parentMessageId",
            "type": "number",
            "format": ""
        },
        {
            "name": "parentMessageText",
            "baseName": "parentMessageText",
            "type": "string",
            "format": ""
        },
        {
            "name": "plainUrl",
            "baseName": "plainUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "reactions",
            "baseName": "reactions",
            "type": "Array<SendBirdReaction>",
            "format": ""
        },
        {
            "name": "reqId",
            "baseName": "reqId",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestState",
            "baseName": "requestState",
            "type": "SendBirdFileMessageRequestStateEnum",
            "format": ""
        },
        {
            "name": "requestedMentionUserIds",
            "baseName": "requestedMentionUserIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sender",
            "baseName": "sender",
            "type": "SendBirdSender",
            "format": ""
        },
        {
            "name": "sendingStatus",
            "baseName": "sendingStatus",
            "type": "SendBirdFileMessageSendingStatusEnum",
            "format": ""
        },
        {
            "name": "silent",
            "baseName": "silent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": ""
        },
        {
            "name": "threadInfo",
            "baseName": "threadInfo",
            "type": "SendBirdThreadInfo",
            "format": ""
        },
        {
            "name": "thumbnails",
            "baseName": "thumbnails",
            "type": "Array<SendBirdThumbnailObject>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
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
        return SendBirdFileMessage.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdFileMessageMessageTypeEnum = "file" ;
export type SendBirdFileMessageRequestStateEnum = "failed" | "none" | "pending" | "succeeded" ;
export type SendBirdFileMessageSendingStatusEnum = "canceled" | "failed" | "none" | "pending" | "succeeded" ;

