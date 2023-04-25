import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ResetPassword from "./components/ResetPassword";
import LandingPage from "./components/LandingPage";
import ChooseNewPassword from "./components/ChooseNewPassword";
import Dashboard from "./components/Dashboard";
import SelectedRecord from "./components/SelectedRecord";
import TrucksOnTheRoad from "./components/TrucksOnTheRoad";
import TruckDetails from "./components/TruckDetails";
import TitleOfTheTask from "./components/TitleOfTheTask";

import LastComments from "./components/LastComments";
import CompanyDetails from "./components/CompanyDetails";
import ConfirmLoading from "./components/ConfirmLoading";
import CommentNote from "./components/CommentNote";
import Tasks from "./components/Tasks";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="choosenewpassword" element={<ChooseNewPassword />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="selectedrecord" element={<SelectedRecord />} />
          <Route path="/trucksontheroad" element={<TrucksOnTheRoad />} />
          <Route path="/truckdetails" element={<TruckDetails />} />
          <Route path="titleofthetask" element={<TitleOfTheTask />} />
          <Route path="lastcomments" element={<LastComments />} />
          <Route path="companydetails" element={<CompanyDetails />} />
          <Route path="comfirmloading" element={<ConfirmLoading />} />
          <Route path="commentnote" element={<CommentNote />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
