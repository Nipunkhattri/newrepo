import React, { useEffect, useState } from 'react';
import './Signup.css'
import logo from "../images/logo.png"
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { formatPhoneNumber } from 'react-phone-number-input';
import { formatPhoneNumberIntl } from 'react-phone-number-input';

const Optional = () => {

    const [value, setValue] = useState('')
    const [hear, sethear] = useState('')
    const navigate = useNavigate()
    const user = useLocation();
    console.log(user);
    console.log(value);
    console.log(hear);
    const obj ={
        mobile_number:value,
        heard_from:hear
    }
    // let newuser = {};
    // useEffect(()=>{
        // },[obj])
    const handleSkip = () => {
        const newuser = Object.assign(user.state.user,obj)
        // console.log(user.state.user);
        // console.log("Hii");
        navigate('/otpVerification',{state:{newuser}});
    }
    return (
        <div className='banner '>

            <div className='row g-0'>

                <div className="col-8 background-1 position-relative">
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
                        <p className='text-end pt-4'><button className='skip-underline'><span className='underline'>SKIP</span></button></p>

                        <div className=' welcome-header-2'>
                            <h2 className='welcome'>Welcome to panoram CGI</h2>
                            <p className='account-color'> <small>Create your account</small></p>
                        </div>

                        <div className='pt-4 '>
                            <form className='w-75'>
                                <div class="mb-3">
                                    <label for="fname">Phone Number</label>

                                    {/* <input className='form-input' type="tel" id="phone" name="phone" placeholder="Your number" required></input> */}
                                    <PhoneInput className='form-input'
                                        value={`${formatPhoneNumberIntl(value)}` + value} onChange={value => setValue(value)}></PhoneInput>

                                    {/* {
                                        value && <input defaultValue={`${formatPhoneNumberIntl(value)}`} className='form-input' type="number" id="lname" name="lastName" placeholder="" required></input>
                                    } */}


                                </div>
                                <div class="mb-3">
                                    <p className='mb-0'><label for="lname">How did you hear about us?</label></p>
                                    <input className='form-input' type="text" id="lname" value={hear} onChange={e => sethear(e.target.value)} required></input>
                                </div>


                                {/* <p className='text-center mb-0'><small>Already have an account ? <span className='log-in-color'>Log In</span></small></p> */}


                                <p className='text-center mt-5 continue-hover'><button type="button" onClick={handleSkip} class="continue-button">Continue <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></p>
                            </form>

                        </div>
                    </div>
                </div>


            </div>
            {/* <p className='text-end py-5 pe-5'><span className='custom-border'>Skip</span> </p> */}


        </div>
    );
};

export default Optional;