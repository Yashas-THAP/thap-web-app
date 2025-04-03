'use client'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/reduxStore/store';
import { ISession } from '@/reduxStore/dashboardRedux/dashboardType';

interface TodaysSessionsProps {
    timeRange: string;
}

const TodaysSessions = ({ timeRange }: TodaysSessionsProps) => {
    const { sessions } = useSelector((state: RootState) => state.dashboardReducer);

    const getTitle = () => {
        switch (timeRange) {
            case 'today':
                return "Today's Sessions";
            case 'week':
                return "This Week's Sessions";
            case 'month':
                return "This Month's Sessions";
            case 'quarter':
                return "This Quarter's Sessions";
            case 'year':
                return "This Year's Sessions";
            default:
                return "Today's Sessions";
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">{getTitle()}</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Therapist</TableCell>
                            <TableCell align="right">Available Sessions</TableCell>
                            <TableCell align="right">Booked Sessions</TableCell>
                            <TableCell align="right">Utilization</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sessions?.map((row: ISession, index: number) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.therapist}
                                </TableCell>
                                <TableCell align="right">{row.availableSessions}</TableCell>
                                <TableCell align="right">{row.bookedSessions}</TableCell>
                                <TableCell align="right">{row.utilization}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TodaysSessions; 