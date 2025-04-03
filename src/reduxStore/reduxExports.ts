// BOOKINGS REDUX EXPORTS
export { fetchBookings, setBookingTableProps, updateBooking, fetchScopeByAccount, deleteBookingWithId, generateIRF } from './bookingsRedux/bookingsService'
export * as bookingsActions from './bookingsRedux/bookingsActions'
export { default as bookingsReducer } from './bookingsRedux/bookingsReducer'
export { default as getBookingsReducer } from './bookingsRedux/bookingsSelector'

//AVAILABILITY REDUX EXPORTS
export { fetchAvailability, addSlots } from './availabilityRedux/availabilityService'
export * as availabilityActions from './availabilityRedux/availabilityActions'
export { default as availabilityReducer } from './availabilityRedux/availabilityReducer'
export { default as getAvailabilityReducer } from './availabilityRedux/availabilitySelector'

//APPOINTMENTS REDUX EXPORTS
export { fetchAppointments } from './appointmentsRedux/appointmentsService'
export * as appointmentsActions from './appointmentsRedux/appointmentsActions'
export { default as appointmentsReducer } from './appointmentsRedux/appointmentsReducer'
export { default as getAppointmentsReducer } from './appointmentsRedux/appointmentsSelector'

//AVAILABILITY REDUX EXPORTS
export { fetchTherapistUserDetails, setTherapistUserDetails } from './therapistUserRedux/therapistUserService'
export * as therapistUserActions from './therapistUserRedux/therapistUserActions'
export { default as therapistUserReducer } from './therapistUserRedux/therapistUserReducer'
export { default as getTherapistUserReducer } from './therapistUserRedux/therapistUserSelector'

// FILTERS REDUX EXPORTS
// export * as filterActions from './fitersRedux/filterActions'
// export { default as filtersReducer } from './fitersRedux/filterReducer'
// export { default as getFiltersReducer } from './fitersRedux/filterSelector'

// GLOBAL REDUX EXPORTS
export { updateNotes, getPreSignedURL, setIsSidePanelExpanded,fetchActivityLogs,sendGeoLocation } from './globalRedux/globalService'
export * as globalActions from './globalRedux/globalActions'
export { default as globalReducer } from './globalRedux/globalReducer'
export { default as getGlobalReducer } from './globalRedux/globalSelector'

// REFERENCE DATA REDUX EXPORTS
export {
    fetchFilterKeyRefData, fetchCustomerRefData, fetchSalesOrderNoRefData,
    fetchAssetStatusRefData, fetchBookingStatusRefData, fetchWarrantyStatusRefData, fetchProductRefData,
    fetchChargerTypeRefData, fetchInstallationTypeRefData, fetchSalesOrderStatusRefData, fetchCircleRefData,
    fetchDispatchRefData, fetchTaskStatusRefData, fetchSerialNumberRefData, fetchTicketStatusRefData,
    fetchRolesRefData, fetchTicketCategoryMapRefData, fetchPriorityRefData, fetchTicketActivityStatusRefData, fetchTicketsCallType
    , fetchTicketsCategory, fetchTicketsSubCategory, fetchAssetRefData,fetchCustomerConsentRefData,fetchWorkOrderItemsRefData,
    fetchTicketResponseRefData
} from './referenceDataRedux/referenceDataService'
export * as referenceDataActions from './referenceDataRedux/referenceDataActions'
export { default as referenceDataReducer } from './referenceDataRedux/referenceDataReducer'
export { default as getReferenceDataReducer } from './referenceDataRedux/referenceDataSelector'

// DASHBOARD REDUX EXPORTS
export * as dashboardActions from './dashboardRedux/dashboardActions';
export { default as dashboardReducer } from './dashboardRedux/dashboardReducer';
export { default as getDashboardReducer } from './dashboardRedux/dashboardSelector';
export { fetchDashboardData } from './dashboardRedux/dashboardService';