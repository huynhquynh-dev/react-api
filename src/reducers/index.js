import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    productsReducer,
    itemEditing
});

export default appReducers;