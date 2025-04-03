'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '@/reduxStore/store';
import { IUserDistribution } from '@/reduxStore/dashboardRedux/dashboardType';

ChartJS.register(ArcElement, Tooltip, Legend);

interface UserDistributionProps {
    timeRange: string;
}

const UserDistribution = ({ timeRange }: UserDistributionProps) => {
    const { userDistribution } = useSelector((state: RootState) => state.dashboardReducer);

    const getTitle = () => {
        switch (timeRange) {
            case 'today':
                return "Today's User Distribution";
            case 'week':
                return "This Week's User Distribution";
            case 'month':
                return "This Month's User Distribution";
            case 'quarter':
                return "This Quarter's User Distribution";
            case 'year':
                return "This Year's User Distribution";
            default:
                return "Today's User Distribution";
        }
    };

    const data = {
        labels: ['New Users', 'Retained Users'],
        datasets: [
            {
                data: [userDistribution?.newUsers || 0, userDistribution?.retainedUsers || 0],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: true,
                text: getTitle(),
                font: {
                    size: 14,
                },
            },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">User Distribution</h2>
            <div className="flex justify-center">
                <div style={{ width: '100%', height: '400px' }}>
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default UserDistribution; 