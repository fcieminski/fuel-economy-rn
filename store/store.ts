import { createStore, combineReducers } from 'redux';
import fuelingReducer from './reducers/fuelingReducer';

const rootReducer = combineReducers({
  fueling: fuelingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
