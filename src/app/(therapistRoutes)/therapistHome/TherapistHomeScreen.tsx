'use client'
// import { Calendar } from 'fullcalendar';
import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';

const TherapistHomeScreen = () => {
    return (
        <>
        <div className='m-4' style={{margin: "20px"}}>Therapist home screen</div>
            <div className='m-8'>
            <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
          }}
          initialView='dayGridMonth'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          
          initialEvents={[
            { title: 'nice event', start: new Date(), resourceId: 'b' }
          ]}
        />
            </div>
        </>
    )
}

export default TherapistHomeScreen;
