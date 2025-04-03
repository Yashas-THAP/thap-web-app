import { type RootState } from '../store';
import { DashboardState } from './dashboardType';

export default function getDashboardReducer(state: RootState): DashboardState {
    return state.dashboardReducer;
} 