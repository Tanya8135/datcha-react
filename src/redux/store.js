import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import modalbmSlice from './modalbmSlice';
// import persistTheme from './persistTheme';
import {
    persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const themePersistConfig = {
    key: 'theme',
    storage,
};

const themePersistedReducer = persistReducer(themePersistConfig, themeReducer);

const rootReducer = combineReducers({
    theme: themePersistedReducer,
    menu: modalbmSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme', 'menu'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);