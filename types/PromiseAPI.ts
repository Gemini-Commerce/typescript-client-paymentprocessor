import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AvailabilityContextCustomer } from '../models/AvailabilityContextCustomer';
import { ConditionAction } from '../models/ConditionAction';
import { PaymentContextOrderInfo } from '../models/PaymentContextOrderInfo';
import { PaymentMethodRestrictionConditionCondition } from '../models/PaymentMethodRestrictionConditionCondition';
import { PaymentprocessorAuthorizePaymentRequest } from '../models/PaymentprocessorAuthorizePaymentRequest';
import { PaymentprocessorAuthorizePaymentResponse } from '../models/PaymentprocessorAuthorizePaymentResponse';
import { PaymentprocessorAvailabilityContext } from '../models/PaymentprocessorAvailabilityContext';
import { PaymentprocessorAvailabilityContextPostalAddress } from '../models/PaymentprocessorAvailabilityContextPostalAddress';
import { PaymentprocessorCreatePaymentMethodRequest } from '../models/PaymentprocessorCreatePaymentMethodRequest';
import { PaymentprocessorCurrency } from '../models/PaymentprocessorCurrency';
import { PaymentprocessorFinalizePaymentRequest } from '../models/PaymentprocessorFinalizePaymentRequest';
import { PaymentprocessorFinalizePaymentResponse } from '../models/PaymentprocessorFinalizePaymentResponse';
import { PaymentprocessorGetAvailablePaymentMethodRequest } from '../models/PaymentprocessorGetAvailablePaymentMethodRequest';
import { PaymentprocessorGetPaymentMethodConfigurationRequest } from '../models/PaymentprocessorGetPaymentMethodConfigurationRequest';
import { PaymentprocessorGetPaymentMethodConfigurationResponse } from '../models/PaymentprocessorGetPaymentMethodConfigurationResponse';
import { PaymentprocessorGetPaymentMethodRequest } from '../models/PaymentprocessorGetPaymentMethodRequest';
import { PaymentprocessorInitPaymentRequest } from '../models/PaymentprocessorInitPaymentRequest';
import { PaymentprocessorInitPaymentResponse } from '../models/PaymentprocessorInitPaymentResponse';
import { PaymentprocessorItem } from '../models/PaymentprocessorItem';
import { PaymentprocessorListAvailablePaymentMethodsRequest } from '../models/PaymentprocessorListAvailablePaymentMethodsRequest';
import { PaymentprocessorListAvailablePaymentMethodsResponse } from '../models/PaymentprocessorListAvailablePaymentMethodsResponse';
import { PaymentprocessorListPaymentMethodsRequest } from '../models/PaymentprocessorListPaymentMethodsRequest';
import { PaymentprocessorListPaymentMethodsResponse } from '../models/PaymentprocessorListPaymentMethodsResponse';
import { PaymentprocessorLocalizedText } from '../models/PaymentprocessorLocalizedText';
import { PaymentprocessorMoney } from '../models/PaymentprocessorMoney';
import { PaymentprocessorPayment } from '../models/PaymentprocessorPayment';
import { PaymentprocessorPaymentContext } from '../models/PaymentprocessorPaymentContext';
import { PaymentprocessorPaymentMethod } from '../models/PaymentprocessorPaymentMethod';
import { PaymentprocessorPaymentMethodRestriction } from '../models/PaymentprocessorPaymentMethodRestriction';
import { PaymentprocessorPaymentMethodRestrictionCondition } from '../models/PaymentprocessorPaymentMethodRestrictionCondition';
import { PaymentprocessorPerformPaymentRequest } from '../models/PaymentprocessorPerformPaymentRequest';
import { PaymentprocessorPerformPaymentResponse } from '../models/PaymentprocessorPerformPaymentResponse';
import { PaymentprocessorPerformRefundRequest } from '../models/PaymentprocessorPerformRefundRequest';
import { PaymentprocessorPostalAddress } from '../models/PaymentprocessorPostalAddress';
import { PaymentprocessorTransaction } from '../models/PaymentprocessorTransaction';
import { PaymentprocessorTransactionType } from '../models/PaymentprocessorTransactionType';
import { PaymentprocessorUpdatePaymentMethodRequest } from '../models/PaymentprocessorUpdatePaymentMethodRequest';
import { PaymentprocessorUpdatePaymentRequest } from '../models/PaymentprocessorUpdatePaymentRequest';
import { PaymentprocessorVoidPaymentRequest } from '../models/PaymentprocessorVoidPaymentRequest';
import { PaymentprocessorVoidPaymentResponse } from '../models/PaymentprocessorVoidPaymentResponse';
import { ProtobufAny } from '../models/ProtobufAny';
import { ProtobufNullValue } from '../models/ProtobufNullValue';
import { RpcStatus } from '../models/RpcStatus';
import { ObservablePaymentprocessorApi } from './ObservableAPI';

