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


import * as runtime from '../runtime';
import type {
  PaymentprocessorAuthorizePaymentRequest,
  PaymentprocessorAuthorizePaymentResponse,
  PaymentprocessorCreatePaymentMethodRequest,
  PaymentprocessorFinalizePaymentRequest,
  PaymentprocessorFinalizePaymentResponse,
  PaymentprocessorGetAvailablePaymentMethodRequest,
  PaymentprocessorGetPaymentMethodConfigurationRequest,
  PaymentprocessorGetPaymentMethodConfigurationResponse,
  PaymentprocessorGetPaymentMethodRequest,
  PaymentprocessorInitPaymentRequest,
  PaymentprocessorInitPaymentResponse,
  PaymentprocessorListAvailablePaymentMethodsRequest,
  PaymentprocessorListAvailablePaymentMethodsResponse,
  PaymentprocessorListPaymentMethodsRequest,
  PaymentprocessorListPaymentMethodsResponse,
  PaymentprocessorPaymentMethod,
  PaymentprocessorPerformPaymentRequest,
  PaymentprocessorPerformPaymentResponse,
  PaymentprocessorPerformRefundRequest,
  PaymentprocessorUpdatePaymentMethodRequest,
  PaymentprocessorUpdatePaymentRequest,
  PaymentprocessorVoidPaymentRequest,
  PaymentprocessorVoidPaymentResponse,
  RpcStatus,
} from '../models/index';
import {
    PaymentprocessorAuthorizePaymentRequestFromJSON,
    PaymentprocessorAuthorizePaymentRequestToJSON,
    PaymentprocessorAuthorizePaymentResponseFromJSON,
    PaymentprocessorAuthorizePaymentResponseToJSON,
    PaymentprocessorCreatePaymentMethodRequestFromJSON,
    PaymentprocessorCreatePaymentMethodRequestToJSON,
    PaymentprocessorFinalizePaymentRequestFromJSON,
    PaymentprocessorFinalizePaymentRequestToJSON,
    PaymentprocessorFinalizePaymentResponseFromJSON,
    PaymentprocessorFinalizePaymentResponseToJSON,
    PaymentprocessorGetAvailablePaymentMethodRequestFromJSON,
    PaymentprocessorGetAvailablePaymentMethodRequestToJSON,
    PaymentprocessorGetPaymentMethodConfigurationRequestFromJSON,
    PaymentprocessorGetPaymentMethodConfigurationRequestToJSON,
    PaymentprocessorGetPaymentMethodConfigurationResponseFromJSON,
    PaymentprocessorGetPaymentMethodConfigurationResponseToJSON,
    PaymentprocessorGetPaymentMethodRequestFromJSON,
    PaymentprocessorGetPaymentMethodRequestToJSON,
    PaymentprocessorInitPaymentRequestFromJSON,
    PaymentprocessorInitPaymentRequestToJSON,
    PaymentprocessorInitPaymentResponseFromJSON,
    PaymentprocessorInitPaymentResponseToJSON,
    PaymentprocessorListAvailablePaymentMethodsRequestFromJSON,
    PaymentprocessorListAvailablePaymentMethodsRequestToJSON,
    PaymentprocessorListAvailablePaymentMethodsResponseFromJSON,
    PaymentprocessorListAvailablePaymentMethodsResponseToJSON,
    PaymentprocessorListPaymentMethodsRequestFromJSON,
    PaymentprocessorListPaymentMethodsRequestToJSON,
    PaymentprocessorListPaymentMethodsResponseFromJSON,
    PaymentprocessorListPaymentMethodsResponseToJSON,
    PaymentprocessorPaymentMethodFromJSON,
    PaymentprocessorPaymentMethodToJSON,
    PaymentprocessorPerformPaymentRequestFromJSON,
    PaymentprocessorPerformPaymentRequestToJSON,
    PaymentprocessorPerformPaymentResponseFromJSON,
    PaymentprocessorPerformPaymentResponseToJSON,
    PaymentprocessorPerformRefundRequestFromJSON,
    PaymentprocessorPerformRefundRequestToJSON,
    PaymentprocessorUpdatePaymentMethodRequestFromJSON,
    PaymentprocessorUpdatePaymentMethodRequestToJSON,
    PaymentprocessorUpdatePaymentRequestFromJSON,
    PaymentprocessorUpdatePaymentRequestToJSON,
    PaymentprocessorVoidPaymentRequestFromJSON,
    PaymentprocessorVoidPaymentRequestToJSON,
    PaymentprocessorVoidPaymentResponseFromJSON,
    PaymentprocessorVoidPaymentResponseToJSON,
    RpcStatusFromJSON,
    RpcStatusToJSON,
} from '../models/index';

