import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface sessionType {
  topic?: string;
  sessions?: number;
  time?: string ;
  sessionIntervel?: number[];
  totalDays?: number;
  id?:string
}

export const sessionSlice = createSlice({
  name: "revision",
  initialState: {} as sessionType,
  
  reducers: {
    addTopic(state, action: PayloadAction<sessionType>) {
      state.topic = action.payload.topic;
    },
    addSessionInterl(state, action: PayloadAction<sessionType>) {
      state.sessionIntervel = action.payload.sessionIntervel;
    },
    addSessions(state, action: PayloadAction<sessionType>) {
      state.sessions = action.payload.sessions;
    },
    addTime(state, action: PayloadAction<sessionType>) {
      state.time = action.payload.time;
    },
    addTotalDays(state, action: PayloadAction<sessionType>) {
      state.totalDays = action.payload.totalDays;
    },
    addsessionId(state, action:PayloadAction<sessionType>){
      state.id = action.payload.id;
    }
  },
});

export const actions = sessionSlice.actions;
