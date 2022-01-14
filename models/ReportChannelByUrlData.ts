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

export class ReportChannelByUrlData {
    /**
    * Specifies the type of the channel. Either open_channels or group_channels.
    */
    'channelType': string;
    /**
    * Specifies the URL of the channel to report for offensive messages or inappropriate activities.
    */
    'channelUrl': string;
    /**
    * Specifies the category which indicates the reason for reporting. Acceptable values are suspicious, harassing, inappropriate, and spam.
    */
    'reportCategory': string;
    /**
    * Specifies the unique ID of the user who reports the channel.
    */
    'reportingUserId': string;
    /**
    * Specifies additional information to be included in the report.
    */
    'reportDescription': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelType",
            "baseName": "channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrl",
            "baseName": "channel_url",
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
            "name": "reportingUserId",
            "baseName": "reporting_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportDescription",
            "baseName": "report_description",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReportChannelByUrlData.attributeTypeMap;
    }

    public constructor() {
    }
}

