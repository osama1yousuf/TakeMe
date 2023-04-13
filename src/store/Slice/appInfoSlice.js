import { createSlice } from "@reduxjs/toolkit";
export const appInfoSlice = createSlice({
  name: "appInfo",
  initialState: {
    appInfo: {},
  },
  reducers: {
    addDetail(state, action) {
      state.appInfo = action.payload;
    },
  },
});

export const appInfoAction = appInfoSlice.actions;
export default appInfoSlice.reducer;
