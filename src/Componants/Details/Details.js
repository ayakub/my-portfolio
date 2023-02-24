import React from 'react';
import { useLoaderData } from 'react-router-dom';
import background from '../../assests/bg.jpg'

const Details = () => {
    const projectDetails = useLoaderData();
    const { img, live_site, client_code, server_code, img1, img2, img3, img4, img5, tech1, tech2, tech3, tech4, tech5, title, description } = projectDetails
    console.log(projectDetails);
    return (

        <div style={{ backgroundImage: `url('${background}')` }} className="p-5 md:p-20">
            <h4 className='text-4xl font-semibold text-primary text-center'>{title}</h4>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 '>
                <img className='h-48 w-full roun rounded-md' src={img} alt="" />
                <img className='h-48 w-full roun rounded-md' src={img1} alt="" />
                <img className='h-48 w-full roun rounded-md' src={img2} alt="" />
                <img className='h-48 w-full roun rounded-md' src={img3} alt="" />
                <img className='h-48 w-full roun rounded-md' src={img4} alt="" />
                <img className='h-48 w-full roun rounded-md' src={img5} alt="" />
            </div>
            <div className='grid gap-20 grid-cols-1 md:grid-cols-2 p-10 justify-center items-center bg-blue-700 rounded'>
                <div className=''>
                    <h2 className='text-2xl text-white'>{description}</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <h2 className='text-primary font-semibold text-2xl mb-3'>Technology</h2>
                        <li className='text-primary'> <span className='text-white'>{tech1}</span></li>
                        <li className='text-primary'> <span className='text-white'>{tech2}</span></li>
                        <li className='text-primary'> <span className='text-white'>{tech3}</span></li>
                        <li className='text-primary'> <span className='text-white'>{tech4}</span></li>
                        <li className='text-primary'> <span className='text-white'>{tech5}</span></li>
                    </div>
                    <div className='grid grid-cols-1 mt-5 md:mt-0'>
                        <button className='btn btn-primary text-white mb-5'><a href={live_site} >Live Site</a></button>
                        <button className='btn btn-primary text-white mb-5'><a href={client_code}>Github client</a></button>
                        <button className='btn btn-primary text-white'><a href={server_code}>Github client</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;