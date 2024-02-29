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

import { ObservablePaymentprocessorApi } from "./ObservableAPI";
import { PaymentprocessorApiRequestFactory, PaymentprocessorApiResponseProcessor} from "../apis/PaymentprocessorApi";

export interface PaymentprocessorApiAuthorizePaymentRequest {
    /**
     * 
     * @type PaymentprocessorAuthorizePaymentRequest
     * @memberof PaymentprocessorApiauthorizePayment
     */
    body: PaymentprocessorAuthorizePaymentRequest
}

export interface PaymentprocessorApiCreatePaymentMethodRequest {
    /**
     * 
     * @type PaymentprocessorCreatePaymentMethodRequest
     * @memberof PaymentprocessorApicreatePaymentMethod
     */
    body: PaymentprocessorCreatePaymentMethodRequest
}

export interface PaymentprocessorApiFinalizePaymentRequest {
    /**
     * 
     * @type PaymentprocessorFinalizePaymentRequest
     * @memberof PaymentprocessorApifinalizePayment
     */
    body: PaymentprocessorFinalizePaymentRequest
}

export interface PaymentprocessorApiGetAvailablePaymentMethodRequest {
    /**
     * 
     * @type PaymentprocessorGetAvailablePaymentMethodRequest
     * @memberof PaymentprocessorApigetAvailablePaymentMethod
     */
    body: PaymentprocessorGetAvailablePaymentMethodRequest
}

export interface PaymentprocessorApiGetPaymentMethodRequest {
    /**
     * 
     * @type PaymentprocessorGetPaymentMethodRequest
     * @memberof PaymentprocessorApigetPaymentMethod
     */
    body: PaymentprocessorGetPaymentMethodRequest
}

export interface PaymentprocessorApiGetPaymentMethodConfigurationRequest {
    /**
     * 
     * @type PaymentprocessorGetPaymentMethodConfigurationRequest
     * @memberof PaymentprocessorApigetPaymentMethodConfiguration
     */
    body: PaymentprocessorGetPaymentMethodConfigurationRequest
}

export interface PaymentprocessorApiInitPaymentRequest {
    /**
     * 
     * @type PaymentprocessorInitPaymentRequest
     * @memberof PaymentprocessorApiinitPayment
     */
    body: PaymentprocessorInitPaymentRequest
}

export interface PaymentprocessorApiListAvailablePaymentMethodsRequest {
    /**
     * 
     * @type PaymentprocessorListAvailablePaymentMethodsRequest
     * @memberof PaymentprocessorApilistAvailablePaymentMethods
     */
    body: PaymentprocessorListAvailablePaymentMethodsRequest
}

export interface PaymentprocessorApiListPaymentMethodsRequest {
    /**
     * 
     * @type PaymentprocessorListPaymentMethodsRequest
     * @memberof PaymentprocessorApilistPaymentMethods
     */
    body: PaymentprocessorListPaymentMethodsRequest
}

export interface PaymentprocessorApiPerformPaymentRequest {
    /**
     * 
     * @type PaymentprocessorPerformPaymentRequest
     * @memberof PaymentprocessorApiperformPayment
     */
    body: PaymentprocessorPerformPaymentRequest
}

export interface PaymentprocessorApiPerformRefundRequest {
    /**
     * 
     * @type PaymentprocessorPerformRefundRequest
     * @memberof PaymentprocessorApiperformRefund
     */
    body: PaymentprocessorPerformRefundRequest
}

export interface PaymentprocessorApiUpdatePaymentRequest {
    /**
     * 
     * @type PaymentprocessorUpdatePaymentRequest
     * @memberof PaymentprocessorApiupdatePayment
     */
    body: PaymentprocessorUpdatePaymentRequest
}

export interface PaymentprocessorApiUpdatePaymentMethodRequest {
    /**
     * 
     * @type PaymentprocessorUpdatePaymentMethodRequest
     * @memberof PaymentprocessorApiupdatePaymentMethod
     */
    body: PaymentprocessorUpdatePaymentMethodRequest
}

