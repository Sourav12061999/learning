import { createSlice } from "@reduxjs/toolkit";

const initialState={
    noOfIcecream:15,
};
const icecreamSlice = createSlice({
    name:"ICECREAM",
    initialState,
    reducers:{
        ordered:(state,action) =>{
          state.noOfIcecream-=action.payload || 1
        },
        restock:(state,action) =>{
            state.noOfIcecream+=action.payload || 1
        }
    }
})

export default icecreamSlice.reducer;
export const {ordered,restock} = icecreamSlice.actions;