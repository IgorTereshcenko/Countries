import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const getTheme = () => {
    
    const theme = `${window?.localStorage?.getItem('theme')}`
    if (['light', 'dark'].includes(theme)) {
        return theme
    } 
  
    const userMedia = window.matchMedia('(prefers-color-scheme: light)')

    if (userMedia.matches) {
        return 'light'
    } else {
        return 'dark'
    }
      
}

const initialState = {
    theme: getTheme()
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        set: (state, action:PayloadAction<string>) => {
            state.theme = action.payload;
        },
    },
})

const {actions, reducer} = themeSlice;

export default reducer;
export const {set} = actions;