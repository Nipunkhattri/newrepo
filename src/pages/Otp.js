import React from 'react';
import './Signup.css'
import logo from "../images/logo.png"
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Form, Link } from 'react-router-dom';

const Otp = () => {
    const newuser = useLocation();
    console.log(newuser);
    const navigate = useNavigate()
    // console.log(newuser.state.newuser)
    const submit = () => {
        const users = Object.assign(newuser.state.newuser)
        // console.log(user.state.user);
        console.log("Hii");
        navigate('/login',{state:{users}});
    }
    return (
        <div className='banner '>

            <div className='row g-0'>

                <div className="col-8 background-2 position-relative">
                    <h1 className='padding'><span><img src={logo} alt="" /></span></h1>

                    <div className='position-absolute  end-0 text'>
                        <p className='text-end small-header'>join medium</p>
                        <div className='header'>
                            <p className='mb-0'>ARCHITECTURE +</p>
                            <p>INTERIOR DESIGN</p>
                        </div>
                    </div>

                </div>

                <div className="col-4 d-flex ps-5">
                    <div>
                        <div className=' welcome-header'>
                            <h2 className='welcome'>OTP Verification</h2>
                            <p className='account-color'> <small>Enter OTP sent to your number</small></p>
                        </div>

                        <div className='pt-4'>
                            <form className=''>
                                <div class="mb-3">
                                    <label for="fname">OTP</label>
                                    <form method="get" class="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off">
                                        <input maxlength="1" className='box ms-0' type="tel" id="digit-1" name="digit-1" data-next="digit-2" />
                                        <input maxlength="1" className='box' type="tel" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" />
                                        <input maxlength="1" className='box' type="tel" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" />
                                        {/* <span class="splitter">&ndash;</span> */}
                                        <input maxlength="1" className='box' type="tel" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />
                                        <input maxlength="1" className='box' type="tel" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" />
                                        <input maxlength="1" className='box' type="tel" id="digit-6" name="digit-6" data-previous="digit-5" />
                                    </form>

                                </div>


                                <p className='text-center mb-0'><small>Didn't recieve the OTP ? <span className='log-in-color'>Resend</span></small></p>


                                <p className='text-center mt-5 continue-hover'><button type="button" onClick={submit} class="continue-button">Continue <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></p>
                            </form>

                        </div>
                    </div>
                </div>


            </div>
            {/* <p className='text-end py-5 pe-5'><span className='custom-border'>Skip</span> </p> */}


        </div>
    );
};

export default Otp;
