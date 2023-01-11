import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
    name: "darkMode",
    initialState: {
        darkMode : false
    },
    reducers : {
        changeDark : (state, action ) => {
          state.darkMode = !state.darkMode
        }
    }
})

export default darkSlice
export const DarkActions  = darkSlice.actions