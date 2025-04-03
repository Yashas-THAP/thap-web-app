interface IUser {
	email_address: string;
	id: string;
	mobile_number: string;
	name: string;
	role_id: string;
	circle:string;
}
interface ITableListProps {
	view: string,
	sortBy: string,
	sortOrder: string,
	pageSize: number,
	pageNumber: number,
	searchTerm?: string
}

interface ScreenSizeProp {
	width: number;
	height: number;
}

interface ScreenResolutionProp {
	result: boolean;
	val: string;
}

interface IHeaderActionButton {
	id: string;
	toolTipText?: string
	buttonText?: string
	iconClassName?: string
	headerActionBtnClick: (event) => void;
	isAccessible?: boolean
	badgeCount?: number
}

interface HeaderActionBtn {
	toolTipText: string;
	iconClassName: string;
	tooltipContainerClassName: string;
	buttonId: string;
	customTheme?: object;
	buttonText: string;
	btnClassName: string;
	handleClick: (event) => void;
	buttonVariant: string;
	isAccessible?: boolean
	badgeCount?: number
}

interface IAddress {
	line1?: string
	line2?: string
	city?: string
	state?: string
	country?: string
	postalCode?: string
}

interface IComment {
	id?: string
    feature?: string
    resourceId? : string,
    commentType? : ('Ticket' | 'Resolution' | 'Closure' | 'Activity')
	comment: string
	rating?: string
	attachments?: IDocument[]
	createdBy?: string
	createTime?: string
	assignedTo?: string
	appointmentAt?: string
	resolutionCode?: string
	performedBy?: string
	activityStatus?: string
	appointmentIndex?: number
}

interface IDocument {
	id?: string | null
    fileUrl?: string | null
	fileName?: string | null
	fileTitle?: string | null
	type?: string | null
	tag?: string | null
	cloudFileName?: string | null
	resourceId?: string | null
}
interface SideBarProps {
    expandSideBar: boolean,
    handleSidebarToggle?: Function
}

interface ReasonProps {
	showReasonDialog?:boolean
	rescheduleDate?: Date | null
	rescheduleReason?: string | null
	comment?:IComment | null
  }

 interface IBreadCrumb {
	objectType: 'link' | 'text'
	id: string,
	link?: string,
	btnText?: string
	linkBtnState?: object | null
	handleOnClick?: Function
	text?: string
  }
interface BreadCrumbObject {
	objecType: 'link' | 'text'
	linkBtnProps?: LinkButtonPropTypes
	textProps?: string
  }
interface CustomBreadCrumbsProps {
	containerId?: string
	containerClassName?: string
	breadCrumbs: BreadCrumbObject[]
  }

interface IScrollRedirection {
	text?: string
	color?: string
	containerId?: string
	show?: boolean
}

interface IActivityLog {
	id: string
	tag?: string,
	changedField?: string,
	changedTo?: string,
	changedFrom?: string,
	action?: string,
	feature?: string,
	doneBy: string,
	resourceId?: string,
	log?: string,
	loggedAt: string
}

interface IWorkOrderItem {
     id?: string
	 itemCode?: string | null
	 itemName?: string | null
	 label?:string
	 value?:string
	 unit?: string
	 unitPrice?: number
	 quantity?: number
	 totalPrice?: number
}

interface ITherapistLoginRequest {
	email : string
	password : string
}

interface IOpsUserLoginRequest {
	email : string
	password : string
}



