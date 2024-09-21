import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import modalbmSlice from './modalbmSlice';
import languageSlice from './languageSlice';
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

const languagePersistConfig = {
    key: 'language',
    storage,
}

const languagePersistedReducer = persistReducer(languagePersistConfig, languageSlice)

const rootReducer = combineReducers({
    theme: themePersistedReducer,
    menu: modalbmSlice,
    language: languagePersistedReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme', 'menu', "language"],
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