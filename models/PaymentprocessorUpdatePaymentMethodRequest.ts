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
import { PaymentprocessorLocalizedText } from '../models/PaymentprocessorLocalizedText';
import { PaymentprocessorMoney } from '../models/PaymentprocessorMoney';
import { PaymentprocessorPaymentMethodRestriction } from '../models/PaymentprocessorPaymentMethodRestriction';
import { HttpFile } from '../http/http';

export class PaymentprocessorUpdatePaymentMethodRequest {
    'tenantId': string;
    'code': string;
    'title'?: PaymentprocessorLocalizedText;
    'label'?: PaymentprocessorLocalizedText;
    'enabled'?: boolean;
    'amount'?: PaymentprocessorMoney;
    'currency'?: PaymentprocessorCurrency;
    'configuration'?: any;
    'isUpfront'?: boolean;
    'description'?: PaymentprocessorLocalizedText;
    'restrictions'?: Array<PaymentprocessorPaymentMethodRestriction>;
    'fieldMask'?: string;

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
            "name": "title",
            "baseName": "title",
            "type": "PaymentprocessorLocalizedText",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "PaymentprocessorLocalizedText",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
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
            "name": "configuration",
            "baseName": "configuration",
            "type": "any",
            "format": ""
        },
        {
            "name": "isUpfront",
            "baseName": "isUpfront",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "PaymentprocessorLocalizedText",
            "format": ""
        },
        {
            "name": "restrictions",
            "baseName": "restrictions",
            "type": "Array<PaymentprocessorPaymentMethodRestriction>",
            "format": ""
        },
        {
            "name": "fieldMask",
            "baseName": "fieldMask",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentprocessorUpdatePaymentMethodRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



