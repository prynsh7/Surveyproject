import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from './component/Dashboard';
import AdminLogin from './Pages/Login/AdminLogin';
import AddPatientPage from './Pages/Faculty/AddPatientPage';
import ViewPatient from './Pages/Faculty/ViewPatient/ViewPatient';
import EditPatient from './Pages/Faculty/EditPatient/EditPatient';
import DashboardFaculty from './component/FacultyPanel/Dashboard/Dashboard';

function App() {
  return (
    <div className="App"> 


    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/login" element={<AdminLogin />}></Route>
      <Route path="/patientadd/:id" element={<AddPatientPage />}></Route>
      <Route path="/patientview/:id" element={<ViewPatient />}></Route>
      <Route path="/patient/:id" element={<EditPatient />}></Route>
      <Route path="/faculty" element={<DashboardFaculty />}></Route>
    </Routes>

    
  
    </div>
  );
}

export default App;
