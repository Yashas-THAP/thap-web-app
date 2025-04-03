interface IAppointments {
    id? : string
    therapistId? : string
    clientId? : string
    date : string
    time : string
    duration : string
    mode? : string
    meetLink? : string
    status? : string
    cdate: string
}

interface Filter {
  key: 'startDate' | 'endDate' | 'mode' | 'duration'
  value: string 
}

type AppointmentsState = {
    appointmentsLoader: boolean
    appointmentsTableProps: ITableListProps
    appointments: null | IAppointments[]
    appointmentsCount: number
    appointmentsFilter: Filter[] | null
  };
  
type AppointmentsAction = {
    type: string;
    appointmentsLoader: boolean
    appointmentsTableProps: ITableListProps
    appointments: IAppointments[] | null
    appointmentsCount: number
    appointmentsFilter: Filter[] | null
  };