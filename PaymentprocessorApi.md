# .PaymentprocessorApi

All URIs are relative to *https://payment-processor.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizePayment**](PaymentprocessorApi.md#authorizePayment) | **POST** /paymentprocessor.Paymentprocessor/AuthorizePayment | Authorize Payment
[**createPaymentMethod**](PaymentprocessorApi.md#createPaymentMethod) | **POST** /paymentprocessor.Paymentprocessor/CreatePaymentMethod | Create Payment Method
[**finalizePayment**](PaymentprocessorApi.md#finalizePayment) | **POST** /paymentprocessor.Paymentprocessor/FinalizePayment | Finalize Payment
[**getAvailablePaymentMethod**](PaymentprocessorApi.md#getAvailablePaymentMethod) | **POST** /paymentprocessor.Paymentprocessor/GetAvailablePaymentMethod | Get Available Payment Method
[**getPaymentMethod**](PaymentprocessorApi.md#getPaymentMethod) | **POST** /paymentprocessor.Paymentprocessor/GetPaymentMethod | Get Payment Method
[**getPaymentMethodConfiguration**](PaymentprocessorApi.md#getPaymentMethodConfiguration) | **POST** /paymentprocessor.Paymentprocessor/GetPaymentMethodConfiguration | Get Payment Method Configuration
[**initPayment**](PaymentprocessorApi.md#initPayment) | **POST** /paymentprocessor.Paymentprocessor/InitPayment | Init Payment
[**listAvailablePaymentMethods**](PaymentprocessorApi.md#listAvailablePaymentMethods) | **POST** /paymentprocessor.Paymentprocessor/ListAvailablePaymentMethods | List Available Payment Methods
[**listPaymentMethods**](PaymentprocessorApi.md#listPaymentMethods) | **POST** /paymentprocessor.Paymentprocessor/ListPaymentMethods | List Payment Methods
[**performPayment**](PaymentprocessorApi.md#performPayment) | **POST** /paymentprocessor.Paymentprocessor/PerformPayment | Perform Payment
[**performRefund**](PaymentprocessorApi.md#performRefund) | **POST** /paymentprocessor.Paymentprocessor/PerformRefund | Perform Refund
[**updatePayment**](PaymentprocessorApi.md#updatePayment) | **POST** /paymentprocessor.Paymentprocessor/UpdatePayment | Update Payment
[**updatePaymentMethod**](PaymentprocessorApi.md#updatePaymentMethod) | **POST** /paymentprocessor.Paymentprocessor/UpdatePaymentMethod | Update Payment Method
[**voidPayment**](PaymentprocessorApi.md#voidPayment) | **POST** /paymentprocessor.Paymentprocessor/VoidPayment | Void Payment


# **authorizePayment**
> PaymentprocessorAuthorizePaymentResponse authorizePayment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiAuthorizePaymentRequest = {
  // PaymentprocessorAuthorizePaymentRequest
  body: {
    tenantId: "tenantId_example",
    context: {
      billingAddress: {
        revision: 1,
        regionCode: "regionCode_example",
        languageCode: "languageCode_example",
        postalCode: "postalCode_example",
        sortingCode: "sortingCode_example",
        administrativeArea: "administrativeArea_example",
        locality: "locality_example",
        sublocality: "sublocality_example",
        addressLines: [
          "addressLines_example",
        ],
        recipients: [
          "recipients_example",
        ],
        organization: "organization_example",
        phoneNumber: "phoneNumber_example",
        additionalInfo: {},
      },
      shippingAddress: {
        revision: 1,
        regionCode: "regionCode_example",
        languageCode: "languageCode_example",
        postalCode: "postalCode_example",
        sortingCode: "sortingCode_example",
        administrativeArea: "administrativeArea_example",
        locality: "locality_example",
        sublocality: "sublocality_example",
        addressLines: [
          "addressLines_example",
        ],
        recipients: [
          "recipients_example",
        ],
        organization: "organization_example",
        phoneNumber: "phoneNumber_example",
        additionalInfo: {},
      },
      orderInfo: {
        number: "number_example",
        grn: "grn_example",
        items: [
          {
            id: "id_example",
            productGrn: "productGrn_example",
            qtyOrdered: 1,
            qtyCommitted: 1,
            unitSalePrice: {
              units: "units_example",
              micros: 1,
            },
            unitListPrice: {
              units: "units_example",
              micros: 1,
            },
            unitBasePrice: {
              units: "units_example",
              micros: 1,
            },
            unitVatAmount: {
              units: "units_example",
              micros: 1,
            },
            rowSalePrice: {
              units: "units_example",
              micros: 1,
            },
            rowListPrice: {
              units: "units_example",
              micros: 1,
            },
            rowVatAmount: {
              units: "units_example",
              micros: 1,
            },
            discountAmount: {
              units: "units_example",
              micros: 1,
            },
            rowBasePrice: {
              units: "units_example",
              micros: 1,
            },
            vatPercentage: 3.14,
            vatInaccurate: true,
            vatCalculated: true,
            productName: "productName_example",
            productCode: "productCode_example",
            productSku: "productSku_example",
            productOptions: "productOptions_example",
            productImg: "productImg_example",
            productData: "productData_example",
            shipmentInfoReference: "shipmentInfoReference_example",
            promotionGrn: [
              "promotionGrn_example",
            ],
            productIsVirtual: true,
          },
        ],
      },
    },
    code: "code_example",
    amount: {
      units: "units_example",
      micros: 1,
    },
    currency: "XXX",
    additionalInfo: "additionalInfo_example",
  },
};

apiInstance.authorizePayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorAuthorizePaymentRequest**|  |


### Return type

**PaymentprocessorAuthorizePaymentResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPaymentMethod**
> PaymentprocessorPaymentMethod createPaymentMethod(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiCreatePaymentMethodRequest = {
  // PaymentprocessorCreatePaymentMethodRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    title: {
      value: {
        "key": "key_example",
      },
    },
    label: {
      value: {
        "key": "key_example",
      },
    },
    enabled: true,
    amount: {
      units: "units_example",
      micros: 1,
    },
    currency: "XXX",
    configuration: {},
    isUpfront: true,
    description: {
      value: {
        "key": "key_example",
      },
    },
    restrictions: [
      {
        conditions: [
          {
            contextPath: "contextPath_example",
            action: "DISALLOW",
            condition: "IN",
            values: [
              "values_example",
            ],
          },
        ],
      },
    ],
  },
};

apiInstance.createPaymentMethod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorCreatePaymentMethodRequest**|  |


### Return type

**PaymentprocessorPaymentMethod**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **finalizePayment**
> PaymentprocessorFinalizePaymentResponse finalizePayment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiFinalizePaymentRequest = {
  // PaymentprocessorFinalizePaymentRequest
  body: {
    tenantId: "tenantId_example",
    paymentId: "paymentId_example",
    context: {
      billingAddress: {
        revision: 1,
        regionCode: "regionCode_example",
        languageCode: "languageCode_example",
        postalCode: "postalCode_example",
        sortingCode: "sortingCode_example",
        administrativeArea: "administrativeArea_example",
        locality: "locality_example",
        sublocality: "sublocality_example",
        addressLines: [
          "addressLines_example",
        ],
        recipients: [
          "recipients_example",
        ],
        organization: "organization_example",
        phoneNumber: "phoneNumber_example",
        additionalInfo: {},
      },
      shippingAddress: {
        revision: 1,
        regionCode: "regionCode_example",
        languageCode: "languageCode_example",
        postalCode: "postalCode_example",
        sortingCode: "sortingCode_example",
        administrativeArea: "administrativeArea_example",
        locality: "locality_example",
        sublocality: "sublocality_example",
        addressLines: [
          "addressLines_example",
        ],
        recipients: [
          "recipients_example",
        ],
        organization: "organization_example",
        phoneNumber: "phoneNumber_example",
        additionalInfo: {},
      },
      orderInfo: {
        number: "number_example",
        grn: "grn_example",
        items: [
          {
            id: "id_example",
            productGrn: "productGrn_example",
            qtyOrdered: 1,
            qtyCommitted: 1,
            unitSalePrice: {
              units: "units_example",
              micros: 1,
            },
            unitListPrice: {
              units: "units_example",
              micros: 1,
            },
            unitBasePrice: {
              units: "units_example",
              micros: 1,
            },
            unitVatAmount: {
              units: "units_example",
              micros: 1,
            },
            rowSalePrice: {
              units: "units_example",
              micros: 1,
            },
            rowListPrice: {
              units: "units_example",
              micros: 1,
            },
            rowVatAmount: {
              units: "units_example",
              micros: 1,
            },
            discountAmount: {
              units: "units_example",
              micros: 1,
            },
            rowBasePrice: {
              units: "units_example",
              micros: 1,
            },
            vatPercentage: 3.14,
            vatInaccurate: true,
            vatCalculated: true,
            productName: "productName_example",
            productCode: "productCode_example",
            productSku: "productSku_example",
            productOptions: "productOptions_example",
            productImg: "productImg_example",
            productData: "productData_example",
            shipmentInfoReference: "shipmentInfoReference_example",
            promotionGrn: [
              "promotionGrn_example",
            ],
            productIsVirtual: true,
          },
        ],
      },
    },
    code: "code_example",
    amount: {
      units: "units_example",
      micros: 1,
    },
    currency: "XXX",
    additionalInfo: "additionalInfo_example",
    transactions: [
      {
        paymentId: "paymentId_example",
        id: "id_example",
        type: "UNKNOWN",
        additionalInfo: "additionalInfo_example",
        childTransactions: [],
      },
    ],
  },
};

apiInstance.finalizePayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorFinalizePaymentRequest**|  |


### Return type

**PaymentprocessorFinalizePaymentResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAvailablePaymentMethod**
> PaymentprocessorPaymentMethod getAvailablePaymentMethod(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiGetAvailablePaymentMethodRequest = {
  // PaymentprocessorGetAvailablePaymentMethodRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    context: {
      shippingAddress: {
        regionCode: "regionCode_example",
        postalCode: "postalCode_example",
        firstname: "firstname_example",
        lastname: "lastname_example",
        addressLines: [
          "addressLines_example",
        ],
        additionalInfo: {},
      },
      billingAddress: {
        regionCode: "regionCode_example",
        postalCode: "postalCode_example",
        firstname: "firstname_example",
        lastname: "lastname_example",
        addressLines: [
          "addressLines_example",
        ],
        additionalInfo: {},
      },
      customer: {
        segments: [
          "segments_example",
        ],
        email: "email_example",
      },
    },
    authenticateMethod: true,
  },
};

apiInstance.getAvailablePaymentMethod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorGetAvailablePaymentMethodRequest**|  |


### Return type

**PaymentprocessorPaymentMethod**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPaymentMethod**
> PaymentprocessorPaymentMethod getPaymentMethod(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiGetPaymentMethodRequest = {
  // PaymentprocessorGetPaymentMethodRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    authenticateMethod: true,
  },
};

apiInstance.getPaymentMethod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorGetPaymentMethodRequest**|  |


### Return type

**PaymentprocessorPaymentMethod**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPaymentMethodConfiguration**
> PaymentprocessorGetPaymentMethodConfigurationResponse getPaymentMethodConfiguration(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiGetPaymentMethodConfigurationRequest = {
  // PaymentprocessorGetPaymentMethodConfigurationRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.getPaymentMethodConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorGetPaymentMethodConfigurationRequest**|  |


### Return type

**PaymentprocessorGetPaymentMethodConfigurationResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **initPayment**
> PaymentprocessorInitPaymentResponse initPayment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiInitPaymentRequest = {
  // PaymentprocessorInitPaymentRequest
  body: {
    tenantId: "tenantId_example",
    context: {
      billingAddress: {
        revision: 1,
        regionCode: "regionCode_example",
        languageCode: "languageCode_example",
        postalCode: "postalCode_example",
        sortingCode: "sortingCode_example",
        administrativeArea: "administrativeArea_example",
        locality: "locality_example",
        sublocality: "sublocality_example",
        addressLines: [
          "addressLines_example",
        ],
        recipients: [
          "recipients_example",
        ],
        organization: "organization_example",
        phoneNumber: "phoneNumber_example",
        additionalInfo: {},
      },
      shippingAddress: {
        revision: 1,
        regionCode: "regionCode_example",
        languageCode: "languageCode_example",
        postalCode: "postalCode_example",
        sortingCode: "sortingCode_example",
        administrativeArea: "administrativeArea_example",
        locality: "locality_example",
        sublocality: "sublocality_example",
        addressLines: [
          "addressLines_example",
        ],
        recipients: [
          "recipients_example",
        ],
        organization: "organization_example",
        phoneNumber: "phoneNumber_example",
        additionalInfo: {},
      },
      orderInfo: {
        number: "number_example",
        grn: "grn_example",
        items: [
          {
            id: "id_example",
            productGrn: "productGrn_example",
            qtyOrdered: 1,
            qtyCommitted: 1,
            unitSalePrice: {
              units: "units_example",
              micros: 1,
            },
            unitListPrice: {
              units: "units_example",
              micros: 1,
            },
            unitBasePrice: {
              units: "units_example",
              micros: 1,
            },
            unitVatAmount: {
              units: "units_example",
              micros: 1,
            },
            rowSalePrice: {
              units: "units_example",
              micros: 1,
            },
            rowListPrice: {
              units: "units_example",
              micros: 1,
            },
            rowVatAmount: {
              units: "units_example",
              micros: 1,
            },
            discountAmount: {
              units: "units_example",
              micros: 1,
            },
            rowBasePrice: {
              units: "units_example",
              micros: 1,
            },
            vatPercentage: 3.14,
            vatInaccurate: true,
            vatCalculated: true,
            productName: "productName_example",
            productCode: "productCode_example",
            productSku: "productSku_example",
            productOptions: "productOptions_example",
            productImg: "productImg_example",
            productData: "productData_example",
            shipmentInfoReference: "shipmentInfoReference_example",
            promotionGrn: [
              "promotionGrn_example",
            ],
            productIsVirtual: true,
          },
        ],
      },
    },
    code: "code_example",
    amount: {
      units: "units_example",
      micros: 1,
    },
    currency: "XXX",
    additionalInfo: "additionalInfo_example",
  },
};

apiInstance.initPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorInitPaymentRequest**|  |


### Return type

**PaymentprocessorInitPaymentResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAvailablePaymentMethods**
> PaymentprocessorListAvailablePaymentMethodsResponse listAvailablePaymentMethods(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiListAvailablePaymentMethodsRequest = {
  // PaymentprocessorListAvailablePaymentMethodsRequest
  body: {
    tenantId: "tenantId_example",
    context: {
      shippingAddress: {
        regionCode: "regionCode_example",
        postalCode: "postalCode_example",
        firstname: "firstname_example",
        lastname: "lastname_example",
        addressLines: [
          "addressLines_example",
        ],
        additionalInfo: {},
      },
      billingAddress: {
        regionCode: "regionCode_example",
        postalCode: "postalCode_example",
        firstname: "firstname_example",
        lastname: "lastname_example",
        addressLines: [
          "addressLines_example",
        ],
        additionalInfo: {},
      },
      customer: {
        segments: [
          "segments_example",
        ],
        email: "email_example",
      },
    },
    authenticateMethods: true,
  },
};

apiInstance.listAvailablePaymentMethods(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorListAvailablePaymentMethodsRequest**|  |


### Return type

**PaymentprocessorListAvailablePaymentMethodsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPaymentMethods**
> PaymentprocessorListPaymentMethodsResponse listPaymentMethods(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiListPaymentMethodsRequest = {
  // PaymentprocessorListPaymentMethodsRequest
  body: {
    tenantId: "tenantId_example",
    authenticateMethods: true,
  },
};

apiInstance.listPaymentMethods(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorListPaymentMethodsRequest**|  |


### Return type

**PaymentprocessorListPaymentMethodsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **performPayment**
> PaymentprocessorPerformPaymentResponse performPayment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiPerformPaymentRequest = {
  // PaymentprocessorPerformPaymentRequest
  body: {
    tenantId: "tenantId_example",
    paymentId: "paymentId_example",
    context: {
      billingAddress: {
        revision: 1,
        regionCode: "regionCode_example",
        languageCode: "languageCode_example",
        postalCode: "postalCode_example",
        sortingCode: "sortingCode_example",
        administrativeArea: "administrativeArea_example",
        locality: "locality_example",
        sublocality: "sublocality_example",
        addressLines: [
          "addressLines_example",
        ],
        recipients: [
          "recipients_example",
        ],
        organization: "organization_example",
        phoneNumber: "phoneNumber_example",
        additionalInfo: {},
      },
      shippingAddress: {
        revision: 1,
        regionCode: "regionCode_example",
        languageCode: "languageCode_example",
        postalCode: "postalCode_example",
        sortingCode: "sortingCode_example",
        administrativeArea: "administrativeArea_example",
        locality: "locality_example",
        sublocality: "sublocality_example",
        addressLines: [
          "addressLines_example",
        ],
        recipients: [
          "recipients_example",
        ],
        organization: "organization_example",
        phoneNumber: "phoneNumber_example",
        additionalInfo: {},
      },
      orderInfo: {
        number: "number_example",
        grn: "grn_example",
        items: [
          {
            id: "id_example",
            productGrn: "productGrn_example",
            qtyOrdered: 1,
            qtyCommitted: 1,
            unitSalePrice: {
              units: "units_example",
              micros: 1,
            },
            unitListPrice: {
              units: "units_example",
              micros: 1,
            },
            unitBasePrice: {
              units: "units_example",
              micros: 1,
            },
            unitVatAmount: {
              units: "units_example",
              micros: 1,
            },
            rowSalePrice: {
              units: "units_example",
              micros: 1,
            },
            rowListPrice: {
              units: "units_example",
              micros: 1,
            },
            rowVatAmount: {
              units: "units_example",
              micros: 1,
            },
            discountAmount: {
              units: "units_example",
              micros: 1,
            },
            rowBasePrice: {
              units: "units_example",
              micros: 1,
            },
            vatPercentage: 3.14,
            vatInaccurate: true,
            vatCalculated: true,
            productName: "productName_example",
            productCode: "productCode_example",
            productSku: "productSku_example",
            productOptions: "productOptions_example",
            productImg: "productImg_example",
            productData: "productData_example",
            shipmentInfoReference: "shipmentInfoReference_example",
            promotionGrn: [
              "promotionGrn_example",
            ],
            productIsVirtual: true,
          },
        ],
      },
    },
    code: "code_example",
    amount: {
      units: "units_example",
      micros: 1,
    },
    currency: "XXX",
    additionalInfo: "additionalInfo_example",
    transactions: [
      {
        paymentId: "paymentId_example",
        id: "id_example",
        type: "UNKNOWN",
        additionalInfo: "additionalInfo_example",
        childTransactions: [],
      },
    ],
  },
};

apiInstance.performPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorPerformPaymentRequest**|  |


### Return type

**PaymentprocessorPerformPaymentResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **performRefund**
> any performRefund(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiPerformRefundRequest = {
  // PaymentprocessorPerformRefundRequest
  body: {
    tenantId: "tenantId_example",
    refundId: "refundId_example",
    payment: {
      id: "id_example",
      code: "code_example",
      additionalInfo: "additionalInfo_example",
      transactions: [
        {
          paymentId: "paymentId_example",
          id: "id_example",
          type: "UNKNOWN",
          additionalInfo: "additionalInfo_example",
          childTransactions: [],
        },
      ],
    },
    amount: {
      units: "units_example",
      micros: 1,
    },
    currency: "XXX",
  },
};

apiInstance.performRefund(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorPerformRefundRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePayment**
> any updatePayment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiUpdatePaymentRequest = {
  // PaymentprocessorUpdatePaymentRequest
  body: {
    tenantId: "tenantId_example",
    paymentId: "paymentId_example",
    code: "code_example",
    additionalInfo: "additionalInfo_example",
    transactions: [
      {
        paymentId: "paymentId_example",
        id: "id_example",
        type: "UNKNOWN",
        additionalInfo: "additionalInfo_example",
        childTransactions: [],
      },
    ],
  },
};

apiInstance.updatePayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorUpdatePaymentRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePaymentMethod**
> PaymentprocessorPaymentMethod updatePaymentMethod(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiUpdatePaymentMethodRequest = {
  // PaymentprocessorUpdatePaymentMethodRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    title: {
      value: {
        "key": "key_example",
      },
    },
    label: {
      value: {
        "key": "key_example",
      },
    },
    enabled: true,
    amount: {
      units: "units_example",
      micros: 1,
    },
    currency: "XXX",
    configuration: {},
    isUpfront: true,
    description: {
      value: {
        "key": "key_example",
      },
    },
    restrictions: [
      {
        conditions: [
          {
            contextPath: "contextPath_example",
            action: "DISALLOW",
            condition: "IN",
            values: [
              "values_example",
            ],
          },
        ],
      },
    ],
    fieldMask: "fieldMask_example",
  },
};

apiInstance.updatePaymentMethod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorUpdatePaymentMethodRequest**|  |


### Return type

**PaymentprocessorPaymentMethod**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **voidPayment**
> PaymentprocessorVoidPaymentResponse voidPayment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentprocessorApi(configuration);

let body:.PaymentprocessorApiVoidPaymentRequest = {
  // PaymentprocessorVoidPaymentRequest
  body: {
    tenantId: "tenantId_example",
    paymentId: "paymentId_example",
    code: "code_example",
    additionalInfo: "additionalInfo_example",
    transactions: [
      {
        paymentId: "paymentId_example",
        id: "id_example",
        type: "UNKNOWN",
        additionalInfo: "additionalInfo_example",
        childTransactions: [],
      },
    ],
  },
};

apiInstance.voidPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PaymentprocessorVoidPaymentRequest**|  |


### Return type

**PaymentprocessorVoidPaymentResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


