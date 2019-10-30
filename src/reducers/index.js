import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { exoplanets } from './exoplanets';

const rootReducer = combineReducers({
  isLoading,
  error: hasErrored,
  exoplanets
});

export default rootReducer;