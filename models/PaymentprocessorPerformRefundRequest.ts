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
import { PaymentprocessorPayment } from '../models/PaymentprocessorPayment';
import { HttpFile } from '../http/http';

export class PaymentprocessorPerformRefundRequest {
    'tenantId': string;
    'refundId': string;
    'payment': PaymentprocessorPayment;
    'amount'?: PaymentprocessorMoney;
    'currency'?: PaymentprocessorCurrency;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "refundId",
            "baseName": "refundId",
            "type": "string",
            "format": ""
        },
        {
            "name": "payment",
            "baseName": "payment",
            "type": "PaymentprocessorPayment",
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
        }    ];

    static getAttributeTypeMap() {
        return PaymentprocessorPerformRefundRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