export interface AuthorizePaymentRequest {
    body: PaymentprocessorAuthorizePaymentRequest;
}

export interface CreatePaymentMethodRequest {
    body: PaymentprocessorCreatePaymentMethodRequest;
}

export interface FinalizePaymentRequest {
    body: PaymentprocessorFinalizePaymentRequest;
}

export interface GetAvailablePaymentMethodRequest {
    body: PaymentprocessorGetAvailablePaymentMethodRequest;
}

export interface GetPaymentMethodRequest {
    body: PaymentprocessorGetPaymentMethodRequest;
}

export interface GetPaymentMethodConfigurationRequest {
    body: PaymentprocessorGetPaymentMethodConfigurationRequest;
}

export interface InitPaymentRequest {
    body: PaymentprocessorInitPaymentRequest;
}

export interface ListAvailablePaymentMethodsRequest {
    body: PaymentprocessorListAvailablePaymentMethodsRequest;
}

export interface ListPaymentMethodsRequest {
    body: PaymentprocessorListPaymentMethodsRequest;
}

export interface PerformPaymentRequest {
    body: PaymentprocessorPerformPaymentRequest;
}

export interface PerformRefundRequest {
    body: PaymentprocessorPerformRefundRequest;
}

export interface UpdatePaymentRequest {
    body: PaymentprocessorUpdatePaymentRequest;
}

export interface UpdatePaymentMethodRequest {
    body: PaymentprocessorUpdatePaymentMethodRequest;
}

export interface VoidPaymentRequest {
    body: PaymentprocessorVoidPaymentRequest;
}

/**
 * 
 */
export class PaymentprocessorApi extends runtime.BaseAPI {

