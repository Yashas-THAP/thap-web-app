import { act } from 'react';
import { bookingsActions } from '../reduxExports';

const bookingsInitialState: BookingsState = {
  bookingsLoader: false,
  bookings: null,
  bookingsCount: 0,
  bookingsTableProps: {
    view: 'list',
    pageSize: 15,
    pageNumber: 1,
    sortOrder: 'desc',
    sortBy: 'bookingDate',
    searchTerm: ''
  },
  bookingsListFetchTime: null,
  bookingsListRequestHash: null,
  activeStep: 0,
  validatedBulkBookings: null,
  bulkBookings: {
    account: null,
    product: null,
    chargerType: null,
    installationType: null,
    fileName: '',
    fileColumnNames: null,
    expectedColumnNames: null
  },
 
};

const bookingsReducer = (state: BookingsState = bookingsInitialState, action: BookingsAction): BookingsState => {
  switch (action.type) {
    case bookingsActions.SET_BOOKINGS_LOADER:
      return {
        ...state,
        bookingsLoader: action.bookingsLoader
      };
    case bookingsActions.SET_BOOKINGS_TABLE_PROPS:
      return {
        ...state,
        bookingsTableProps: action.bookingsTableProps
      };
    case bookingsActions.FETCH_BOOKINGS_DATA:
      return {
        ...state,
        bookings: action.bookings,
        bookingsCount: action.bookingsCount,
        bookingsListFetchTime: action.bookingsListFetchTime
      }
    case bookingsActions.SET_BOOKING_LIST_REQUEST_HASH: 
       return {
        ...state,
        bookingsListRequestHash: action.bookingsListRequestHash
       }
    case bookingsActions.SET_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.activeStep
      };
    case bookingsActions.FETCH_VALIDATED_BULK_BOOKINGS:
      return {
        ...state,
        validatedBulkBookings: action.validatedBulkBookings
      }; 
    case bookingsActions.SET_BULK_BOOKING_FORM_DATA:
      return {
        ...state,
        bulkBookings: action.bulkBookings
      };
    case bookingsActions.CLEAR_BULK_BOOKING_STATE:
      return {
        ...state,
        activeStep: 0,
        bulkBookings: {
          account: null,
          product: null,
          chargerType: null,
          installationType: null,
          fileName: '',
          fileColumnNames: null,
          expectedColumnNames: null
        }
      };
    case bookingsActions.CLEAR_BOOKING_LIST_DATA:
      return {
        ...state,
        bookingsTableProps: {
          view: 'list',
          pageNumber: state.bookingsTableProps?.pageNumber ?? 1,
          pageSize: state.bookingsTableProps?.pageSize ?? 15,
          sortBy: state.bookingsTableProps?.sortBy ?? 'deliveredOn',
          sortOrder: state.bookingsTableProps?.sortOrder ?? 'desc',
          searchTerm: ''
        }
      }
    default:
      return state;
  }



};

export default bookingsReducer;