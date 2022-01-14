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

import { InlineResponse20048Messages } from './InlineResponse20048Messages';
import { HttpFile } from '../http/http';

export class InlineResponse20048 {
    'messages'?: Array<InlineResponse20048Messages>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<InlineResponse20048Messages>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20048.attributeTypeMap;
    }

    public constructor() {
    }
}

