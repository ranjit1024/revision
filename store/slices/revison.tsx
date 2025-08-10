import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface sessionType {
  topic?: string;
  sessions?: number;
  time?: string;
  sessionIntervel ?: number[],
  totalDays?: number;

}



export const sessionSlice = createSlice({
  name: "revision",
  initialState : {} as sessionType,
  reducers: {
    addTopic(state, action: PayloadAction<sessionType>) {
      state.topic = action.payload.topic
    },
    addSessionInterl(state, action: PayloadAction<sessionType>){
      state.sessionIntervel  = action.payload.sessionIntervel
    },
    addSessions(state, action: PayloadAction<sessionType>){
      state.sessions = action.payload.sessions
    },
    addTime(state,action:PayloadAction<sessionType>){
      state.time = action.payload.time;
    }
  },
});

export const actions = sessionSlice.actions;