export interface PaymentprocessorApiVoidPaymentRequest {
    /**
     * 
     * @type PaymentprocessorVoidPaymentRequest
     * @memberof PaymentprocessorApivoidPayment
     */
    body: PaymentprocessorVoidPaymentRequest
}

export class ObjectPaymentprocessorApi {
    private api: ObservablePaymentprocessorApi

    public constructor(configuration: Configuration, requestFactory?: PaymentprocessorApiRequestFactory, responseProcessor?: PaymentprocessorApiResponseProcessor) {
        this.api = new ObservablePaymentprocessorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Authorize Payment
     * @param param the request object
     */
    public authorizePaymentWithHttpInfo(param: PaymentprocessorApiAuthorizePaymentRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorAuthorizePaymentResponse>> {
        return this.api.authorizePaymentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Authorize Payment
     * @param param the request object
     */
    public authorizePayment(param: PaymentprocessorApiAuthorizePaymentRequest, options?: Configuration): Promise<PaymentprocessorAuthorizePaymentResponse> {
        return this.api.authorizePayment(param.body,  options).toPromise();
    }

    /**
     * Create Payment Method
     * @param param the request object
     */
    public createPaymentMethodWithHttpInfo(param: PaymentprocessorApiCreatePaymentMethodRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorPaymentMethod>> {
        return this.api.createPaymentMethodWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Payment Method
     * @param param the request object
     */
    public createPaymentMethod(param: PaymentprocessorApiCreatePaymentMethodRequest, options?: Configuration): Promise<PaymentprocessorPaymentMethod> {
        return this.api.createPaymentMethod(param.body,  options).toPromise();
    }

    /**
     * Finalize Payment
     * @param param the request object
     */
    public finalizePaymentWithHttpInfo(param: PaymentprocessorApiFinalizePaymentRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorFinalizePaymentResponse>> {
        return this.api.finalizePaymentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Finalize Payment
     * @param param the request object
     */
    public finalizePayment(param: PaymentprocessorApiFinalizePaymentRequest, options?: Configuration): Promise<PaymentprocessorFinalizePaymentResponse> {
        return this.api.finalizePayment(param.body,  options).toPromise();
    }

    /**
     * Get Available Payment Method
     * @param param the request object
     */
    public getAvailablePaymentMethodWithHttpInfo(param: PaymentprocessorApiGetAvailablePaymentMethodRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorPaymentMethod>> {
        return this.api.getAvailablePaymentMethodWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Available Payment Method
     * @param param the request object
     */
    public getAvailablePaymentMethod(param: PaymentprocessorApiGetAvailablePaymentMethodRequest, options?: Configuration): Promise<PaymentprocessorPaymentMethod> {
        return this.api.getAvailablePaymentMethod(param.body,  options).toPromise();
    }

    /**
     * Get Payment Method
     * @param param the request object
     */
    public getPaymentMethodWithHttpInfo(param: PaymentprocessorApiGetPaymentMethodRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorPaymentMethod>> {
        return this.api.getPaymentMethodWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Payment Method
     * @param param the request object
     */
    public getPaymentMethod(param: PaymentprocessorApiGetPaymentMethodRequest, options?: Configuration): Promise<PaymentprocessorPaymentMethod> {
        return this.api.getPaymentMethod(param.body,  options).toPromise();
    }

    /**
     * Get Payment Method Configuration
     * @param param the request object
     */
    public getPaymentMethodConfigurationWithHttpInfo(param: PaymentprocessorApiGetPaymentMethodConfigurationRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorGetPaymentMethodConfigurationResponse>> {
        return this.api.getPaymentMethodConfigurationWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Payment Method Configuration
     * @param param the request object
     */
    public getPaymentMethodConfiguration(param: PaymentprocessorApiGetPaymentMethodConfigurationRequest, options?: Configuration): Promise<PaymentprocessorGetPaymentMethodConfigurationResponse> {
        return this.api.getPaymentMethodConfiguration(param.body,  options).toPromise();
    }

    /**
     * Init Payment
     * @param param the request object
     */
    public initPaymentWithHttpInfo(param: PaymentprocessorApiInitPaymentRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorInitPaymentResponse>> {
        return this.api.initPaymentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Init Payment
     * @param param the request object
     */
    public initPayment(param: PaymentprocessorApiInitPaymentRequest, options?: Configuration): Promise<PaymentprocessorInitPaymentResponse> {
        return this.api.initPayment(param.body,  options).toPromise();
    }

    /**
     * List Available Payment Methods
     * @param param the request object
     */
    public listAvailablePaymentMethodsWithHttpInfo(param: PaymentprocessorApiListAvailablePaymentMethodsRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorListAvailablePaymentMethodsResponse>> {
        return this.api.listAvailablePaymentMethodsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Available Payment Methods
     * @param param the request object
     */
    public listAvailablePaymentMethods(param: PaymentprocessorApiListAvailablePaymentMethodsRequest, options?: Configuration): Promise<PaymentprocessorListAvailablePaymentMethodsResponse> {
        return this.api.listAvailablePaymentMethods(param.body,  options).toPromise();
    }

    /**
     * List Payment Methods
     * @param param the request object
     */
    public listPaymentMethodsWithHttpInfo(param: PaymentprocessorApiListPaymentMethodsRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorListPaymentMethodsResponse>> {
        return this.api.listPaymentMethodsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Payment Methods
     * @param param the request object
     */
    public listPaymentMethods(param: PaymentprocessorApiListPaymentMethodsRequest, options?: Configuration): Promise<PaymentprocessorListPaymentMethodsResponse> {
        return this.api.listPaymentMethods(param.body,  options).toPromise();
    }

    /**
     * Perform Payment
     * @param param the request object
     */
    public performPaymentWithHttpInfo(param: PaymentprocessorApiPerformPaymentRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorPerformPaymentResponse>> {
        return this.api.performPaymentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Perform Payment
     * @param param the request object
     */
    public performPayment(param: PaymentprocessorApiPerformPaymentRequest, options?: Configuration): Promise<PaymentprocessorPerformPaymentResponse> {
        return this.api.performPayment(param.body,  options).toPromise();
    }

    /**
     * Perform Refund
     * @param param the request object
     */
    public performRefundWithHttpInfo(param: PaymentprocessorApiPerformRefundRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.performRefundWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Perform Refund
     * @param param the request object
     */
    public performRefund(param: PaymentprocessorApiPerformRefundRequest, options?: Configuration): Promise<any> {
        return this.api.performRefund(param.body,  options).toPromise();
    }

    /**
     * Update Payment
     * @param param the request object
     */
    public updatePaymentWithHttpInfo(param: PaymentprocessorApiUpdatePaymentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updatePaymentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update Payment
     * @param param the request object
     */
    public updatePayment(param: PaymentprocessorApiUpdatePaymentRequest, options?: Configuration): Promise<any> {
        return this.api.updatePayment(param.body,  options).toPromise();
    }

    /**
     * Update Payment Method
     * @param param the request object
     */
    public updatePaymentMethodWithHttpInfo(param: PaymentprocessorApiUpdatePaymentMethodRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorPaymentMethod>> {
        return this.api.updatePaymentMethodWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update Payment Method
     * @param param the request object
     */
    public updatePaymentMethod(param: PaymentprocessorApiUpdatePaymentMethodRequest, options?: Configuration): Promise<PaymentprocessorPaymentMethod> {
        return this.api.updatePaymentMethod(param.body,  options).toPromise();
    }

    /**
     * Void Payment
     * @param param the request object
     */
    public voidPaymentWithHttpInfo(param: PaymentprocessorApiVoidPaymentRequest, options?: Configuration): Promise<HttpInfo<PaymentprocessorVoidPaymentResponse>> {
        return this.api.voidPaymentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Void Payment
     * @param param the request object
     */
    public voidPayment(param: PaymentprocessorApiVoidPaymentRequest, options?: Configuration): Promise<PaymentprocessorVoidPaymentResponse> {
        return this.api.voidPayment(param.body,  options).toPromise();
    }

}
