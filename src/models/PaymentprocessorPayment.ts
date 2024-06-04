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
 * @interface PaymentprocessorPayment
 */
export interface PaymentprocessorPayment {
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorPayment
     */
    'id': string;
    /**
     * payment type stripe, paypal..
     * @type {string}
     * @memberof PaymentprocessorPayment
     */
    'code': string;
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorPayment
     */
    'additionalInfo'?: string;
    /**
     * 
     * @type {Array<PaymentprocessorTransaction>}
     * @memberof PaymentprocessorPayment
     */
    'transactions'?: Array<PaymentprocessorTransaction>;
}