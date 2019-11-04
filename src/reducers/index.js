import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { exoplanets } from './exoplanets';
import { user } from './user';
import { filters } from './filters';

const rootReducer = combineReducers({
  isLoading,
  error: hasErrored,
  exoplanets,
  user,
  filters
});

export default rootReducer;