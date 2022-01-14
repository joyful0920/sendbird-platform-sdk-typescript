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

import { InlineResponse20010PeakConnections } from './InlineResponse20010PeakConnections';
import { HttpFile } from '../http/http';

export class InlineResponse20010 {
    'peakConnections'?: Array<InlineResponse20010PeakConnections>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "peakConnections",
            "baseName": "peak_connections",
            "type": "Array<InlineResponse20010PeakConnections>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20010.attributeTypeMap;
    }

    public constructor() {
    }
}

