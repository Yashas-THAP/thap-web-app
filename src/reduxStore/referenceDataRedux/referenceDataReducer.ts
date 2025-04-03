import { referenceDataActions } from '../reduxExports';

const referenceDataInitialState: ReferenceDataState = {
  filterKeyRefData: null,
  accountRefData: null,
  customerRefData: null,
  assetStatusRefData: null,
  salesOrderNoRefData: null,
  warrantyStatusRefData: null,
  bookingStatusRefData: null,
  productRefData: null,
  chargerTypeRefData: null,
  installationTypeRefData: null,
  dispatchRefData: null,
  salesOrderStatusRefData: null,
  circleRefData: null,
  assigneeRefData: null,
  taskStatusRefData: null,
  chargerSerialNoRefData: null,
  userRefData: null,
  ticketStatusRefData: null,
  rolesRefData: null,
  ticketCategoryMapRefData: null,
  priorityRefData: null,
  ticketActivityStatusRefData: null,
  ticketsCallTypeRefData: null,
  ticketsCategoryRefData: null,
  ticketsSubCategoryRefData: null,
  ticketsResolutionCodeRefData: null,
  ticketsAssetsRefData: null,
  ticketUrgencyRefData: null,
  ticketImpactRefData: null,
  ticketPriorityRefData: null,
  customerConsentRefData: null,
  ticketResponseRefData: null,
  workOrderItemsRefData: null,
  accountUsersRefData: null

};

const referenceDataReducer = (state: ReferenceDataState = referenceDataInitialState, action: ReferenceDataAction): ReferenceDataState => {
  switch (action.type) {
    case referenceDataActions.FETCH_FILTER_KEY_REF_DATA:
      return {
        ...state,
        filterKeyRefData: action.filterKeyRefData,
      };
    case referenceDataActions.FETCH_ACCOUNT_REF_DATA:
      return {
        ...state,
        accountRefData: action.accountRefData,
      };
    case referenceDataActions.FETCH_CUSTOMER_REF_DATA:
      return {
        ...state,
        customerRefData: action.customerRefData,
      };
    case referenceDataActions.FETCH_ASSET_STATUS_REF_DATA:
      return {
        ...state,
        assetStatusRefData: action.assetStatusRefData,
      };
    case referenceDataActions.FETCH_SALES_ORDER_NO_REF_DATA:
      return {
        ...state,
        salesOrderNoRefData: action.salesOrderNoRefData,
      };
    case referenceDataActions.FETCH_WARRANTY_STATUS_REF_DATA:
      return {
        ...state,
        warrantyStatusRefData: action.warrantyStatusRefData,
      };
    case referenceDataActions.FETCH_BOOKING_STATUS_REF_DATA:
      return {
        ...state,
        bookingStatusRefData: action.bookingStatusRefData,
      };
    case referenceDataActions.FETCH_PRODUCT_REF_DATA:
      return {
        ...state,
        productRefData: action.productRefData,
      };
    case referenceDataActions.FETCH_CHARGER_TYPE_REF_DATA:
      return {
        ...state,
        chargerTypeRefData: action.chargerTypeRefData,
      };
    case referenceDataActions.FETCH_INSTALLATION_TYPE_REF_DATA:
      return {
        ...state,
        installationTypeRefData: action.installationTypeRefData,
      };
    case referenceDataActions.FETCH_DISPATCH_REF_DATA:
      return {
        ...state,
        dispatchRefData: action.dispatchRefData,
      };
    case referenceDataActions.FETCH_SALES_ORDER_STATUS:
      return {
        ...state,
        salesOrderStatusRefData: action.salesOrderStatusRefData,
      };
    case referenceDataActions.FETCH_CIRCLE_REF_DATA:
      return {
        ...state,
        circleRefData: action.circleRefData
      }
    case referenceDataActions.FETCH_ASSIGNEE_REF_DATA:
      return {
        ...state,
        assigneeRefData: action.assigneeRefData
      }
    case referenceDataActions.FETCH_USER_REF_DATA:
      return {
        ...state,
        userRefData: action.userRefData
      }
    case referenceDataActions.FETCH_TASK_STATUS_REF_DATA:
      return {
        ...state,
        taskStatusRefData: action.taskStatusRefData
      }
    case referenceDataActions.FETCH_CHARGER_SERIAL_REF_DATA:
      return {
        ...state,
        chargerSerialNoRefData: action.chargerSerialNoRefData
      }
    case referenceDataActions.FETCH_TICKET_STATUS_REF_DATA:
      return {
        ...state,
        ticketStatusRefData: action.ticketStatusRefData
      }
    case referenceDataActions.FETCH_ROLES_REF_DATA:
      return {
        ...state,
        rolesRefData: action.rolesRefData
      }
    case referenceDataActions.FETCH_TICKET_CATEGORY_MAP_REF_DATA:
      return {
        ...state,
        ticketCategoryMapRefData: action.ticketCategoryMapRefData
      }
    case referenceDataActions.FETCH_PRIORITY_REF_DATA:
      return {
        ...state,
        priorityRefData: action.priorityRefData
      }
    case referenceDataActions.FETCH_TICKET_ACTIVITY_STATUS_REF_DATA:
      return {
        ...state,
        ticketActivityStatusRefData: action.ticketActivityStatusRefData
      }
    case referenceDataActions.FETCH_TICKETS_CALL_TYPE_REF_DATA:
      return {
        ...state,
        ticketsCallTypeRefData: action.ticketsCallTypeRefData
      }
    case referenceDataActions.FETCH_TICKETS_CATEGORY_REF_DATA:
      return {
        ...state,
        ticketsCategoryRefData: action.ticketsCategoryRefData
      }
    case referenceDataActions.FETCH_TICKETS_SUB_CATEGORY_REF_DATA:
      return {
        ...state,
        ticketsSubCategoryRefData: action.ticketsSubCategoryRefData
      }
    case referenceDataActions.FETCH_TICKETS_RESOLUTION_CODE_REF_DATA:
      return {
        ...state,
        ticketsResolutionCodeRefData: action.ticketsResolutionCodeRefData
      }
    case referenceDataActions.FETCH_ASSETS_REF_DATA:
      return {
        ...state,
        ticketsAssetsRefData: action.ticketsAssetsRefData
      }
    case referenceDataActions.FETCH_TICKET_URGENCY_IMPACT_REF_DATA:
      return {
        ...state,
        ticketUrgencyRefData: action.ticketUrgencyRefData,
        ticketImpactRefData: action.ticketImpactRefData,
        ticketPriorityRefData: action.ticketPriorityRefData
      }
    case referenceDataActions.FETCH_CUSTOMER_CONSENT_REF_DATA:
      return {
        ...state,
        customerConsentRefData: action.customerConsentRefData
      }
    case referenceDataActions.FETCH_TICKET_RESPONSE_REF_DATA:
      return {
        ...state,
        ticketResponseRefData: action.ticketResponseRefData
      }
    case referenceDataActions.FETCH_WORK_ORDER_ITEMS_REF_DATA:
      return {
        ...state,
        workOrderItemsRefData: action.workOrderItemsRefData
      }
    case referenceDataActions.FETCH_ACCOUNT_USERS_REF_DATA:
      return {
        ...state,
        accountUsersRefData: action.accountUsersRefData
      }
    default:
      return state;
  }
};

export default referenceDataReducer;
