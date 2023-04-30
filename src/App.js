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
import LastLoggedInUsers from "./components/LastLoggedInUsers";
import LastComments from "./components/LastComments";
import CompanyDetails from "./components/CompanyDetails";
import ConfirmLoading from "./components/ConfirmLoading";
import CommentNote from "./components/CommentNote";
import Tasks from "./components/Tasks";
import TrucksPendingLoading from "./components/TrucksPendingLoading";
import DetailsOfTheTask from "./components/DetailsOfTheTask";
import UnloadedTrucks from "./components/UnloadedTrucks";
import TaskForm from "./components/TaskForm";
import Transporters from "./components/Transporters";
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
          <Route
            path="/truckspendingloading"
            element={<TrucksPendingLoading />}
          />
          <Route path="titleofthetask" element={<TitleOfTheTask />} />
          <Route path="lastcomments" element={<LastComments />} />
          <Route path="/lastloggedinusers" element={<LastLoggedInUsers />} />
          <Route path="companydetails" element={<CompanyDetails />} />
          <Route path="confirmloading" element={<ConfirmLoading />} />
          <Route path="commentnote" element={<CommentNote />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/detailsofthetask" element={<DetailsOfTheTask />} />
          <Route path="/unloadedtrucks" element={<UnloadedTrucks />} />
          <Route path="/taskform" element={<TaskForm />} />
          <Route path="/transporters" element={<Transporters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
