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

export class GcUpdateChannelByUrlData {
    /**
    * Specifies the URL of the channel to update.
    */
    'channelUrl': string;
    /**
    * Specifies the name of the channel, or the channel topic. The length is limited to 191 characters.
    */
    'name': string;
    /**
    * Specifies the unique URL of the cover image. The length is limited to 2,048 characters.
    */
    'coverUrl': string;
    /**
    * Uploads the cover image file for the channel.
    */
    'coverFile': HttpFile;
    /**
    * Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
    */
    'customType': string;
    /**
    * Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
    */
    'data': string;
    /**
    * Determines whether to reuse an existing channel or create a new channel. If set to true, returns a channel with the current channel members users or creates a new channel if no match is found. Sendbird server can also use the custom channel type in the custom_type property if specified along with the users to return the corresponding channel. If set to false, Sendbird server always creates a new channel with a combination of the users as well as the channel custom type if specified. (Default: false)<br /><br /> Under this property, Sendbird server does not distinguish channels based on other properties such as channel URL or channel name.
    */
    'isDistinct': boolean;
    /**
    * Determines whether to allow a user to join the channel without an invitation. (Default: false)
    */
    'isPublic': boolean;
    /**
    * This property can be used only when the channel operator wants to set an access code for a public group channel. If specified, the is_access_code_required property of the channel resource is then set to true, and the channel begins to require the specified access code to a user who attempts to join.
    */
    'accessCode': string;
    /**
    * Specifies an array of one or more IDs of users to register as operators of the channel. If the operators are not members of the channel yet, they need an [invitation](#2-invite-as-members) to [join](#2-join-a-channel) a privte group channel while they don't need any to join a [public](#-3-private-vs-public) group channel. The maximum allowed number of operators per channel is 100.
    */
    'operatorIds': Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "coverUrl",
            "baseName": "cover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "coverFile",
            "baseName": "cover_file",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDistinct",
            "baseName": "is_distinct",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPublic",
            "baseName": "is_public",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "accessCode",
            "baseName": "access_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "operatorIds",
            "baseName": "operator_ids",
            "type": "Array<number>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcUpdateChannelByUrlData.attributeTypeMap;
    }

    public constructor() {
    }
}

