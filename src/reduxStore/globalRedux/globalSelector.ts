import { RootState } from '../store';

export default function getGlobalReducer(state: RootState): GlobalState {
  return state.globalReducer;
}

