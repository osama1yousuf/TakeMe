import { createSlice } from "@reduxjs/toolkit";
export const appInfoSlice = createSlice({
  name: "appInfo",
  initialState: {
    appInfo: {},
    showSideBar:true
  },
  reducers: {
    addDetail(state, action) {
      state.appInfo = action.payload;
    },
    sideBar(state ,action){
      state.showSideBar = action.payload
    }
  },
});

export const appInfoAction = appInfoSlice.actions;
export default appInfoSlice.reducer;
