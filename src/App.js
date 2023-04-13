import "./App.css";
import CategoryWiseProd from "./pages/CategoryWiseProd";
import { apihelp } from "./config";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import appInfo from "../src/assets/data/appInfo.json";
import { appInfoAction } from "./store/Slice/appInfoSlice";
// import appInfoSlice from "./store/Slice/appInfoSlice";
function App() {
  const dispatch = useDispatch();
  dispatch(appInfoAction.addDetail(appInfo));

  return (
    <>
      <CategoryWiseProd />
    </>
  );
}

export default App;
