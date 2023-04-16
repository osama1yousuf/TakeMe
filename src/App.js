import "./App.css";
import CategoryWiseProd from "./pages/CategoryWiseProd";
import { apihelp } from "./config";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import appInfo from "../src/assets/data/appInfo.json";
import { appInfoAction } from "./store/Slice/appInfoSlice";
import {Routes , Route} from 'react-router-dom'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import SallerCategary from "./pages/SallerCategary";
function App() {
  const dispatch = useDispatch();
  dispatch(appInfoAction.addDetail(appInfo));

  return (
    <Routes>
      <Route path="/" element={<CategoryWiseProd /> } />
      <Route path="/about" element={<About/>} />
      <Route path="/termcondition" element={<PrivacyPolicy/>} />
      <Route path="/sallercategary" element={<SallerCategary/>} />
    </Routes>
  );
}

export default App;
