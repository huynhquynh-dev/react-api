import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

const appReducers = combineReducers({
    productsReducer
});

export default appReducers;