import { PaymentprocessorApiRequestFactory, PaymentprocessorApiResponseProcessor} from "../apis/PaymentprocessorApi";
export class PromisePaymentprocessorApi {
    private api: ObservablePaymentprocessorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentprocessorApiRequestFactory,
        responseProcessor?: PaymentprocessorApiResponseProcessor
    ) {
        this.api = new ObservablePaymentprocessorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Authorize Payment
     * @param body 
     */
    public authorizePaymentWithHttpInfo(body: PaymentprocessorAuthorizePaymentRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorAuthorizePaymentResponse>> {
        const result = this.api.authorizePaymentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Authorize Payment
     * @param body 
     */
    public authorizePayment(body: PaymentprocessorAuthorizePaymentRequest, _options?: Configuration): Promise<PaymentprocessorAuthorizePaymentResponse> {
        const result = this.api.authorizePayment(body, _options);
        return result.toPromise();
    }

    /**
     * Create Payment Method
     * @param body 
     */
    public createPaymentMethodWithHttpInfo(body: PaymentprocessorCreatePaymentMethodRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorPaymentMethod>> {
        const result = this.api.createPaymentMethodWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Payment Method
     * @param body 
     */
    public createPaymentMethod(body: PaymentprocessorCreatePaymentMethodRequest, _options?: Configuration): Promise<PaymentprocessorPaymentMethod> {
        const result = this.api.createPaymentMethod(body, _options);
        return result.toPromise();
    }

    /**
     * Finalize Payment
     * @param body 
     */
    public finalizePaymentWithHttpInfo(body: PaymentprocessorFinalizePaymentRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorFinalizePaymentResponse>> {
        const result = this.api.finalizePaymentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Finalize Payment
     * @param body 
     */
    public finalizePayment(body: PaymentprocessorFinalizePaymentRequest, _options?: Configuration): Promise<PaymentprocessorFinalizePaymentResponse> {
        const result = this.api.finalizePayment(body, _options);
        return result.toPromise();
    }

    /**
     * Get Available Payment Method
     * @param body 
     */
    public getAvailablePaymentMethodWithHttpInfo(body: PaymentprocessorGetAvailablePaymentMethodRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorPaymentMethod>> {
        const result = this.api.getAvailablePaymentMethodWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Available Payment Method
     * @param body 
     */
    public getAvailablePaymentMethod(body: PaymentprocessorGetAvailablePaymentMethodRequest, _options?: Configuration): Promise<PaymentprocessorPaymentMethod> {
        const result = this.api.getAvailablePaymentMethod(body, _options);
        return result.toPromise();
    }

    /**
     * Get Payment Method
     * @param body 
     */
    public getPaymentMethodWithHttpInfo(body: PaymentprocessorGetPaymentMethodRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorPaymentMethod>> {
        const result = this.api.getPaymentMethodWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Payment Method
     * @param body 
     */
    public getPaymentMethod(body: PaymentprocessorGetPaymentMethodRequest, _options?: Configuration): Promise<PaymentprocessorPaymentMethod> {
        const result = this.api.getPaymentMethod(body, _options);
        return result.toPromise();
    }

    /**
     * Get Payment Method Configuration
     * @param body 
     */
    public getPaymentMethodConfigurationWithHttpInfo(body: PaymentprocessorGetPaymentMethodConfigurationRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorGetPaymentMethodConfigurationResponse>> {
        const result = this.api.getPaymentMethodConfigurationWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Payment Method Configuration
     * @param body 
     */
    public getPaymentMethodConfiguration(body: PaymentprocessorGetPaymentMethodConfigurationRequest, _options?: Configuration): Promise<PaymentprocessorGetPaymentMethodConfigurationResponse> {
        const result = this.api.getPaymentMethodConfiguration(body, _options);
        return result.toPromise();
    }

    /**
     * Init Payment
     * @param body 
     */
    public initPaymentWithHttpInfo(body: PaymentprocessorInitPaymentRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorInitPaymentResponse>> {
        const result = this.api.initPaymentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Init Payment
     * @param body 
     */
    public initPayment(body: PaymentprocessorInitPaymentRequest, _options?: Configuration): Promise<PaymentprocessorInitPaymentResponse> {
        const result = this.api.initPayment(body, _options);
        return result.toPromise();
    }

    /**
     * List Available Payment Methods
     * @param body 
     */
    public listAvailablePaymentMethodsWithHttpInfo(body: PaymentprocessorListAvailablePaymentMethodsRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorListAvailablePaymentMethodsResponse>> {
        const result = this.api.listAvailablePaymentMethodsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Available Payment Methods
     * @param body 
     */
    public listAvailablePaymentMethods(body: PaymentprocessorListAvailablePaymentMethodsRequest, _options?: Configuration): Promise<PaymentprocessorListAvailablePaymentMethodsResponse> {
        const result = this.api.listAvailablePaymentMethods(body, _options);
        return result.toPromise();
    }

    /**
     * List Payment Methods
     * @param body 
     */
    public listPaymentMethodsWithHttpInfo(body: PaymentprocessorListPaymentMethodsRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorListPaymentMethodsResponse>> {
        const result = this.api.listPaymentMethodsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Payment Methods
     * @param body 
     */
    public listPaymentMethods(body: PaymentprocessorListPaymentMethodsRequest, _options?: Configuration): Promise<PaymentprocessorListPaymentMethodsResponse> {
        const result = this.api.listPaymentMethods(body, _options);
        return result.toPromise();
    }

    /**
     * Perform Payment
     * @param body 
     */
    public performPaymentWithHttpInfo(body: PaymentprocessorPerformPaymentRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorPerformPaymentResponse>> {
        const result = this.api.performPaymentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Perform Payment
     * @param body 
     */
    public performPayment(body: PaymentprocessorPerformPaymentRequest, _options?: Configuration): Promise<PaymentprocessorPerformPaymentResponse> {
        const result = this.api.performPayment(body, _options);
        return result.toPromise();
    }

    /**
     * Perform Refund
     * @param body 
     */
    public performRefundWithHttpInfo(body: PaymentprocessorPerformRefundRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.performRefundWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Perform Refund
     * @param body 
     */
    public performRefund(body: PaymentprocessorPerformRefundRequest, _options?: Configuration): Promise<any> {
        const result = this.api.performRefund(body, _options);
        return result.toPromise();
    }

    /**
     * Update Payment
     * @param body 
     */
    public updatePaymentWithHttpInfo(body: PaymentprocessorUpdatePaymentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updatePaymentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update Payment
     * @param body 
     */
    public updatePayment(body: PaymentprocessorUpdatePaymentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.updatePayment(body, _options);
        return result.toPromise();
    }

    /**
     * Update Payment Method
     * @param body 
     */
    public updatePaymentMethodWithHttpInfo(body: PaymentprocessorUpdatePaymentMethodRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorPaymentMethod>> {
        const result = this.api.updatePaymentMethodWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update Payment Method
     * @param body 
     */
    public updatePaymentMethod(body: PaymentprocessorUpdatePaymentMethodRequest, _options?: Configuration): Promise<PaymentprocessorPaymentMethod> {
        const result = this.api.updatePaymentMethod(body, _options);
        return result.toPromise();
    }

    /**
     * Void Payment
     * @param body 
     */
    public voidPaymentWithHttpInfo(body: PaymentprocessorVoidPaymentRequest, _options?: Configuration): Promise<HttpInfo<PaymentprocessorVoidPaymentResponse>> {
        const result = this.api.voidPaymentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Void Payment
     * @param body 
     */
    public voidPayment(body: PaymentprocessorVoidPaymentRequest, _options?: Configuration): Promise<PaymentprocessorVoidPaymentResponse> {
        const result = this.api.voidPayment(body, _options);
        return result.toPromise();
    }


}



