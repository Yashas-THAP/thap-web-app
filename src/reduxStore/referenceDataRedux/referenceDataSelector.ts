import { RootState } from '../store';

export default function getReferenceDataReducer(state: RootState): ReferenceDataState {
  return state.referenceDataReducer;
}

