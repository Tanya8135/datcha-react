import { createSlice } from "@reduxjs/toolkit";
// import { changeLanguage } from "i18next";

const initialState = {
    language: 'ua',
    isActive: false,
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
            state.isActive = action.payload === 'ru';
        },
    },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;