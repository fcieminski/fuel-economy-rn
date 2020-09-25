import { createStore, combineReducers } from 'redux';
import fuellingReducer from './reducers/fuellingReducer';
import carReducer from './reducers/carReducer';
import noteReducer from './reducers/notesReducer';
import fixListReducer from './reducers/fixListReducer';

const rootReducer = combineReducers({
  fuelling: fuellingReducer,
  carInfo: carReducer,
  notesState: noteReducer,
  fixListState: fixListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
