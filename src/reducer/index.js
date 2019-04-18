import { combineReducers } from 'redux';
import productReducer from './productReducer';
import metricReducer from './metricReducer';

const rootReducer = combineReducers({
    metricReducer,
    productReducer,
})

export default rootReducer;
