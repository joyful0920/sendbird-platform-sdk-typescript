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

export class AddRegistrationOrDeviceTokenData {
    /**
    * Specifies a registration token for Firebase Cloud Messaging (formerly [Google Cloud Messaging](https://developers.google.com/cloud-messaging/)).
    */
    'gcmRegToken': string;
    /**
    * Specifies a device token for Huawei Mobile Services.
    */
    'huaweiDeviceToken': string;
    /**
    * Specifies a device token for Apple Push Notification Service.
    */
    'apnsDeviceToken': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "gcmRegToken",
            "baseName": "gcm_reg_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "huaweiDeviceToken",
            "baseName": "huawei_device_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "apnsDeviceToken",
            "baseName": "apns_device_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddRegistrationOrDeviceTokenData.attributeTypeMap;
    }

    public constructor() {
    }
}

