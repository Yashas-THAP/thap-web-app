'use client'

import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField, Box, Button, Stack } from '@mui/material';

interface DashboardFiltersProps {
    onFilterChange: (filter: string) => void;
    onCustomDateChange: (fromDate: Date | null, toDate: Date | null) => void;
}

const DashboardFilters = ({ onFilterChange, onCustomDateChange }: DashboardFiltersProps) => {
    const [fromDate, setFromDate] = useState<Date | null>(null);
    const [toDate, setToDate] = useState<Date | null>(null);
    const [showCustomDate, setShowCustomDate] = useState(false);

    const handleTimeRangeChange = (filter: string) => {
        setShowCustomDate(filter === 'custom');
        onFilterChange(filter);
    };

    const handleCustomDateChange = () => {
        onCustomDateChange(fromDate, toDate);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box className="mb-6">
                <Stack direction="row" spacing={2} alignItems="center">
                    <div className="flex space-x-2">
                        <Button
                            variant="outlined"
                            onClick={() => handleTimeRangeChange('today')}
                        >
                            Today
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleTimeRangeChange('week')}
                        >
                            This Week
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleTimeRangeChange('month')}
                        >
                            This Month
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleTimeRangeChange('quarter')}
                        >
                            This Quarter
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleTimeRangeChange('year')}
                        >
                            This Year
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleTimeRangeChange('custom')}
                        >
                            Custom Range
                        </Button>
                    </div>

                    {showCustomDate && (
                        <Stack direction="row" spacing={2} alignItems="center">
                            <DatePicker
                                label="From Date"
                                value={fromDate}
                                onChange={(newValue) => setFromDate(newValue)}
                                slotProps={{ textField: { size: 'small' } }}
                            />
                            <DatePicker
                                label="To Date"
                                value={toDate}
                                onChange={(newValue) => setToDate(newValue)}
                                slotProps={{ textField: { size: 'small' } }}
                            />
                            <Button
                                variant="contained"
                                onClick={handleCustomDateChange}
                                disabled={!fromDate || !toDate}
                            >
                                Apply
                            </Button>
                        </Stack>
                    )}
                </Stack>
            </Box>
        </LocalizationProvider>
    );
};

export default DashboardFilters; 