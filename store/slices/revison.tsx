import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpandIcon } from "lucide-react";
interface sesionType{
    topic?:string,
    session?:string,
    time?:string
}
const initialState : sesionType ={
    topic:"",
    session:"",
    time:""
}

export const sessionSlice = createSlice({
    name:"revision",
    initialState,
    reducers:{
      addSession(state, action:PayloadAction<sesionType>){
        const { session, time, topic} = action.payload;
        state.session = session
        state.time = time;
        state.topic = topic
      }
    }
})

export const actions = sessionSlice.actions;