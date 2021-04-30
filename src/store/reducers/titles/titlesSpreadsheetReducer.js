import { SET_SPREADSHEET_ROWS } from '../../actions/titles';

const defaultState = {
  rows: []
};

export default function titlesSpreadsheetReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SPREADSHEET_ROWS:
      return { ...state, rows: action.payload.rows };
    default:
      return state;
  }
}
