import axios from 'axios';
import { flipDirection, sortPropAZ } from '../../../util/sort';

export const SET_SPREADSHEET_ROWS = 'SET_SPREADSHEET_ROWS';
export const SET_SPREADSHEET_SORT = 'SET_SPREADSHEET_SORT';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';

export const setSpreadsheetRows = (rows) => ({
  type: SET_SPREADSHEET_ROWS,
  payload: { rows }
});

export const setSpreadsheetSort = (sortKey, sortDirection) => ({
  type: SET_SPREADSHEET_SORT,
  payload: { sortKey, sortDirection }
});

export const setPageNumber = (pageNumber) => ({
  type: SET_PAGE_NUMBER,
  payload: { pageNumber }
});

export const fetchTitles = () => (dispatch) => axios.get('/titles/all')
  .then((res) => dispatch(setSpreadsheetRows(res.data || [])))
  .catch((err) => console.log(err));

const handleSortKey = (key, rows) => {
  switch (key) {
    case 'authors':
    case 'titles':
    case 'subjects':
      // TODO
      return rows;
    default:
      return sortPropAZ(rows, key);
  }
};

export const sortTitles = (key) => (dispatch, getState) => {
  const { sortKey, sortDirection, rows } = getState().titles.spreadsheet;
  const direction = key === sortKey ? flipDirection(sortDirection) : sortDirection;

  console.log(key, direction);
  const sorted = handleSortKey(key, rows);

  return Promise.resolve(dispatch(setSpreadsheetRows(
    direction === 'DESC' ? sorted.reverse() : sorted
  )))
    .then(() => dispatch(setSpreadsheetSort(key, direction)))
    .catch((err) => console.log(err));
};
