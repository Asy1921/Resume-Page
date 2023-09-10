import { createSlice } from "@reduxjs/toolkit";
const initialState={
    aqiVal:0,
}
export const aqiSlice=createSlice({
    name:'aqi',
    initialState,
    reducers:{
        setAqi:(state,action)=>{
            state.aqiVal=action.payload
        }
    }
})
export const {setAqi}=aqiSlice.actions
export default aqiSlice.reducer