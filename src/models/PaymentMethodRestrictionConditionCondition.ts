/* tslint:disable */
/* eslint-disable */
/**
 * Payment Processor Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const PaymentMethodRestrictionConditionCondition = {
    In: 'IN',
    NotIn: 'NOT_IN'
} as const;
export type PaymentMethodRestrictionConditionCondition = typeof PaymentMethodRestrictionConditionCondition[keyof typeof PaymentMethodRestrictionConditionCondition];


export function PaymentMethodRestrictionConditionConditionFromJSON(json: any): PaymentMethodRestrictionConditionCondition {
    return PaymentMethodRestrictionConditionConditionFromJSONTyped(json, false);
}

export function PaymentMethodRestrictionConditionConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodRestrictionConditionCondition {
    return json as PaymentMethodRestrictionConditionCondition;
}

export function PaymentMethodRestrictionConditionConditionToJSON(value?: PaymentMethodRestrictionConditionCondition | null): any {
    return value as any;
}

