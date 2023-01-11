import { configureStore } from "@reduxjs/toolkit";
import darkSlice from "./DarkMode";

const store = configureStore({
    reducer : {
      "dark" : darkSlice.reducer
    }
})

export default store