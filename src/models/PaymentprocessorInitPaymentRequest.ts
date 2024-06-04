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
 * @interface PaymentprocessorInitPaymentRequest
 */
export interface PaymentprocessorInitPaymentRequest {
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorInitPaymentRequest
     */
    'tenantId': string;
    /**
     * 
     * @type {PaymentprocessorPaymentContext}
     * @memberof PaymentprocessorInitPaymentRequest
     */
    'context'?: PaymentprocessorPaymentContext;
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorInitPaymentRequest
     */
    'code': string;
    /**
     * 
     * @type {PaymentprocessorMoney}
     * @memberof PaymentprocessorInitPaymentRequest
     */
    'amount'?: PaymentprocessorMoney;
    /**
     * 
     * @type {PaymentprocessorCurrency}
     * @memberof PaymentprocessorInitPaymentRequest
     */
    'currency'?: PaymentprocessorCurrency;
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorInitPaymentRequest
     */
    'additionalInfo'?: string;
}