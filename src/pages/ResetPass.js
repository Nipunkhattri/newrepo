import React, { useState } from 'react';
import './Signup.css'
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ResetPass = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        Firstname: "",
        Lastname: "",
        companyname: ""
    });
    const handleCred = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const submit = () => {

        console.log(user);

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
                            <h2 className='welcome'>log in to panoram CGI</h2>
                            <p className='account-color'> <small>Enter new password</small></p>
                        </div>

                        <div className='pt-4'>
                            <form className='w-75 mx-auto'>
                                <div class="mb-3">
                                    <label for="fpass">Enter new password</label>
                                    <input className='form-input' type="text" id="fpass" placeholder="password" name='password' onChange={handleCred}></input>

                                </div>

                                <div class="mb-3">
                                    <label for="fpass">Confirm password</label>
                                    <input className='form-input' type="text" id="fpass" placeholder="password" name='password' onChange={handleCred}></input>

                                </div>

                                <p className='text-center mt-5 continue-hover'><button type="submit" class="continue-button" onClick={submit}>Save password <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></p>


                            </form>


                        </div>
                    </div>
                </div>


            </div>
            {/* <p className='text-end py-5 pe-5'><span className='custom-border'>Skip</span> </p> */}


        </div>
    );
};

export default ResetPass;
