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
 * @interface PaymentprocessorAuthorizePaymentRequest
 */
export interface PaymentprocessorAuthorizePaymentRequest {
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorAuthorizePaymentRequest
     */
    'tenantId': string;
    /**
     * 
     * @type {PaymentprocessorPaymentContext}
     * @memberof PaymentprocessorAuthorizePaymentRequest
     */
    'context'?: PaymentprocessorPaymentContext;
    /**
     * payment type stripe, paypal..
     * @type {string}
     * @memberof PaymentprocessorAuthorizePaymentRequest
     */
    'code': string;
    /**
     * 
     * @type {PaymentprocessorMoney}
     * @memberof PaymentprocessorAuthorizePaymentRequest
     */
    'amount'?: PaymentprocessorMoney;
    /**
     * 
     * @type {PaymentprocessorCurrency}
     * @memberof PaymentprocessorAuthorizePaymentRequest
     */
    'currency'?: PaymentprocessorCurrency;
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorAuthorizePaymentRequest
     */
    'additionalInfo'?: string;
}