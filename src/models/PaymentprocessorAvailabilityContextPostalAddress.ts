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
 * @interface PaymentprocessorAvailabilityContextPostalAddress
 */
export interface PaymentprocessorAvailabilityContextPostalAddress {
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorAvailabilityContextPostalAddress
     */
    'regionCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorAvailabilityContextPostalAddress
     */
    'postalCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorAvailabilityContextPostalAddress
     */
    'firstname'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentprocessorAvailabilityContextPostalAddress
     */
    'lastname'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PaymentprocessorAvailabilityContextPostalAddress
     */
    'addressLines'?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof PaymentprocessorAvailabilityContextPostalAddress
     */
    'additionalInfo'?: object;
}