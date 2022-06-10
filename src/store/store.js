import { combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from './userReducer';
import { proyectoReducer } from './proyectoReducer';

const middlewares=applyMiddleware(thunk,logger);
const rootReducer=combineReducers({userReducer,proyectoReducer});

export const store=createStore(rootReducer,middlewares);