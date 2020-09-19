import { createStore, combineReducers } from 'redux';
import fuellingReducer from './reducers/fuellingReducer';
import carReducer from './reducers/carReducer';
import noteReducer from './reducers/notesReducer';

const rootReducer = combineReducers({
  fuelling: fuellingReducer,
  carInfo: carReducer,
  notesState: noteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
