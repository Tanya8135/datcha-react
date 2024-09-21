import { createSlice } from "@reduxjs/toolkit";
// import { changeLanguage } from "i18next";

const initialState = {
    language: 'ua',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;