import React from 'react';
import './Dashboard.css'
import Project from '../../images/empty-box 1.png';


const DashboardHome = () => {
    return (
        <div className='bg-dashboard-home'>
            <h2 className='text-center pt-5'>Welcome Anim</h2>
            <p className='text-center projects-color'><small>Looks like you have no projects yet!</small></p>
            <p className='text-center pt-3'><button className='border-0 p-0 text-light'><span className='py-2 px-3 new-projects-bg'>New Project +</span></button></p>

            <div className='text-center pt-4'>
                <p><img src={Project} alt="" /></p>
            </div>
        </div>
    );
};

export default DashboardHome;