import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface sesionType {
  topic?: string;
  sessions?: number;
  time?: string;
  sessionIntervel ?: number[],
  totalDays?: number;

}



export const sessionSlice = createSlice({
  name: "revision",
  initialState : {} as sesionType,
  reducers: {
    addTopic(state, action: PayloadAction<sesionType>) {
      state.topic = action.payload.topic
    },
    addSessionInterl(state, action: PayloadAction<sesionType>){
      state.sessionIntervel  = action.payload.sessionIntervel
    }
  },
});

export const actions = sessionSlice.actions;
