import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { hasErrored } from './hasErrored';
import { exoplanets } from './exoplanets';
import { user } from './user';

const rootReducer = combineReducers({
  isLoading,
  error: hasErrored,
  exoplanets,
  user
});

export default rootReducer;