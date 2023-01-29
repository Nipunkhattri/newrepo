import React, { useState } from 'react';
import './Signup.css'
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Optional from './Optional'

const Signup = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        first_name:"",
        last_name:"",
        company_name:""
    });
    const handleCred = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const submit = () => {
        console.log(user);
        history("/optional",{state:{user}});
    }
    const handleLogin = () => {
        history('/login2')
    }

    return (
        <div className='banner '>
            <div className='row g-0'>
                <div className="col-8 background position-relative">
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
                            <p className='account-color'> <small>Create your account</small></p>
                        </div>

                        <div className='pt-4'>
                            <form className='w-75'>
                                <div class="mb-3">
                                    <label for="fname">First Name</label>
                                    <input className='form-input' type="text" id="fname" placeholder="Your name"  name='first_name' onChange={handleCred}></input>

                                </div>
                                <div class="mb-3">
                                    <label for="lname">Last Name</label>
                                    <input className='form-input' type="text" id="lname" placeholder="Your name" name='last_name'  onChange={handleCred}></input>

                                </div>
                                <div class="mb-3">
                                    <label for="cname">Company Name</label>
                                    <input className='form-input' type="text" id="cname" placeholder="Company name"  name='company_name' onChange={handleCred}></input>

                                </div>

                                <p className='text-center mb-0'><small>Already have an account ? <span className='log-in-color'><button onClick={handleLogin} className='sign-up p-0'>Log In</button></span></small></p>


                                <p className='text-center mt-5 continue-hover'><button type="submit" class="continue-button" onClick={submit}>Continue <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></p>
                            </form>

                        </div>
                    </div>
                </div>


            </div>
            {/* <p className='text-end py-5 pe-5'><span className='custom-border'>Skip</span> </p> */}


        </div>
    );
};

export default Signup;
