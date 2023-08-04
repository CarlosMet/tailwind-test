import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "./slice";

export default configureStore({
    reducer:{
        valor: Slice.reducer
    }
})