import { createSlice } from "@reduxjs/toolkit"


export const Slice = createSlice({
    name: 'valores',
    initialState:{
        bool: false,

    },
    reducers:{
        guardarNombre: (state, action)=>{
            state.bool = action.payload
        }
    }
})

export const {guardarNombre} = Slice.actions