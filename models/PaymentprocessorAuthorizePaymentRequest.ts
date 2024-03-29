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

import { PaymentprocessorCurrency } from '../models/PaymentprocessorCurrency';
import { PaymentprocessorMoney } from '../models/PaymentprocessorMoney';
import { PaymentprocessorPaymentContext } from '../models/PaymentprocessorPaymentContext';
import { HttpFile } from '../http/http';

export class PaymentprocessorAuthorizePaymentRequest {
    'tenantId': string;
    'context'?: PaymentprocessorPaymentContext;
    /**
    * payment type stripe, paypal..
    */
    'code': string;
    'amount'?: PaymentprocessorMoney;
    'currency'?: PaymentprocessorCurrency;
    'additionalInfo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "PaymentprocessorPaymentContext",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "PaymentprocessorMoney",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "PaymentprocessorCurrency",
            "format": ""
        },
        {
            "name": "additionalInfo",
            "baseName": "additionalInfo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentprocessorAuthorizePaymentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



