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

import { SendBirdChannelResponse } from './SendBirdChannelResponse';
import { SendBirdMessageResponse } from './SendBirdMessageResponse';
import { SendBirdUser } from './SendBirdUser';
import { HttpFile } from '../http/http';

export class ReportMessageByIdResponse {
    'reportType'?: string;
    'reportCategory'?: string;
    'reportingUser'?: SendBirdUser;
    'offendingUser'?: SendBirdUser;
    'reportedMessage'?: SendBirdMessageResponse;
    'channel'?: SendBirdChannelResponse;
    'reportDescription'?: string;
    'createdAt'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "reportType",
            "baseName": "report_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportCategory",
            "baseName": "report_category",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportingUser",
            "baseName": "reporting_user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "offendingUser",
            "baseName": "offending_user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "reportedMessage",
            "baseName": "reported_message",
            "type": "SendBirdMessageResponse",
            "format": ""
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "SendBirdChannelResponse",
            "format": ""
        },
        {
            "name": "reportDescription",
            "baseName": "report_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReportMessageByIdResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

