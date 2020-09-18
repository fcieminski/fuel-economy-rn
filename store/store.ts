import { createStore, combineReducers } from 'redux';
import fuellingReducer from './reducers/fuellingReducer';
import carReducer from './reducers/carReducer';

const rootReducer = combineReducers({
  fuelling: fuellingReducer,
  carInfo: carReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
