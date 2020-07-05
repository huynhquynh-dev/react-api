import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
    appReducers,
    compose(
        applyMiddleware(
            /* ----  middlewares ----  */
            thunk
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

export default store;

