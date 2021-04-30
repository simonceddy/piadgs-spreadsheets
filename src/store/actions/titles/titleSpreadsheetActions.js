import axios from 'axios';

export const SET_SPREADSHEET_ROWS = 'SET_SPREADSHEET_ROWS';

export const setSpreadsheetRows = (rows) => ({
  type: SET_SPREADSHEET_ROWS,
  payload: { rows }
});

export const fetchTitles = () => (dispatch) => {
  console.log('fetching data');
  return axios.get('/titles/all')
    .then((res) => dispatch(setSpreadsheetRows(res.data || [])))
    .catch((err) => console.log(err));
};
