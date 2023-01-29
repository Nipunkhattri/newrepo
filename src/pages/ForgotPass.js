import React, { useState } from 'react';
import './Signup.css'
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ForgotPass = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    console.log(email);
    const submit = (e) => {
        // console.log(user);
        e.preventDefault();
        const doc = document.querySelector(".reset");
        doc.style.display = "block";
        // navigate("/resetPass");
    }
    const handleGoBack = () => {
        navigate('/login3');
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
                <div className="col-4 ">
                    <div>
                        <div className=' welcome-header w-75 mx-auto'>
                            <h2 className='welcome'>forgot your password?</h2>
                            <p className='account-color'> <small>Enter your email address below and we’ll send you password reset instructions.</small></p>
                        </div>

                        <div className='pt-4'>
                            <form className='w-75 mx-auto'>
                                <div class="mb-3">
                                    <label for="fname">Email Address</label>
                                    <input className='form-input' type="text" id="fname" placeholder="johndoe@gmail.com" onChange={(e)=>setemail(e.target.value)}></input>

                                </div>
                                {/* <div class="mb-3">
                                    <label for="lname">Last Name</label>
                                    <input className='form-input' type="text" id="lname" placeholder="Your name" name='Lastname' onChange={handleCred}></input>

                                </div>
                                <div class="mb-3">
                                    <label for="cname">Company Name</label>
                                    <input className='form-input' type="text" id="cname" placeholder="Company name" name='companyname' onChange={handleCred}></input>

                                </div> */}




                                <p className='text-center mt-5 continue-hover'><button type="submit" class="continue-button" onClick={submit}>Email me reset instructions <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></p>

                                <p className='text-end mb-0'> <button className='skip-underline' onClick={handleGoBack}><small><span className='log-in-color go-back '>Never mind, go back</span></small></button></p>
                            </form>

                            <div className='pt-5 text-center mx-5'>
                                <p ><span className='reset'><FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon> Check your email for reset instructions </span> </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* <p className='text-end py-5 pe-5'><span className='custom-border'>Skip</span> </p> */}


        </div>
    );
};

export default ForgotPass;
