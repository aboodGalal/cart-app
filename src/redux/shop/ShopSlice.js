import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    prds:[],
    boolean: false,
    smBoolean: true,
    total: 0,
}

const ShopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        push: (state, action) => {
            return {
              ...state,
              prds: [...state.prds, action.payload]
            }
          },
        remove: (state, action) =>{
            state.prds = Array.from(new Set(state.prds.filter((x) => x.id !== action.payload ? x : null)));
        },
        bigTr: (state) =>{
            state.boolean = true
        },
        bigFl: (state) =>{
            state.boolean = false
        },
        smTr: (state) =>{
            state.smBoolean = false
        },
        smFl: (state) =>{
            state.smBoolean = true
        },
        addTotal:(state, action) => {
            state.total += action.payload
        },
        rmTotal:(state, action) => {
            state.total -= action.payload
        },
        eqTotal:(state, action) => {
            state.total === action.payload
        },
    }
})

export default ShopSlice.reducer
export const {push, remove, bigTr, bigFl, smTr, smFl, addTotal, rmTotal,eqTotal} = ShopSlice.actions