import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    loading: false,
    data: [],
    error: "",
}


export const fetchUsers = createAsyncThunk("user/fetchUsers", async () =>{
    const res = await axios.get('https://fakestoreapi.com/products');
    const data = res.data.map((product) => ({
        ...product,
        smBoolean2: false, // add the new property here
      }));
      return data;
})


const productsSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (biulder) =>{
        biulder.addCase(fetchUsers.pending, (state) =>{
            state.loading = true
        });
        biulder.addCase(fetchUsers.fulfilled, (state, action) =>{
            state.loading = false
            state.data = action.payload
            state.error = ""
        });
        biulder.addCase(fetchUsers.rejected, (state, action) =>{
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export default productsSlice.reducer