import {combineReducers} from 'redux';
import {uiReducer} from '../reducers/ui.reducer';
import {inscriptionReducer} from '../reducers/inscription.reducer';

export const rootReducer = combineReducers({
  uiReducer,
  inscriptionReducer,
});
