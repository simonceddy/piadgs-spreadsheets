import { SET_SPREADSHEET_ROWS } from '../../actions/titles';

const defaultState = {
  rows: [],
  page: [],
  pageNumber: 1,
  perPage: null,
  sortKey: 'title',
  sortDirection: 'ASC'
};

export default function titlesSpreadsheetReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SPREADSHEET_ROWS:
      return { ...state, rows: action.payload.rows };
    default:
      return state;
  }
}
