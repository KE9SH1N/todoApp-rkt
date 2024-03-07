import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState{
    bgColor:string;
}

const initialState:ColorState={
    bgColor:'#80e0ec'
}

const colorSlice = createSlice({
    name:'color',
    initialState,
    reducers:{
        changeColor(state,action: PayloadAction<string>){
            state.bgColor = action.payload;
        },
    },
});


export const {changeColor} = colorSlice.actions;
export default colorSlice.reducer;