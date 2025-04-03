'use client'

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodaysSessions from './components/TodaysSessions';
import UserDistribution from './components/UserDistribution';
import SessionUtilizationChart from './components/SessionUtilizationChart';
import DashboardFilters from './components/DashboardFilters';
import { fetchDashboardData } from '@/reduxStore/reduxExports';
import { RootState } from '@/reduxStore/store';
import DashboardLoader from '@/components/Loader/DashboardLoader';

// Mock API call - replace with actual API call
const fetchDashboardDataFromAPI = async (timeRange: string, fromDate?: Date, toDate?: Date) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock data - replace with actual API response
    const mockSessions = [
        { therapist: 'Dr. John Doe', availableSessions: 8, bookedSessions: 6, utilization: '75%' },
        { therapist: 'Dr. Jane Smith', availableSessions: 6, bookedSessions: 4, utilization: '67%' },
        { therapist: 'Dr. Mike Johnson', availableSessions: 8, bookedSessions: 7, utilization: '88%' },
    ];

    const mockUserDistribution = {
        newUsers: 30,
        retainedUsers: 70
    };

    return {
        sessions: mockSessions,
        userDistribution: mockUserDistribution
    };
};

const TherapistDashboard = () => {
    const dispatch = useDispatch();
    const { dashboardLoader, sessions, userDistribution, dashboardFilter, error } = useSelector((state: RootState) => state.dashboardReducer);
    const [customDateRange, setCustomDateRange] = useState<{ from: Date | null; to: Date | null }>({
        from: null,
        to: null
    });

    useEffect(() => {
        dispatch(fetchDashboardData(
            dashboardFilter.timeRange,
            customDateRange.from || undefined,
            customDateRange.to || undefined
        ));
    }, [dashboardFilter.timeRange, customDateRange, dispatch]);

    const handleFilterChange = (filter: string) => {
        dispatch({
            type: 'SET_DASHBOARD_FILTER',
            dashboardFilter: { timeRange: filter }
        });
    };

    const handleCustomDateChange = (fromDate: Date | null, toDate: Date | null) => {
        setCustomDateRange({ from: fromDate, to: toDate });
    };

    if (error) {
        return <div className="p-4 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="p-4">
            <DashboardLoader showLoader={dashboardLoader} />
            <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
            <DashboardFilters 
                onFilterChange={handleFilterChange}
                onCustomDateChange={handleCustomDateChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TodaysSessions timeRange={dashboardFilter.timeRange} />
                <UserDistribution timeRange={dashboardFilter.timeRange} />
            </div>
            <div className="mt-6">
                <SessionUtilizationChart timeRange={dashboardFilter.timeRange} />
            </div>
        </div>
    );
};

export default TherapistDashboard; 