    /**
     * Authorize Payment
     */
    async authorizePaymentRaw(requestParameters: AuthorizePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorAuthorizePaymentResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling authorizePayment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/AuthorizePayment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorAuthorizePaymentRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorAuthorizePaymentResponseFromJSON(jsonValue));
    }

    /**
     * Authorize Payment
     */
    async authorizePayment(requestParameters: AuthorizePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorAuthorizePaymentResponse> {
        const response = await this.authorizePaymentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Payment Method
     */
    async createPaymentMethodRaw(requestParameters: CreatePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorPaymentMethod>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createPaymentMethod.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/CreatePaymentMethod`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorCreatePaymentMethodRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorPaymentMethodFromJSON(jsonValue));
    }

    /**
     * Create Payment Method
     */
    async createPaymentMethod(requestParameters: CreatePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorPaymentMethod> {
        const response = await this.createPaymentMethodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Finalize Payment
     */
    async finalizePaymentRaw(requestParameters: FinalizePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorFinalizePaymentResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling finalizePayment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/FinalizePayment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorFinalizePaymentRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorFinalizePaymentResponseFromJSON(jsonValue));
    }

    /**
     * Finalize Payment
     */
    async finalizePayment(requestParameters: FinalizePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorFinalizePaymentResponse> {
        const response = await this.finalizePaymentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Available Payment Method
     */
    async getAvailablePaymentMethodRaw(requestParameters: GetAvailablePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorPaymentMethod>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling getAvailablePaymentMethod.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/GetAvailablePaymentMethod`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorGetAvailablePaymentMethodRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorPaymentMethodFromJSON(jsonValue));
    }

    /**
     * Get Available Payment Method
     */
    async getAvailablePaymentMethod(requestParameters: GetAvailablePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorPaymentMethod> {
        const response = await this.getAvailablePaymentMethodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Payment Method
     */
    async getPaymentMethodRaw(requestParameters: GetPaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorPaymentMethod>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling getPaymentMethod.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/GetPaymentMethod`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorGetPaymentMethodRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorPaymentMethodFromJSON(jsonValue));
    }

    /**
     * Get Payment Method
     */
    async getPaymentMethod(requestParameters: GetPaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorPaymentMethod> {
        const response = await this.getPaymentMethodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Payment Method Configuration
     */
    async getPaymentMethodConfigurationRaw(requestParameters: GetPaymentMethodConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorGetPaymentMethodConfigurationResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling getPaymentMethodConfiguration.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/GetPaymentMethodConfiguration`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorGetPaymentMethodConfigurationRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorGetPaymentMethodConfigurationResponseFromJSON(jsonValue));
    }

    /**
     * Get Payment Method Configuration
     */
    async getPaymentMethodConfiguration(requestParameters: GetPaymentMethodConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorGetPaymentMethodConfigurationResponse> {
        const response = await this.getPaymentMethodConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Init Payment
     */
    async initPaymentRaw(requestParameters: InitPaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorInitPaymentResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling initPayment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/InitPayment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorInitPaymentRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorInitPaymentResponseFromJSON(jsonValue));
    }

    /**
     * Init Payment
     */
    async initPayment(requestParameters: InitPaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorInitPaymentResponse> {
        const response = await this.initPaymentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Available Payment Methods
     */
    async listAvailablePaymentMethodsRaw(requestParameters: ListAvailablePaymentMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorListAvailablePaymentMethodsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling listAvailablePaymentMethods.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/ListAvailablePaymentMethods`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorListAvailablePaymentMethodsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorListAvailablePaymentMethodsResponseFromJSON(jsonValue));
    }

    /**
     * List Available Payment Methods
     */
    async listAvailablePaymentMethods(requestParameters: ListAvailablePaymentMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorListAvailablePaymentMethodsResponse> {
        const response = await this.listAvailablePaymentMethodsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Payment Methods
     */
    async listPaymentMethodsRaw(requestParameters: ListPaymentMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorListPaymentMethodsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling listPaymentMethods.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/ListPaymentMethods`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorListPaymentMethodsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorListPaymentMethodsResponseFromJSON(jsonValue));
    }

    /**
     * List Payment Methods
     */
    async listPaymentMethods(requestParameters: ListPaymentMethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorListPaymentMethodsResponse> {
        const response = await this.listPaymentMethodsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Perform Payment
     */
    async performPaymentRaw(requestParameters: PerformPaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorPerformPaymentResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling performPayment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/PerformPayment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorPerformPaymentRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorPerformPaymentResponseFromJSON(jsonValue));
    }

    /**
     * Perform Payment
     */
    async performPayment(requestParameters: PerformPaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorPerformPaymentResponse> {
        const response = await this.performPaymentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Perform Refund
     */
    async performRefundRaw(requestParameters: PerformRefundRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling performRefund.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/PerformRefund`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorPerformRefundRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Perform Refund
     */
    async performRefund(requestParameters: PerformRefundRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.performRefundRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Payment
     */
    async updatePaymentRaw(requestParameters: UpdatePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updatePayment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/UpdatePayment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorUpdatePaymentRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update Payment
     */
    async updatePayment(requestParameters: UpdatePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.updatePaymentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Payment Method
     */
    async updatePaymentMethodRaw(requestParameters: UpdatePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorPaymentMethod>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updatePaymentMethod.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/UpdatePaymentMethod`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorUpdatePaymentMethodRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorPaymentMethodFromJSON(jsonValue));
    }

    /**
     * Update Payment Method
     */
    async updatePaymentMethod(requestParameters: UpdatePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorPaymentMethod> {
        const response = await this.updatePaymentMethodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Void Payment
     */
    async voidPaymentRaw(requestParameters: VoidPaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentprocessorVoidPaymentResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling voidPayment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/paymentprocessor.Paymentprocessor/VoidPayment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentprocessorVoidPaymentRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentprocessorVoidPaymentResponseFromJSON(jsonValue));
    }

    /**
     * Void Payment
     */
    async voidPayment(requestParameters: VoidPaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentprocessorVoidPaymentResponse> {
        const response = await this.voidPaymentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}