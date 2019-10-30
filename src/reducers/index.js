import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';



const rootReducer = combineReducers({
  isLoading,
  error: hasErrored
});

export default rootReducer;