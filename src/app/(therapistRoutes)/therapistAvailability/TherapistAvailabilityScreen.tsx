'use client'
// import { Calendar } from 'fullcalendar';
import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import { useEffect, useState } from 'react';
import { useAppDispatch ,useAppSelector } from '../../../reduxStore/hooks';
import { getAvailabilityReducer, getTherapistUserReducer, fetchAvailability, addSlots } from '@/reduxStore/reduxExports';
import {  checkAlphaNumericPaste, checkCharactersPaste, checkEmailValidation, checkLengthValidationPaste, checkNumbersPaste, formatDateToLocalDate, formatDateWithYear, getStringTrimmed, keyPressValidationForAlphaNumeric, keyPressValidationForCharacters, keyPressValidationForLength, keyPressValidationForPINCode, keyPressValidationForPhoneNumber, scrollToElement, useEffectOnce } from '@/lib/globalHooks'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLoader from '@/components/Loader/DashboardLoader';
import { filterStateInitializer } from '@mui/x-data-grid/internals';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TimePickerComponent from '@/components/CustomTimePicker/CustomTimePicker';

interface IAvailableSlot{
    slotId: string
    date: string
    time: string
    cutoff: string
    type: string
    duration: string
}

const TherapistAvailabilityScreen = () => {

    const [showUpdateOption, setShowUpdateOption] = useState(false);
    const [mode, setMode] = useState('video');
    const [duration, setDuration] = useState('00:30:00');
    const [time, setTime] = useState<string>();
    const [times, setTimes] = useState<string[]>([]);
    const { therapistCutoffOptions } = useAppSelector(getTherapistUserReducer);
    const { availabilityLoader, availabilityTableProps, availability, availabilityCount, availabilityFilter } = useAppSelector(getAvailabilityReducer);
    const [cutoffOption, setCutoffOption] = useState(therapistCutoffOptions[0]);
    const [ error, setError] = useState('');
    const [isMultiSelect, setIsMultiSelect] = useState(true);
    const [selectedDates, setSelectedDates] = useState<string[]>([]);
    const today = new Date().toISOString().split("T")[0];
    const [ availableSlots, setAvailableSlots] = useState<IAvailableSlot[]>([]);
    const [showUpdateSlotsUI, setShowUpdateSlotsUI] = useState(false)
    const dispatch = useAppDispatch();


    useEffectOnce(()=>{
        dispatch(
            fetchAvailability({
                availabilityFilter : availabilityFilter,
                availabilityTableProps : availabilityTableProps
            })
        );
    })

    function calculateEndTime(date: string, time: string, duration: string): string {
        // Combine date and time into a single Date object
        const dateTimeString = `${date}T${time}`; // Use 'T' for ISO format
        const startDateTime = new Date(dateTimeString);
    
        // Parse the duration into hours, minutes, and seconds
        const [hours, minutes, seconds] = duration.split(':').map(Number);
    
        // Calculate total milliseconds for the duration
        const durationInMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;
    
        // Calculate the end time by adding the duration
        const endDateTime = new Date(startDateTime.getTime() + durationInMilliseconds);
    
        // Format the end time back to the desired string format
        const formattedEndTime = endDateTime.toISOString().replace('T', ' ').substring(0, 19);
    
        return formattedEndTime;
    }

    const handleAddSlots = () => {
        const addSlotsRequest = {
            mode: mode,
            duration: duration,
            cutoff: cutoffOption,
            times: times.filter((time)=> {
              return time!=''
            }),
            dates: selectedDates
        }

        dispatch(addSlots(addSlotsRequest));
    }


    const handleDateClick = (info: { dateStr: any; endStr?: any; }) => {
        console.log('date selected: ' + info.dateStr + ' ' + info.endStr );
        setError("");
        const clickedDate = info.dateStr;
        const today = new Date();
        const selectedEndDate = new Date(info.endStr);
        if (selectedEndDate < today) {
          alert("Cannot select ended dates.");
          return;
        }
        if (isMultiSelect) {
          if (!selectedDates.includes(clickedDate)) {
            setSelectedDates([...selectedDates, clickedDate]);
          } else {
            setSelectedDates(selectedDates.filter((date) => date !== clickedDate));
          }
        } else {
          setSelectedDates([clickedDate]);
        }
      };

    const handleDateClickCustom = (info: { dateStr: any; }) => {
        const clickedDate = info.dateStr;
        if (clickedDate < today) {
            console.log('error');
          toast.error("Cannot select past dates.");
          return;
        }
        handleDateClick(info);
      };

    const handleHoursChange = (_value: any) => {
      console.log(_value.target.value);
    
      if(time){
        var hours = parseInt(time?.split(':')[0])>12 ? (parseInt(_value.target.value)+12).toString() : _value.target.value.toString();
        setTime(hours +':' + time.split(':')[1] + ':00');
      }
      else{
        setTime(_value.target.value.toString() + ':00:00')
      }
    }

    const handleMinutesChange = (_value: any) => {
      console.log(_value);
      if(time){
        setTime(time.split(':')[0] + ':' + _value.target.value.toString() + ':00')
      }
      else{
        setTime('00:' + _value.target.value.toString() + ':00')
      }
    }

    const handleAmPmChange = (_value: any) => {
      console.log(_value);
      if(_value.target.value=='AM'){
        if(time){
          if(parseInt(time?.split(':')[0])>12){
            var hours = parseInt(time?.split(':')[0])-12;
            setTime(hours + ':' + time.split(':')[1] + ':00')
          }
        }
      }
      else{
        if(time){
          if(parseInt(time?.split(':')[0])<12){
            var hours = parseInt(time?.split(':')[0])+12;
            setTime(hours + ':' + time.split(':')[1] + ':00')
          }
        }
      }
    }

    const handleTimeChange = (value: any) => {
      setTime(value.format("HH:mm:ss"))
    }

    const addTimePicker = () => {
      setTimes([...times, ""]); // Add an empty string for a new time slot
    };
  
    const removeTimePicker = (index: number) => {
      setTimes(times.filter((_, i) => i !== index));
    };
  
    const handleTimeSelection = (index: number, time: string) => {
      setTimes((prevTimes) => prevTimes.map((t, i) => (i === index ? time : t)));
    };
    
    useEffect(() => {
      const dayCells = document.querySelectorAll(".fc-daygrid-day");
      dayCells.forEach((cell) => {
      const dateStr = cell.getAttribute("data-date");
      if (selectedDates.includes(dateStr??"")) {
          cell.classList.add("selected-date");
      } else {
          cell.classList.remove("selected-date");
      }
      });
    }, [selectedDates]);


    console.log('selected dates: ' + time);

    return (
        <>
        <DashboardLoader showLoader={availabilityLoader} /> 
        <div className='m-4 flex' style={{margin: "12px", fontSize: "24px"}}>Availability</div>
            <div className='flex flex-col'>
                
                <div className='m-4 flex flex-row justify-between'>
                    <div>
                    <div className='flex items-center'>
                        <div className='text-xs'>
                        Mode:  
                        </div>  
                        <div className='m-px flex'>
                            <div className={mode=='video'? 'm-1 p-1 text-base leading-[16px] border border-cyan-600 rounded-lg bg-cyan-100' : 'm-1 p-1 text-base leading-[16px]'} onClick={()=>{setMode('video')}}>Video</div>
                            <div className={mode=='text'? 'm-1 p-1 text-base leading-[16px] border border-cyan-600 rounded-lg bg-cyan-100' : 'm-1 p-1 text-base leading-[16px]'} onClick={()=>{setMode('text')}}>Text</div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                    <div className='text-xs'>
                    Duration:
                    </div>    
                    <div className='m-px flex'>
                        <div className={duration=='00:30:00'? 'm-1 p-1 text-base leading-[16px] border border-cyan-600 rounded-lg bg-cyan-100' : 'm-1 p-1 text-base leading-[16px]'} onClick={()=>{setDuration('00:30:00')}}>30 min</div>
                        <div className={duration=='01:00:00'? 'm-1 p-1 text-base leading-[16px] border border-cyan-600 rounded-lg bg-cyan-100' : 'm-1 p-1 text-base leading-[16px]'} onClick={()=>{setDuration('01:00:00')}}>1 hour</div>
                    </div>
                    </div>
                    
                    <div className='flex items-center'>
                    <div className='text-xs'>
                    Cut-off:  
                    </div>
                    <div className='m-px flex'>
                        {therapistCutoffOptions.map((therapistCutoffOption)=>{
                            return (
                                <div key={therapistCutoffOption.cutoffOptionId} className={therapistCutoffOption == cutoffOption ? 'm-1 p-1 text-base leading-[16px] border border-cyan-600 rounded-lg bg-cyan-100' : 'm-1 p-1 text-base leading-[16px]'} onClick={()=>{setCutoffOption(therapistCutoffOption)}}>{therapistCutoffOption.label}</div>
                            )
                        })}
                        {/* <div className={duration=='00:30:00'? 'm-2 bg-red-50' : 'm-2 bg-white'} onClick={()=>{setDuration('00:30:00')}}>30 min</div>
                        <div className={duration=='01:00:00'? 'm-2 bg-red-50' : 'm-2 bg-white'} onClick={()=>{setDuration('01:00:00')}}>1 hour</div> */}
                    </div>
                    </div>
                    <div className='flex items-center'>
                    Selected Dates:
                    { selectedDates.length ?
                        <div className='m-px flex flex-wrap'>
                            {selectedDates.map((selectedDate)=>{
                                return (
                                    <div key={selectedDate} className='m-1 p-1 text-12/12 border border-cyan-600 rounded-lg'>{selectedDate}  </div>
                                )
                            })}
                            {/* <div className={duration=='00:30:00'? 'm-2 bg-red-50' : 'm-2 bg-white'} onClick={()=>{setDuration('00:30:00')}}>30 min</div>
                            <div className={duration=='01:00:00'? 'm-2 bg-red-50' : 'm-2 bg-white'} onClick={()=>{setDuration('01:00:00')}}>1 hour</div> */}
                        </div>
                        : <>No dates selected</>
                    }
                    </div>
                    </div>
                    <div>
                    <div className='flex items-center'>
                    <div className='text-xs'>
                    Select time : 
                    </div>
                    <div className="p-4">
                      <button
                        onClick={addTimePicker}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
                      >
                        + Add Time Slot
                      </button>

                      <div className="space-y-4">
                        {times.map((time, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <TimePickerComponent index={index} callback={handleTimeSelection} />
                            <button
                              onClick={() => removeTimePicker(index)}
                              className="bg-red-500 text-white px-2 py-1 rounded-md"
                            >
                              ❌
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Debugging output */}
                      <pre className="mt-4 bg-gray-200 p-2 rounded">{JSON.stringify(times, null, 2)}</pre>
                    </div>
                    </div>
                    </div>
                    

                </div>
                <CustomButton
                        buttonText='Add slot(s)'
                        buttonId='work__order__form_add_item_btn'
                        btnClassName='work__order__form_add_item_btn'
                        buttonVariant='outlined'
                        buttonIconClassName='crm__add__new__btn__black__icon'
                        handleClick={async () => { 
                            console.log('click');
                            handleAddSlots();
                            // handleOpsUserLogin({email: emailId, password: password});
                            // const authResp = await authService.handleTherapistLogin({email: 'anjaly@thap.app', password:'anjaly'}); 
                            // console.log('auth resp: ', authResp);
                        }}
                    />
                <div className='m-4 '>
                <FullCalendar
                      validRange={{
                        start: today,
                      }}
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      initialView="dayGridMonth"
                      events={availability?.map((slot) => (
                        {
                            ...event,
                            start: `${slot.date}T${slot.time}`,
                            end: calculateEndTime(slot.date, slot.time, slot.duration),
                            mode: slot.mode
                        }
                      ))}
                      eventContent={(arg) => {
                        console.log('arg: ' + JSON.stringify(arg))
                        return (
                          <div style={{ width: '100%', fontSize: '10px', backgroundColor: arg.event.extendedProps.mode=='text'? '#cad4fc' :'#cafcec' }} className="d-flex">

                            <div className="slotTimedisplay">
                              <div className="cancel_button">
                                <div
                                  style={{ textDecoration: 'underline' }}
                                // style={{ backgroundColor: '#EF3826', color: 'white', borderRadius: '5px', padding: '0px 3px' }}
                                >


                                  Delete
                                  {/* <img src={Images.cancel_icon} style={{ width: '20px' }} onClick={(e) => {
                                  setShow(true);
                                  setSlotId(arg.event.id)
                                }} /> */}
                                </div>
                              </div>
                            </div>

                            {/* <div className="" style={{}} >
                            </div> */}
                          </div>
                        );
                      }}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'timeGridDay,dayGridMonth,timeGridWeek'
                        }}
                      dayMaxEvents={2}
                      eventClick={(eventInfo) => {
                        console.log("Event clicked:", eventInfo.event);
                      }}
                      datesSet={(dateInfo) => {
                      }}
                      height="auto"
                    //   dateClick={handleDateClick}
                      dateClick={handleDateClickCustom}
                      dayCellDidMount={(info) => {
                        const dateStr = info.date.toISOString().split("T")[0];
                        if (selectedDates.includes(dateStr)) {
                          info.el.classList.add("selected-date");
                        }
                      }}
                      views={{
                        timeGridDay:{
                          buttonText: 'Day',
                        },
                        dayGridMonth: {
                          buttonText: 'Month', // Customize the month button text
                        },
                        timeGridWeek: {
                          buttonText: 'Week', // Customize the week button text
                        }
                      }}
                    />
                </div>
                <ToastContainer/>
            </div>
        </>
    )
}

export default TherapistAvailabilityScreen;
