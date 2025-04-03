import { dashboardActions } from '../reduxExports';
import { DashboardState, DashboardAction } from './dashboardType';

const dashboardInitialState: DashboardState = {
    dashboardLoader: false,
    sessions: null,
    userDistribution: null,
    dashboardFilter: {
        timeRange: 'today'
    },
    error: null
};

const dashboardReducer = (state: DashboardState = dashboardInitialState, action: DashboardAction): DashboardState => {
    switch (action.type) {
        case dashboardActions.SET_DASHBOARD_LOADER:
            return {
                ...state,
                dashboardLoader: action.dashboardLoader || false
            };
        case dashboardActions.SET_DASHBOARD_FILTER:
            return {
                ...state,
                dashboardFilter: action.dashboardFilter || { timeRange: 'today' }
            };
        case dashboardActions.FETCH_DASHBOARD_DATA:
            return {
                ...state,
                sessions: action.sessions || null,
                userDistribution: action.userDistribution || null
            };
        case dashboardActions.SET_DASHBOARD_ERROR:
            return {
                ...state,
                error: action.error || null
            };
        default:
            return state;
    }
};

export default dashboardReducer; 