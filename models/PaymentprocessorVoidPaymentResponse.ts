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

import { PaymentprocessorTransaction } from '../models/PaymentprocessorTransaction';
import { HttpFile } from '../http/http';

export class PaymentprocessorVoidPaymentResponse {
    'transaction'?: PaymentprocessorTransaction;
    'errorMessage'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "PaymentprocessorTransaction",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentprocessorVoidPaymentResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

