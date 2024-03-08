import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState{
    bgColor:string;
    color1:string;
    color2:string;
}

const initialState:ColorState={
    bgColor:'#80e0ec',
    color1: 'red',
    color2: 'blue',
}

const colorSlice = createSlice({
    name:'color',
    initialState,
    reducers:{
        changeColor(state,action: PayloadAction<string>){
            state.bgColor = action.payload;
            state.color1 = action.payload;
            state.color2 = action.payload;
        },
    },
});


export const {changeColor} = colorSlice.actions;
export default colorSlice.reducer;