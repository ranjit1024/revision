import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface sesionType {
  topic?: string;
  sessions?: number[];
  time?: string;
  sessionIntervel ?: number[],
  totalDays?: string;

}

const initialState: sesionType = {
  topic: "",
  sessions: [],
  time: "",
  sessionIntervel: [],
  totalDays: "",
};

export const sessionSlice = createSlice({
  name: "revision",
  initialState,
  reducers: {
    addSession(state, action: PayloadAction<sesionType>) {
      const { sessions, time, topic, sessionIntervel, totalDays } = action.payload;
      state.sessions = sessions;
      state.time = time;
      state.topic = topic;
      state.sessionIntervel = sessionIntervel;
      state.totalDays = totalDays;
    },
  },
});

export const actions = sessionSlice.actions;
