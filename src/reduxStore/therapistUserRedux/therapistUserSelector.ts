import { type RootState } from '../store'

export default function getTherapistUserReducer (state: RootState): TherapistUserState {
  return state.therapistUserReducer
}