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

export class SendBirdRestrictionType {
    'BANNED'?: SendBirdRestrictionTypeBANNEDEnum;
    'MUTED'?: SendBirdRestrictionTypeMUTEDEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "BANNED",
            "baseName": "BANNED",
            "type": "SendBirdRestrictionTypeBANNEDEnum",
            "format": ""
        },
        {
            "name": "MUTED",
            "baseName": "MUTED",
            "type": "SendBirdRestrictionTypeMUTEDEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdRestrictionType.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdRestrictionTypeBANNEDEnum = "banned" ;
export type SendBirdRestrictionTypeMUTEDEnum = "muted" ;

