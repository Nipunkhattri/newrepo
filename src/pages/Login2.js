import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Signup.css'
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login2 = () => {
    const navigate = useNavigate();
    // const data = useSelector((state)=>state.authreducers);
    const [email ,setstate] = useState({});
    console.log(email);
    const dispatch = useDispatch();
    // console.log(data);
    const sendEmail = (event) => {
        event.preventDefault();
        let emailOrphone = event.target.emailOrphone.value;
        console.log(emailOrphone);
        navigate("/login3",{state:{email}});
    }

    const handleSignUp = () => {
        navigate('/')
    }

    return (
        <div className='banner '>
            <div className='row g-0'>
                <div className="col-8 background-3 position-relative">
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
                            <form onSubmit={sendEmail} className='w-75 mx-auto'>
                                <div className="mb-3">
                                    <label for="fname">Email Address/Phone Number</label>
                                    <input className='form-input' type="text" id="fname" placeholder="placeholder" name='emailOrphone' onChange={(e)=>setstate(e.target.value)} ></input>

                                </div>


                                <p className='text-center mb-0'><small>Don’t have an account? <span><button onClick={handleSignUp} className='sign-up p-0'>Sign Up</button ></span></small></p>


                                <p className='text-center mt-5 continue-hover'><button type="submit" className="continue-button " >Log In <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></p>
                            </form>

                        </div>
                    </div>
                </div>


            </div>
            {/* <p className='text-end py-5 pe-5'><span className='custom-border'>Skip</span> </p> */}


        </div>
    );
};

export default Login2;
