import { Store, combineReducers, configureStore } from '@reduxjs/toolkit'
import _ from 'lodash'
import { batchedSubscribe } from 'redux-batched-subscribe'
// import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { 
    availabilityReducer, 
    appointmentsReducer, 
    bookingsReducer, 
    referenceDataReducer, 
    globalReducer, 
    therapistUserReducer,
    dashboardReducer 
} from './reduxExports';

const rootReducer:any = combineReducers({
    therapistUserReducer,
    availabilityReducer,
    appointmentsReducer,
    bookingsReducer,
    referenceDataReducer,
    globalReducer,
    dashboardReducer
});

const debounceNotify = _.debounce((notify: () => void) => {
  notify();
}, 500);

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batched subscribe, and devtools enhancers were composed together


const persistConfig = {
  key: 'root',
  storage,
}

// appReducer is kind of wrapper on root reducer to consume the logout action and 
// clearing the redux persisted state otherwise returning root reducer with persisted state
const appReducer = (state: any, action: { type: string; }) => {
  if (action.type === 'RESET_LOGOUT') {
    return rootReducer(undefined, action)
  }
  return rootReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, appReducer)

const therapistStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
  enhancers: (getDefaultEnhancers: any) =>
  getDefaultEnhancers().concat(batchedSubscribe(debounceNotify)),
}) as Store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof therapistStore.getState>
export type AppDispatch = typeof therapistStore.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(therapistStore)

export default therapistStore
