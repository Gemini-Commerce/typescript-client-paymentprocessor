import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { PaymentprocessorApiRequestFactory, PaymentprocessorApiResponseProcessor} from "../apis/PaymentprocessorApi";
export class ObservablePaymentprocessorApi {
    private requestFactory: PaymentprocessorApiRequestFactory;
    private responseProcessor: PaymentprocessorApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentprocessorApiRequestFactory,
        responseProcessor?: PaymentprocessorApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentprocessorApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentprocessorApiResponseProcessor();
    }

    /**
     * Authorize Payment
     * @param body 
     */
    public authorizePaymentWithHttpInfo(body: PaymentprocessorAuthorizePaymentRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorAuthorizePaymentResponse>> {
        const requestContextPromise = this.requestFactory.authorizePayment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authorizePaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Authorize Payment
     * @param body 
     */
    public authorizePayment(body: PaymentprocessorAuthorizePaymentRequest, _options?: Configuration): Observable<PaymentprocessorAuthorizePaymentResponse> {
        return this.authorizePaymentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorAuthorizePaymentResponse>) => apiResponse.data));
    }

    /**
     * Create Payment Method
     * @param body 
     */
    public createPaymentMethodWithHttpInfo(body: PaymentprocessorCreatePaymentMethodRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorPaymentMethod>> {
        const requestContextPromise = this.requestFactory.createPaymentMethod(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentMethodWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Payment Method
     * @param body 
     */
    public createPaymentMethod(body: PaymentprocessorCreatePaymentMethodRequest, _options?: Configuration): Observable<PaymentprocessorPaymentMethod> {
        return this.createPaymentMethodWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorPaymentMethod>) => apiResponse.data));
    }

    /**
     * Finalize Payment
     * @param body 
     */
    public finalizePaymentWithHttpInfo(body: PaymentprocessorFinalizePaymentRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorFinalizePaymentResponse>> {
        const requestContextPromise = this.requestFactory.finalizePayment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.finalizePaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Finalize Payment
     * @param body 
     */
    public finalizePayment(body: PaymentprocessorFinalizePaymentRequest, _options?: Configuration): Observable<PaymentprocessorFinalizePaymentResponse> {
        return this.finalizePaymentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorFinalizePaymentResponse>) => apiResponse.data));
    }

    /**
     * Get Available Payment Method
     * @param body 
     */
    public getAvailablePaymentMethodWithHttpInfo(body: PaymentprocessorGetAvailablePaymentMethodRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorPaymentMethod>> {
        const requestContextPromise = this.requestFactory.getAvailablePaymentMethod(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAvailablePaymentMethodWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Available Payment Method
     * @param body 
     */
    public getAvailablePaymentMethod(body: PaymentprocessorGetAvailablePaymentMethodRequest, _options?: Configuration): Observable<PaymentprocessorPaymentMethod> {
        return this.getAvailablePaymentMethodWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorPaymentMethod>) => apiResponse.data));
    }

    /**
     * Get Payment Method
     * @param body 
     */
    public getPaymentMethodWithHttpInfo(body: PaymentprocessorGetPaymentMethodRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorPaymentMethod>> {
        const requestContextPromise = this.requestFactory.getPaymentMethod(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentMethodWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Payment Method
     * @param body 
     */
    public getPaymentMethod(body: PaymentprocessorGetPaymentMethodRequest, _options?: Configuration): Observable<PaymentprocessorPaymentMethod> {
        return this.getPaymentMethodWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorPaymentMethod>) => apiResponse.data));
    }

    /**
     * Get Payment Method Configuration
     * @param body 
     */
    public getPaymentMethodConfigurationWithHttpInfo(body: PaymentprocessorGetPaymentMethodConfigurationRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorGetPaymentMethodConfigurationResponse>> {
        const requestContextPromise = this.requestFactory.getPaymentMethodConfiguration(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentMethodConfigurationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Payment Method Configuration
     * @param body 
     */
    public getPaymentMethodConfiguration(body: PaymentprocessorGetPaymentMethodConfigurationRequest, _options?: Configuration): Observable<PaymentprocessorGetPaymentMethodConfigurationResponse> {
        return this.getPaymentMethodConfigurationWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorGetPaymentMethodConfigurationResponse>) => apiResponse.data));
    }

    /**
     * Init Payment
     * @param body 
     */
    public initPaymentWithHttpInfo(body: PaymentprocessorInitPaymentRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorInitPaymentResponse>> {
        const requestContextPromise = this.requestFactory.initPayment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.initPaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Init Payment
     * @param body 
     */
    public initPayment(body: PaymentprocessorInitPaymentRequest, _options?: Configuration): Observable<PaymentprocessorInitPaymentResponse> {
        return this.initPaymentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorInitPaymentResponse>) => apiResponse.data));
    }

    /**
     * List Available Payment Methods
     * @param body 
     */
    public listAvailablePaymentMethodsWithHttpInfo(body: PaymentprocessorListAvailablePaymentMethodsRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorListAvailablePaymentMethodsResponse>> {
        const requestContextPromise = this.requestFactory.listAvailablePaymentMethods(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAvailablePaymentMethodsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Available Payment Methods
     * @param body 
     */
    public listAvailablePaymentMethods(body: PaymentprocessorListAvailablePaymentMethodsRequest, _options?: Configuration): Observable<PaymentprocessorListAvailablePaymentMethodsResponse> {
        return this.listAvailablePaymentMethodsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorListAvailablePaymentMethodsResponse>) => apiResponse.data));
    }

    /**
     * List Payment Methods
     * @param body 
     */
    public listPaymentMethodsWithHttpInfo(body: PaymentprocessorListPaymentMethodsRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorListPaymentMethodsResponse>> {
        const requestContextPromise = this.requestFactory.listPaymentMethods(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPaymentMethodsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Payment Methods
     * @param body 
     */
    public listPaymentMethods(body: PaymentprocessorListPaymentMethodsRequest, _options?: Configuration): Observable<PaymentprocessorListPaymentMethodsResponse> {
        return this.listPaymentMethodsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorListPaymentMethodsResponse>) => apiResponse.data));
    }

    /**
     * Perform Payment
     * @param body 
     */
    public performPaymentWithHttpInfo(body: PaymentprocessorPerformPaymentRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorPerformPaymentResponse>> {
        const requestContextPromise = this.requestFactory.performPayment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.performPaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Perform Payment
     * @param body 
     */
    public performPayment(body: PaymentprocessorPerformPaymentRequest, _options?: Configuration): Observable<PaymentprocessorPerformPaymentResponse> {
        return this.performPaymentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorPerformPaymentResponse>) => apiResponse.data));
    }

    /**
     * Perform Refund
     * @param body 
     */
    public performRefundWithHttpInfo(body: PaymentprocessorPerformRefundRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.performRefund(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.performRefundWithHttpInfo(rsp)));
            }));
    }

    /**
     * Perform Refund
     * @param body 
     */
    public performRefund(body: PaymentprocessorPerformRefundRequest, _options?: Configuration): Observable<any> {
        return this.performRefundWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update Payment
     * @param body 
     */
    public updatePaymentWithHttpInfo(body: PaymentprocessorUpdatePaymentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updatePayment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Payment
     * @param body 
     */
    public updatePayment(body: PaymentprocessorUpdatePaymentRequest, _options?: Configuration): Observable<any> {
        return this.updatePaymentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update Payment Method
     * @param body 
     */
    public updatePaymentMethodWithHttpInfo(body: PaymentprocessorUpdatePaymentMethodRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorPaymentMethod>> {
        const requestContextPromise = this.requestFactory.updatePaymentMethod(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePaymentMethodWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Payment Method
     * @param body 
     */
    public updatePaymentMethod(body: PaymentprocessorUpdatePaymentMethodRequest, _options?: Configuration): Observable<PaymentprocessorPaymentMethod> {
        return this.updatePaymentMethodWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorPaymentMethod>) => apiResponse.data));
    }

    /**
     * Void Payment
     * @param body 
     */
    public voidPaymentWithHttpInfo(body: PaymentprocessorVoidPaymentRequest, _options?: Configuration): Observable<HttpInfo<PaymentprocessorVoidPaymentResponse>> {
        const requestContextPromise = this.requestFactory.voidPayment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.voidPaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Void Payment
     * @param body 
     */
    public voidPayment(body: PaymentprocessorVoidPaymentRequest, _options?: Configuration): Observable<PaymentprocessorVoidPaymentResponse> {
        return this.voidPaymentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PaymentprocessorVoidPaymentResponse>) => apiResponse.data));
    }

}
