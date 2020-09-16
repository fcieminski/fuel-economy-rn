import { createStore, combineReducers } from 'redux';
import fuellingReducer from './reducers/fuellingReducer';

const rootReducer = combineReducers({
  fuelling: fuellingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
