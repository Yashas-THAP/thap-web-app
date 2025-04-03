import { type RootState } from '../store'

export default function getAvailabilityReducer (state: RootState): AvailabilityState {
  return state.availabilityReducer
}