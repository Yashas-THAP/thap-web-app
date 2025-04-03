import { type RootState } from '../store'

export default function getBookingsReducer (state: RootState): BookingsState {
  return state.bookingsReducer
}
