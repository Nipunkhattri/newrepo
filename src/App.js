import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup'
import Login from './pages/Login'
import Optional from './pages/Optional'
import Otp from './pages/Otp';
import Login2 from './pages/Login2';
import Login3 from './pages/Login3';
import ForgotPass from './pages/ForgotPass';
import ResetPass from './pages/ResetPass';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome';
import Notifications from './pages/Dashboard/Notifications';
import Tutorials from './pages/Dashboard/Tutorials';
import Profile from './pages/Dashboard/Profile';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup></Signup>}> </Route>
        <Route path='/optional' element={<Optional></Optional>}></Route>
        <Route path='/otpVerification' element={<Otp></Otp>}></Route>
        <Route path='/login2' element={<Login2></Login2>}></Route>
        <Route path='/login3' element={<Login3></Login3>}></Route>
        <Route path='/forgotPass' element={<ForgotPass></ForgotPass>}></Route>
        <Route path='/resetPass' element={<ResetPass></ResetPass>}></Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}>

          <Route index element={<DashboardHome></DashboardHome>}></Route>

          <Route path='notifications' element={<Notifications></Notifications>}></Route>
          <Route path='tutorials' element={<Tutorials></Tutorials>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>

        </Route>


        <Route exact path='/login' element={<Login />} />
        <Route exact path="/home" element={<Home />} />



      </Routes>
    </>
  );
}

export default App;
