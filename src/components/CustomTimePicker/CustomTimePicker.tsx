"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";

interface TimePickerProps {
  index: number;
  callback: (index: number, time: string) => void;
}

const TimePickerComponent: React.FC<TimePickerProps> = ({ index, callback }) => {
  const handleTimeChange = (newTime: Dayjs | null) => {
    if (newTime) {
      callback(index, newTime.format("HH:mm:ss"));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <TimePicker
          label={`Slot time ${index + 1}`}
          onChange={handleTimeChange}
          timeSteps={{ hours: 1, minutes: 15, seconds: 5 }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default TimePickerComponent;
