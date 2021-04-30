import { combineReducers } from 'redux';
import titlesSpreadsheetReducer from './titlesSpreadsheetReducer';

const rootReducer = combineReducers({
  spreadsheet: titlesSpreadsheetReducer
});

export default rootReducer;
