'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '@/reduxStore/store';
import { ISession } from '@/reduxStore/dashboardRedux/dashboardType';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface SessionUtilizationChartProps {
    timeRange: string;
}

const SessionUtilizationChart = ({ timeRange }: SessionUtilizationChartProps) => {
    const { sessions } = useSelector((state: RootState) => state.dashboardReducer);

    const getTitle = () => {
        switch (timeRange) {
            case 'today':
                return 'Today\'s Session Utilization';
            case 'week':
                return 'This Week\'s Session Utilization';
            case 'month':
                return 'This Month\'s Session Utilization';
            case 'quarter':
                return 'This Quarter\'s Session Utilization';
            case 'year':
                return 'This Year\'s Session Utilization';
            default:
                return 'Today\'s Session Utilization';
        }
    };

    const data = {
        labels: sessions?.map((item: ISession) => item.therapist) || [],
        datasets: [
            {
                label: 'Booked Sessions',
                data: sessions?.map((item: ISession) => item.bookedSessions) || [],
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Available Sessions',
                data: sessions?.map((item: ISession) => item.availableSessions) || [],
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }
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
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Sessions'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Therapists'
                }
            }
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Session Utilization</h2>
            <div className="flex justify-center">
                <div style={{ width: '100%', height: '400px' }}>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default SessionUtilizationChart; 