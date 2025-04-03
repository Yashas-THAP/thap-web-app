import axiosInstance from "@/service/Axios";
import { dashboardActions } from "../reduxExports";
import { DashboardAction } from "./dashboardType";

const url = process.env.NEXT_PUBLIC_BASE_URL;

// Mock API call - replace with actual API call
const fetchDashboardDataFromAPI = async (timeRange: string, fromDate?: Date, toDate?: Date) => {
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulate API request
        // const response = await axiosInstance.post(`${url}/dashboard/data`, {
        //     timeRange,
        //     fromDate: fromDate?.toISOString(),
        //     toDate: toDate?.toISOString()
        // });

        return {
            sessions: [
                { therapist: 'Dr. John Doe', availableSessions: 8, bookedSessions: 6, utilization: '75%' },
                { therapist: 'Dr. Jane Smith', availableSessions: 6, bookedSessions: 4, utilization: '67%' },
                { therapist: 'Dr. Mike Johnson', availableSessions: 8, bookedSessions: 7, utilization: '88%' },
                { therapist: 'Dr. Sarah Wilson', availableSessions: 5, bookedSessions: 5, utilization: '100%' },
                { therapist: 'Dr. Robert Brown', availableSessions: 7, bookedSessions: 3, utilization: '43%' }
            ],
            userDistribution: {
                newUsers: 30,
                retainedUsers: 70
            }
        };
        // Simulate API response
        // if (response.status === 200) {
        //     return {
        //         sessions: [
        //             { therapist: 'Dr. John Doe', availableSessions: 8, bookedSessions: 6, utilization: '75%' },
        //             { therapist: 'Dr. Jane Smith', availableSessions: 6, bookedSessions: 4, utilization: '67%' },
        //             { therapist: 'Dr. Mike Johnson', availableSessions: 8, bookedSessions: 7, utilization: '88%' },
        //             { therapist: 'Dr. Sarah Wilson', availableSessions: 5, bookedSessions: 5, utilization: '100%' },
        //             { therapist: 'Dr. Robert Brown', availableSessions: 7, bookedSessions: 3, utilization: '43%' }
        //         ],
        //         userDistribution: {
        //             newUsers: 30,
        //             retainedUsers: 70
        //         }
        //     };
        // } else {
            
        //     throw new Error('Failed to fetch dashboard data');
        // }
    } catch (error) {
        console.error('Dashboard API Error:', error);
        throw error;
    }
};

export const fetchDashboardData: any = (timeRange: string, fromDate?: Date, toDate?: Date) => 
    async (dispatch: (arg0: Partial<DashboardAction>) => void): Promise<void> => {
        try {
            const loaderStartAction: Partial<DashboardAction> = {
                type: dashboardActions.SET_DASHBOARD_LOADER,
                dashboardLoader: true
            };
            dispatch(loaderStartAction);

            const data = await fetchDashboardDataFromAPI(timeRange, fromDate, toDate);
            
            const action: Partial<DashboardAction> = {
                type: dashboardActions.FETCH_DASHBOARD_DATA,
                sessions: data.sessions,
                userDistribution: data.userDistribution
            };
            dispatch(action);

            const loaderEndAction: Partial<DashboardAction> = {
                type: dashboardActions.SET_DASHBOARD_LOADER,
                dashboardLoader: false
            };
            dispatch(loaderEndAction);
        } catch (error) {
            const errorAction: Partial<DashboardAction> = {
                type: dashboardActions.SET_DASHBOARD_ERROR,
                error: error instanceof Error ? error.message : 'Failed to fetch dashboard data'
            };
            dispatch(errorAction);

            const loaderEndAction: Partial<DashboardAction> = {
                type: dashboardActions.SET_DASHBOARD_LOADER,
                dashboardLoader: false
            };
            dispatch(loaderEndAction);
            throw error;
        }
    }; 