import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    NumOfProducts: 0,
}

const NumOfProductsSlice = createSlice({
    name: "numPrd",
    initialState,
    reducers: {
        add: (state) =>{
            state.NumOfProducts += 1
        },
        rm: (state) =>{
            state.NumOfProducts -= 1
        },
        rmAll: (state, action) =>{
            state.NumOfProducts -= action.payload
        },
        addAll: (state, action) =>{
            state.NumOfProducts += action.payload  / 2
        }
    }
})

export default NumOfProductsSlice.reducer
export const {add, rm , rmAll, addAll} = NumOfProductsSlice.actions