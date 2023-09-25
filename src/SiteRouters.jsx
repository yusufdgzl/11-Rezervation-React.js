import { Route, Routes } from "react-router-dom";
import Rezervations from "./Pages/Rezervations";
import App from "./App";


const SiteRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/rezervations" element={<Rezervations />} />
      </Routes>
    </>
  );
};

export default SiteRouters;
