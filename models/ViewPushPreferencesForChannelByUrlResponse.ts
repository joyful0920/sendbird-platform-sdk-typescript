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

export class ViewPushPreferencesForChannelByUrlResponse {
    'pushTriggerOption'?: string;
    'doNotDisturb'?: boolean;
    'startHour'?: number;
    'startMin'?: number;
    'endHour'?: number;
    'endMin'?: number;
    'snoozeEnabled'?: boolean;
    'snoozeStartTs'?: number;
    'snoozeEndTs'?: number;
    'timezone'?: string;
    'pushSound'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pushTriggerOption",
            "baseName": "push_trigger_option",
            "type": "string",
            "format": ""
        },
        {
            "name": "doNotDisturb",
            "baseName": "do_not_disturb",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "startHour",
            "baseName": "start_hour",
            "type": "number",
            "format": ""
        },
        {
            "name": "startMin",
            "baseName": "start_min",
            "type": "number",
            "format": ""
        },
        {
            "name": "endHour",
            "baseName": "end_hour",
            "type": "number",
            "format": ""
        },
        {
            "name": "endMin",
            "baseName": "end_min",
            "type": "number",
            "format": ""
        },
        {
            "name": "snoozeEnabled",
            "baseName": "snooze_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "snoozeStartTs",
            "baseName": "snooze_start_ts",
            "type": "number",
            "format": ""
        },
        {
            "name": "snoozeEndTs",
            "baseName": "snooze_end_ts",
            "type": "number",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string",
            "format": ""
        },
        {
            "name": "pushSound",
            "baseName": "push_sound",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ViewPushPreferencesForChannelByUrlResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

