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

export class UpdatePushNotificationContentTemplateData {
    /**
    * Specifies the name of a push notification content template to update. Acceptable values are default and alternative.
    */
    'templateName': string;
    /**
    * The push notification content template of which content types to be updated and their detailed format.
    */
    'template': string;
    /**
    * Specifies a format for text messages. We support customization of two fields, which are the sender_name and message. These fields will be replaced with actual corresponding values when sending notification requests to FCM, HMS, or APNs.
    */
    'templateMESG': string;
    /**
    * Specifies a format for file messages. We support customization with variables including filename and file_type_friendly. When sending notification requests to FCM, HMS, or APNs, the filename will be replaced with the corresponding string value while the file_type_friendly will indicate the type of the file sent, such as `Audio`, `Image`, and `Video`.
    */
    'templateFILE': string;
    /**
    * Specifies a format for admin messages. We support customization of one field, which is the message. This field will be replaced with actual corresponding values when sending notification requests to FCM, HMS, or APNs.
    */
    'templateADMN': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "templateName",
            "baseName": "template_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateMESG",
            "baseName": "template.MESG",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateFILE",
            "baseName": "template.FILE",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateADMN",
            "baseName": "template.ADMN",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdatePushNotificationContentTemplateData.attributeTypeMap;
    }

    public constructor() {
    }
}

