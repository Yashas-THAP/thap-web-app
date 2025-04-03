
interface IBooking {
  id?: string
  bookingReferenceNumber?: string
  vehicleModel?: string
  visibleId?: string
  bookingDate?: string
  accountName?: string
  product?: string
  chargerType?: string
  installationType?: string
  expDeliveryDate?: string
  assignedTo?: string
  assignedFor?: string
  bookingStatus?: string
  priority?: string
  flag?: string
  draftStatus?: string
  irfId?: string
  customerName?: string
  customerPhone?: string
  circle?: string
  notes?: string
  irfNo?: string
  vinNo?: string
  bookingNo?: string
  accountNo?: string
  vehicleNo?: string
  chassisNo?: string
  customerNo?: string
  customerId?: string
  chargerSerialNo?: string
  partCode?: string
  siteId?: string
  siteName?: string
  scope?: IScope[]
  customerDetails?: ICustomerDetails
  siteDetails?: ISiteDetails
  appointmentDetails?: IAppointmentDetails
  accountDetails?: IAccountDetails
  lastAccessedAt?:string
  createTime?:string 
  irfGeneratedAt?: string
  creationMethod?: string
}

interface IAccountDetails {
  id?: string
  account?: string
  contactName?: string
  contactNumber?: string
  emailId?: string
  address?: IAddress
}
interface IScope {
  taskName: string
  owner: string
  taskList?: string[]
}

interface ICustomerDetails {
  customerAlternatePhone?: string
  customerEmailAddress?: string
  customerPhone?: string
  customerOrganisationName?: string
  line1?: string
  line2?: string
  city?: string
  state?: string
  country?: string
  postalCode?: string
  customerName?: string
}

interface ISiteDetails {
  spocName?: string
  spocContactNumber?: string
  spocAltContactNumber?: string
  spocEmailId?: string
  siteLine1?: string
  siteLine2?: string
  siteCity?: string
  siteState?: string
  siteCountry?: string
  sitePostalCode?: string
}
interface IAppointmentDetails {
  appointmentDate?: string
  notes?: string
}

interface IBulkUploadBookingForm {
  account: null | IReferenceData;
  product: null | IReferenceData;
  chargerType: null | IReferenceData;
  installationType: null | IReferenceData;
  fileName?: string;
  fileColumnNames?: string[] | null;
  expectedColumnNames?: string[] | null;
  columnsNamesMap?: Array<{
    key: string,
    value: { key: string, value: string, label: string } | null
  }>
}


type BookingsState = {
  bookingsLoader: boolean
  bookingsTableProps: ITableListProps
  bookings: null | IBooking[]
  bookingsCount: number
  bookingsListFetchTime: null | Date
  bookingsListRequestHash : string | null
  validatedBulkBookings: any[] | null
  bulkBookings: null | IBulkUploadBookingForm
  activeStep: number
};

type BookingsAction = {
  type: string;
  bookingsLoader: boolean
  bookingsTableProps: ITableListProps
  bookings: null | IBooking[]
  bookingsCount: number
  bookingsListFetchTime: null | Date
  bookingsListRequestHash : string | null
  validatedBulkBookings: unknown[] | null
  bulkBookings: null | IBulkUploadBookingForm
  activeStep: number
};

