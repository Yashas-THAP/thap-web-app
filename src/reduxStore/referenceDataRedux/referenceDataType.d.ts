interface IReferenceData {
    id: string
    label: string
    value: string
    defaultOption?: boolean
    partCode?: string
    impact?: string
    urgency?: string
    keyField?: string
    scopeModifiability?: string
    type?: string
}
interface IFilterKeyRefData {
    id: string
    label: string
    inputType: ('dropdown' | 'date' | 'input')
    operators: IReferenceData[]
}

interface ITicketCategoryRefData {
    id: string
    label: string
    categories?: ITicketCategoryRefData[]
    subCategories?: ITicketCategoryRefData[]
}

interface IUserRefData {
    id: string
    label: string
    value: string
    name: string
    email: string
    mobileNumber: string
    circle: string[]
    role: string
    status: string
    profilePictureUrl: string
    manager: string
    address: IAddress
}

interface IWorkOrderItemsRefData {
    currency: string
    items: IWorkOrderItem[]
}

type ReferenceDataState = {
    filterKeyRefData: null | Map<string, IFilterKeyRefData[]>
    accountRefData: null | IReferenceData[]
    customerRefData: null | IReferenceData[]
    assetStatusRefData: null | IReferenceData[]
    salesOrderNoRefData: null | IReferenceData[]
    warrantyStatusRefData: null | IReferenceData[]
    bookingStatusRefData: null | IReferenceData[]
    productRefData: null | IReferenceData[]
    chargerTypeRefData: null | IReferenceData[]
    installationTypeRefData: null | IReferenceData[]
    dispatchRefData: null | IReferenceData[]
    salesOrderStatusRefData: null | IReferenceData[]
    circleRefData: null | IReferenceData[]
    assigneeRefData: null | IUserRefData[]
    userRefData: null | IUserRefData[]
    taskStatusRefData: null | IReferenceData[]
    chargerSerialNoRefData: null | IReferenceData[]
    ticketStatusRefData: null | IReferenceData[]
    rolesRefData: null | IReferenceData[]
    ticketCategoryMapRefData: null | ITicketCategoryRefData[]
    priorityRefData: null | IReferenceData[]
    ticketActivityStatusRefData: null | IReferenceData[]
    ticketsCallTypeRefData: null | IReferenceData[]
    ticketsCategoryRefData: null | IReferenceData[]
    ticketsSubCategoryRefData: null | IReferenceData[]
    ticketsAssetsRefData: null | IReferenceData[]
    ticketsResolutionCodeRefData: null | IReferenceData[]
    ticketUrgencyRefData: null | IReferenceData[]
    ticketImpactRefData: null | IReferenceData[]
    ticketPriorityRefData: null | IReferenceData[]
    customerConsentRefData: null | IReferenceData[]
    ticketResponseRefData: null | IReferenceData[]
    accountUsersRefData: null | IReferenceData[]
    workOrderItemsRefData: null | IWorkOrderItemsRefData

};

type ReferenceDataAction = {
    type: string
    filterKeyRefData: null | Map<string, IFilterKeyRefData[]>
    accountRefData: null | IReferenceData[]
    customerRefData: null | IReferenceData[]
    assetStatusRefData: null | IReferenceData[]
    salesOrderNoRefData: null | IReferenceData[]
    warrantyStatusRefData: null | IReferenceData[]
    bookingStatusRefData: null | IReferenceData[]
    productRefData: null | IReferenceData[]
    chargerTypeRefData: null | IReferenceData[]
    installationTypeRefData: null | IReferenceData[]
    dispatchRefData: null | IReferenceData[]
    salesOrderStatusRefData: null | IReferenceData[]
    circleRefData: null | IReferenceData[]
    assigneeRefData: null | IUserRefData[]
    userRefData: null | IUserRefData[]
    taskStatusRefData: null | IReferenceData[]
    chargerSerialNoRefData: null | IReferenceData[]
    ticketStatusRefData: null | IReferenceData[]
    rolesRefData: null | IReferenceData[]
    accountUsersRefData: null | IReferenceData[]
    ticketCategoryMapRefData: null | ITicketCategoryRefData[]
    priorityRefData: null | IReferenceData[]
    ticketActivityStatusRefData: null | IReferenceData[]
    ticketsCallTypeRefData: null | IReferenceData[]
    ticketsCategoryRefData: null | IReferenceData[]
    ticketsSubCategoryRefData: null | IReferenceData[]
    ticketsAssetsRefData: null | IReferenceData[]
    ticketsResolutionCodeRefData: null | IReferenceData[]
    ticketUrgencyRefData: null | IReferenceData[]
    ticketImpactRefData: null | IReferenceData[]
    ticketPriorityRefData: null | IReferenceData[]
    customerConsentRefData: null | IReferenceData[]
    ticketResponseRefData: null | IReferenceData[]
    workOrderItemsRefData: null | IWorkOrderItemsRefData
};
