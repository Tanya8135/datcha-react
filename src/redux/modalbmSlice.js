import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isMenuOpen: false,
    isModalOpen: false,
}

const modalbmSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        toggleModal: (state) => {
            state.isModalOpen = !state.isModalOpen
        }
    }
})

export const { toggleMenu, toggleModal } = modalbmSlice.actions
export default modalbmSlice.reducer