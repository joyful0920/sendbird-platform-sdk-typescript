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

export class SendBirdQueryType {
    'AND'?: SendBirdQueryTypeANDEnum;
    'OR'?: SendBirdQueryTypeOREnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "AND",
            "baseName": "AND",
            "type": "SendBirdQueryTypeANDEnum",
            "format": ""
        },
        {
            "name": "OR",
            "baseName": "OR",
            "type": "SendBirdQueryTypeOREnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdQueryType.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdQueryTypeANDEnum = "AND" ;
export type SendBirdQueryTypeOREnum = "OR" ;

