import { SET_PAGE_NUMBER, SET_SPREADSHEET_ROWS, SET_SPREADSHEET_SORT } from '../../actions/titles';

const defaultState = {
  rows: [],
  page: [],
  pageNumber: 1,
  perPage: 32,
  sortKey: 'title',
  sortDirection: 'ASC'
};

export default function titlesSpreadsheetReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.payload.pageNumber };
    case SET_SPREADSHEET_SORT:
      return {
        ...state,
        sortKey: action.payload.sortKey,
        sortDirection: action.payload.sortDirection,
      };
    case SET_SPREADSHEET_ROWS:
      return { ...state, rows: action.payload.rows };
    default:
      return state;
  }
}
