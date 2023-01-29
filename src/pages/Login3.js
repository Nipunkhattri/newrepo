import React, { useState } from 'react';
import './Signup.css'
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from "../actions/auth.js"

const Login3 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    console.log(location);
    console.log(location.state);
    const [pass ,setpass] = useState();
    console.log(pass)
    const obj = {
        password:pass
    }
    const handleForgotPass = () => {
        navigate("/forgotPass");
    }

    const handlePass = (event) => {
        event.preventDefault();
        // let password = event.target.password.value;
        // console.log(password);
        const newuser = Object.assign(location.state,obj);
        console.log(newuser);
        dispatch(login((newuser),navigate))
        // navigate("/login3");
    }

    return (
        <div className='banner '>
            <div className='row g-0'>
                <div className="col-8 background-4 position-relative">
                    <h1 className='padding'><span><img src={logo} alt="" /></span></h1>
                    <div className='position-absolute  end-0 text'>
                        <p className='text-end small-header'>join medium</p>
                        <div className='header'>
                            <p className='mb-0'>ARCHITECTURE +</p>
                            <p>INTERIOR DESIGN</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 ">
                    <div>
                        <div className=' welcome-header w-75 mx-auto'>
                            <h2 className='welcome'>Welcome Back !</h2>
                            <p className='account-color'> <small>Login to your account</small></p>
                        </div>
                        <div className='pt-4'>
                            <form onSubmit={handlePass} className='w-75 mx-auto'>
                                <div class="mb-3">
                                    <label for="fname">Enter password/OTP </label>
                                    <input className='form-input' type="text" id="fname" placeholder="password/OTP" name='password' onChange={(e)=>setpass(e.target.value)}></input>
                                </div>console.log(pass)
                                <p className='text-center mt-5 continue-hover'><button type="submit" class="continue-button" >Log In <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></p>
                                <p className='text-end mb-0'> <button className='skip-underline' onClick={handleForgotPass}><small><span className='log-in-color'>Forgot password?</span></small></button></p>
                            </form>

                        </div>
                    </div>
                </div>


            </div>
            {/* <p className='text-end py-5 pe-5'><span className='custom-border'>Skip</span> </p> */}


        </div>
    );
};

export default Login3;
