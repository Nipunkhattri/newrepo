import React, { useState } from 'react'
import './Login.css'
import  {useNavigate}  from "react-router-dom";
import { useLocation } from 'react-router';
// import logo1 from "../images/logo1.png"
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../actions/auth.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const users = useLocation();
    console.log(users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email:"",
        password:"",
      });
    //   const data = useSelector((state)=>state.authreducers);
    //   console.log(data);
      const handleCred = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const submitform =()=>{
        const userdata = Object.assign(users.state.users,user)
        console.log(JSON.stringify(userdata));
        dispatch(signup((userdata),navigate));
    }
    const passw =()=>{
        const passwordInput = document.querySelector("#Pass")
        const eye = document.querySelector("#eye");
        eye.classList.toggle("fa-eye-slash")
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type)
    }

    return (
        <div className='banner4 '>
            <div className='row g-0'>
                <div className="col-8 background1 position-relative">
                    <h1 className='padding'><span><img src={logo} alt="" /></span></h1>
                    <div className='position-absolute  end-0 text'>
                        <p className='text-end small-header'>join medium</p>
                        <div className='header'>
                            <p className='mb-0'>ARCHITECTURE +</p>
                            <p>INTERIOR DESIGN</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div>
                        <div className=' welcome-header'>
                            <h2 className='welcome'>Welcome to panoram CGI</h2>
                            <p className='account-color'> <small>Fill profile details</small></p>
                        </div>

                <div className='pt-4'>
                    <form className='w-75'>
                        <div class="mb-3">
                            <label for="fname">Email Address</label>
                            <input className='form-input' type="email" id="email" name="email" placeholder="email address" onChange={handleCred}></input>
                        </div>
                        <div class="mb-3">
                            <label for="lname">Password</label>
                            <input className='form-input' type="password" id="Pass" name="password" placeholder="Password" onChange={handleCred}></input>
                            <i class="fa-solid fa-eye" id='eye' onClick={passw}></i>
                        </div>
                        <p className='text-center mb-0'><small><span className='log-in-color'>Please verify your email address</span></small></p>
                        <p className='text-center mt-5 continue-hover'><button type="button" class="continue-button" onClick={submitform}>Continue <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></p>
                    </form>

                        </div>
                    </div>
                </div>


            </div>
            {/* <p className='text-end py-5 pe-5'><span className='custom-border'>Skip</span> </p> */}


        </div>
    )
}

export default Login
