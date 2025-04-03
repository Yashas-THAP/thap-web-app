import { globalActions } from '../reduxExports';

const screens = ['salesOrder' , 'assets' , 'bookings', 'tasks','tickets','users','customers'];
const initialObject = {
  columnOrders: [],
  columnDimensions: undefined,
  columnVisibilityModel: undefined
};

export const userTableColumnPrefrencesInitialState: ITableColumnPrefrences[] = screens.map(screen => ({
  screen,
  ...initialObject
} as ITableColumnPrefrences));


const globalDataInitialState: GlobalState = {
  screenTableColumnPrefrences: userTableColumnPrefrencesInitialState,
  setupDefaultFilterConfig: true,
  isSidePanelExpanded: false
};

const globalReducer = (state: GlobalState = globalDataInitialState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case globalActions.SET_TABLE_COLUMN_PREFRENCES:
      return {
        ...state,
        screenTableColumnPrefrences: action.screenTableColumnPrefrences
      }
    case globalActions.SET_DEFAULT_FILTER_CONFIG_FLAG:
      return {
        ...state,
        setupDefaultFilterConfig: action.setupDefaultFilterConfig
      }
    case globalActions.SET_IS_SIDE_PANEL_EXPANDED:
      return {
        ...state,
        isSidePanelExpanded: action.isSidePanelExpanded
      }
    default:
      return state;
  }
};


export default globalReducer;
