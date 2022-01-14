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

export class SendBirdGroupChannelFilterStaticSuperChannelFilter {
    'ALL'?: SendBirdGroupChannelFilterStaticSuperChannelFilterALLEnum;
    'NON_SUPER'?: SendBirdGroupChannelFilterStaticSuperChannelFilterNONSUPEREnum;
    'SUPER'?: SendBirdGroupChannelFilterStaticSuperChannelFilterSUPEREnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ALL",
            "baseName": "ALL",
            "type": "SendBirdGroupChannelFilterStaticSuperChannelFilterALLEnum",
            "format": ""
        },
        {
            "name": "NON_SUPER",
            "baseName": "NON_SUPER",
            "type": "SendBirdGroupChannelFilterStaticSuperChannelFilterNONSUPEREnum",
            "format": ""
        },
        {
            "name": "SUPER",
            "baseName": "SUPER",
            "type": "SendBirdGroupChannelFilterStaticSuperChannelFilterSUPEREnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdGroupChannelFilterStaticSuperChannelFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdGroupChannelFilterStaticSuperChannelFilterALLEnum = "all" ;
export type SendBirdGroupChannelFilterStaticSuperChannelFilterNONSUPEREnum = "nonsuper" ;
export type SendBirdGroupChannelFilterStaticSuperChannelFilterSUPEREnum = "super" ;

