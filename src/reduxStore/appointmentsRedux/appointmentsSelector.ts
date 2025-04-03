import { type RootState } from '../store'

export default function getAppointmentsReducer (state: RootState): AppointmentsState {
  return state.appointmentsReducer
}