import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading:false,
    user:[],
    error:'',
}

export const fetchUser= createAsyncThunk('user/fetchUsers',() =>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        return response.data.map((user) => user.id)
    })
})
const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:(builder) =>{
    builder.addCase(fetchUser.pending, state =>{
        state.loading=true;
    })
    builder.addCase(fetchUser.fulfilled,(state,action) => {
      state.loading=false;
      state.user=action.payload;
      state.error='';
    })
    builder.addCase(fetchUser.rejected,(state,action) => {
        state.loading=false;
        state.user=[];
        state.error=action.error.message;
    })
    }
});

export default userSlice.reducer;