/**
 * Payment Processor Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PaymentprocessorAvailabilityContext } from '../models/PaymentprocessorAvailabilityContext';
import { HttpFile } from '../http/http';

export class PaymentprocessorGetAvailablePaymentMethodRequest {
    'tenantId': string;
    'code': string;
    'context': PaymentprocessorAvailabilityContext;
    'authenticateMethod'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "PaymentprocessorAvailabilityContext",
            "format": ""
        },
        {
            "name": "authenticateMethod",
            "baseName": "authenticateMethod",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentprocessorGetAvailablePaymentMethodRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

