import {applyMiddleware, compose, createStore} from "redux";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import crosstabSync from "./utils/crosstabSync"
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk)),
);

crosstabSync(store, persistConfig);

export const persistor = persistStore(store);
