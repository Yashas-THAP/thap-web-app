interface IColumnDimensions {
    width?: number | undefined;
    maxWidth?: number | undefined;
    minWidth?: number | undefined;
    flex?: number | undefined;
}
interface ITableColumnPrefrences {
    screen: 'salesOrder' | 'assets' | 'bookings' |'tasks'| 'users' | 'customers' | 'tickets'
    columnOrders: string[]
    columnDimensions: Record<string, IColumnDimensions> | undefined
    columnVisibilityModel: Record<string, boolean> | undefined
}


type GlobalState = {
    screenTableColumnPrefrences: ITableColumnPrefrences[]
    setupDefaultFilterConfig: boolean
    isSidePanelExpanded: boolean
};

type GlobalAction = {
    type: string
    setupDefaultFilterConfig: boolean
    screenTableColumnPrefrences: ITableColumnPrefrences[]
    isSidePanelExpanded: boolean
};
