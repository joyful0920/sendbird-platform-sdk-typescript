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

export class UpdatePushPreferencesForChannelByUrlData {
    /**
    * Determines the type of push notification trigger to apply to the speficied channel. Acceptable values are limited to the following:<br />- default: the user's push notification trigger setting automatically applies to the channel. This is the default setting.<br />- all: when disconnected from Sendbird server, the user receives notifications for all new messages in the channel including messages the user has been mentioned in.<br />- mention_only: when disconnected from Sendbird server, the user only receives notifications for messages in the channel the user has been mentioned in.<br />- off: the user doesn't receive any notifications in the channel.
    */
    'pushTriggerOption': string;
    /**
    * (Deprecated) Determines whether notification messages for the user are delivered to the group channel. (default: true)
    */
    'enable': boolean;
    /**
    * Specifies the name of a sound file to be played when a push notification is delivered to the specified channel.
    */
    'pushSound': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pushTriggerOption",
            "baseName": "push_trigger_option",
            "type": "string",
            "format": ""
        },
        {
            "name": "enable",
            "baseName": "enable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pushSound",
            "baseName": "push_sound",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdatePushPreferencesForChannelByUrlData.attributeTypeMap;
    }

    public constructor() {
    }
}

