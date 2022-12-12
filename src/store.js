import { createStore, combineReducers } from 'redux';
//Persist Redux state over browser refresh
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { todos } from './todos/reducers';

/**
 * This is  the Global Store for Redux
 * Here is where the state of the components is stored
 */

//Remember the reducers is where the action performed by components will go
const reducers = {
    todos,
};

//Persist configure for browser refresh
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

//Put our redurces in a form that we can pass to the createStore() function
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
    createStore(
        persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    );