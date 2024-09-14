// import { createSelector } from '@reduxjs/toolkit';

export const selectTheme = (state) => state.theme.theme;

export const selectIsMenuOpen = (state) => state.menu.isMenuOpen;
export const selectIsModalOpen = (state) => state.menu.isModalOpen;