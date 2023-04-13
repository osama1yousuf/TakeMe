import { configureStore } from "@reduxjs/toolkit";
import appInfoSlice from "./Slice/appInfoSlice";
export const store = configureStore({
  reducer: {
    appInfo: appInfoSlice,
  },
});
