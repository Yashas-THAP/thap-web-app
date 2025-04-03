interface IAvailability {
    id? : string
    therapistId? : string
    date : string
    time : string
    duration : string
    mode? : string
    cutoff : string
    status? : string
    cdate: string
}

interface Filter {
  key: 'startDate' | 'endDate' | 'mode' | 'duration'
  value: string 
}

type AvailabilityState = {
    availabilityLoader: boolean
    availabilityTableProps: ITableListProps
    availability: null | IAvailability[]
    availabilityCount: number
    availabilityFilter: Filter[] | null
  };
  
type AvailabilityAction = {
    type: string;
    availabilityLoader: boolean
    availabilityTableProps: ITableListProps
    availability: IAvailability[] | null
    availabilityCount: number
    availabilityFilter: Filter[] | null
  };