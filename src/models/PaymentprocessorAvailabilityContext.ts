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
 * @interface PaymentprocessorAvailabilityContext
 */
export interface PaymentprocessorAvailabilityContext {
    /**
     * 
     * @type {PaymentprocessorAvailabilityContextPostalAddress}
     * @memberof PaymentprocessorAvailabilityContext
     */
    'shippingAddress'?: PaymentprocessorAvailabilityContextPostalAddress;
    /**
     * 
     * @type {PaymentprocessorAvailabilityContextPostalAddress}
     * @memberof PaymentprocessorAvailabilityContext
     */
    'billingAddress'?: PaymentprocessorAvailabilityContextPostalAddress;
    /**
     * 
     * @type {AvailabilityContextCustomer}
     * @memberof PaymentprocessorAvailabilityContext
     */
    'customer'?: AvailabilityContextCustomer;
}
