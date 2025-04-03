
import cachedAPI from '@/service/CachedAPIs';
import { referenceDataActions } from '../reduxExports';
import axiosInstance from '@/service/Axios';

const url = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchFilterKeyRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<void> => {
    try {
        cachedAPI.fetchCacheFunction('/ref/filters', 30 * 60 * 60, 'filter-key-ref-data', 'POST').then((response) => {
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_FILTER_KEY_REF_DATA,
                filterKeyRefData: response?.data?.data,
            };
            dispatch(action);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};



export const fetchCustomerRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<void> => {
    try {
        cachedAPI.fetchCacheFunction('/ref/customers', 30 * 60 * 60, 'customers-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_CUSTOMER_REF_DATA,
                customerRefData: reduxReponse
            };
            dispatch(action);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchSalesOrderNoRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/salesOrders', 30 * 60 * 60, 'sales-order-no-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_SALES_ORDER_NO_REF_DATA,
                salesOrderNoRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchAssetStatusRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<void> => {
    try {
        cachedAPI.fetchCacheFunction('/ref/assetStatus', 30 * 60 * 60, 'asset-status-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_ASSET_STATUS_REF_DATA,
                assetStatusRefData: reduxReponse
            };
            dispatch(action);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchWarrantyStatusRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<void> => {
    try {
        cachedAPI.fetchCacheFunction('/ref/warrantyStatus', 30 * 60 * 60, 'warranty-status-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_WARRANTY_STATUS_REF_DATA,
                warrantyStatusRefData: reduxReponse
            };
            dispatch(action);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchBookingStatusRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<void> => {
    try {
        cachedAPI.fetchCacheFunction('/ref/bookingStatus', 30 * 60 * 60, 'booking-status-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_BOOKING_STATUS_REF_DATA,
                bookingStatusRefData: reduxReponse
            };
            dispatch(action);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchProductRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<void> => {
    try {
        cachedAPI.fetchCacheFunction('/ref/products', 30 * 60 * 60, 'products-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_PRODUCT_REF_DATA,
                productRefData: reduxReponse
            };
            dispatch(action);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchChargerTypeRefData: any = (productId: string) => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<void> => {
    try {
        const response = await cachedAPI.fetchCacheFunction(`/ref/charger-types?productId=${productId}`, 30 * 60 * 60, `charger-type-ref-data-${productId}`, 'POST');
        const reduxResponse = response?.data?.data?.map((data: { id: any; label: any; }) => ({
            id: data?.id,
            value: data?.label,
            label: data?.label,
        }));
        const action: Partial<ReferenceDataAction> = {
            type: referenceDataActions.FETCH_CHARGER_TYPE_REF_DATA,
            chargerTypeRefData: reduxResponse,
        };
        dispatch(action);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchInstallationTypeRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<void> => {
    try {
        cachedAPI.fetchCacheFunction('/ref/installation-types', 30 * 60 * 60, 'installation-type-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_INSTALLATION_TYPE_REF_DATA,
                installationTypeRefData: reduxReponse
            };
            dispatch(action);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchDispatchRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/dispatch', 30 * 60 * 60, 'dispatch-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_DISPATCH_REF_DATA,
                dispatchRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchSalesOrderStatusRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/commissioningStatus', 30 * 60 * 60, 'sales-order-status-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_SALES_ORDER_STATUS,
                salesOrderStatusRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchCircleRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/circle', 30 * 60 * 60, 'circle-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_CIRCLE_REF_DATA,
                circleRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchTicketStatusRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/ticket-status', 30 * 60 * 60, 'ticket-status-ref-data', 'POST').then((response) => {
            const reduxResponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_TICKET_STATUS_REF_DATA,
                ticketStatusRefData: reduxResponse
            };
            dispatch(action);
            return JSON.stringify(reduxResponse)
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchPriorityRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/priority', 30 * 60 * 60, 'priority-ref-data', 'POST').then((response) => {
            const reduxResponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_PRIORITY_REF_DATA,
                priorityRefData: reduxResponse
            };
            dispatch(action);
            return JSON.stringify(reduxResponse)
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchTaskStatusRefData: any = (fetchType: string | undefined) => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction(`/ref/task-status?fetchType=${fetchType}`, 30 * 60 * 60, `task-status-ref-data-${fetchType}`, 'POST').then((response) => {
            const reduxReponse: IReferenceData[] = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_TASK_STATUS_REF_DATA,
                taskStatusRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchSerialNumberRefData: any = (searchTerm: any, accountId?: any) => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const reqParams = {
            accountId: accountId,
            serialNo: searchTerm
        }
        const response = axiosInstance.post(url + '/ref/assets', {}, { params: reqParams }).then((response: { data: { data: any[]; }; }) => {
            const reduxReponse: IReferenceData[] = response?.data?.data?.map((data: { id: any; label: any; partCode: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                    partCode: data?.partCode
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_CHARGER_SERIAL_REF_DATA,
                chargerSerialNoRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const fetchRolesRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/roles', 30 * 60 * 60, 'roles-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_ROLES_REF_DATA,
                rolesRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchAccountUsersRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/account-users', 30 * 60 * 60, 'account-users-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_ACCOUNT_USERS_REF_DATA,
                accountUsersRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchTicketCategoryMapRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/tickets/category-map', 30 * 60 * 60, 'ticket-category-map-ref-data', 'GET').then((response) => {
            const reduxReponse = response?.data?.data
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_TICKET_CATEGORY_MAP_REF_DATA,
                ticketCategoryMapRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchTicketActivityStatusRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/activity-status', 30 * 60 * 60, 'ticket-activity-status-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_TICKET_ACTIVITY_STATUS_REF_DATA,
                ticketActivityStatusRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchTicketsCallType: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/tickets/call-type', 30 * 60 * 60, 'ticket-call-type-ref-data', 'GET').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_TICKETS_CALL_TYPE_REF_DATA,
                ticketsCallTypeRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchTicketsCategory: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/tickets/category', 30 * 60 * 60, 'ticket-category-ref-data', 'GET').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_TICKETS_CATEGORY_REF_DATA,
                ticketsCategoryRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const fetchTicketsSubCategory: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/tickets/sub-category', 30 * 60 * 60, 'ticket-sub-category-ref-data', 'GET').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_TICKETS_SUB_CATEGORY_REF_DATA,
                ticketsSubCategoryRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchAssetRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/all-assets', 30 * 60 * 60, 'assets-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_ASSETS_REF_DATA,
                ticketsAssetsRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }

}


export const fetchCustomerConsentRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/ref/payment-consent', 30 * 60 * 60, 'customer-consent-ref-data', 'POST').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_CUSTOMER_CONSENT_REF_DATA,
                customerConsentRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchTicketResponseRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/tickets/on-call-response', 30 * 60 * 60, 'ticket-response-ref-data', 'GET').then((response) => {
            const reduxReponse = response?.data?.data?.map((data: { id: any; label: any; }) => {
                return {
                    id: data?.id,
                    value: data?.label,
                    label: data?.label,
                };
            });
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_TICKET_RESPONSE_REF_DATA,
                ticketResponseRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const fetchWorkOrderItemsRefData: any = () => async (dispatch: (arg0: Partial<ReferenceDataAction>) => void): Promise<string> => {
    try {
        const response = cachedAPI.fetchCacheFunction('/work-order/price-list', 30 * 60 * 60, 'work-order-items-ref-data', 'GET').then((response) => {

            const orderItems = response?.data?.data?.items?.map((data: { itemCode: any; itemName: any; }) => {
                return {
                    id: data?.itemCode,
                    value: data?.itemName,
                    label: data?.itemName,
                    ...data
                };
            });
            const reduxReponse = {
                currency: response?.data?.data?.currency,
                items: orderItems
            }
            const action: Partial<ReferenceDataAction> = {
                type: referenceDataActions.FETCH_WORK_ORDER_ITEMS_REF_DATA,
                workOrderItemsRefData: reduxReponse
            };
            dispatch(action);
            return JSON.stringify(reduxReponse)
        });
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
};