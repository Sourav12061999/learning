const createSlice = require("@reduxjs/toolkit").createSlice;

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

module.exports=icecreamSlice.reducer;
module.exports.icecreamActions=icecreamSlice.actions;