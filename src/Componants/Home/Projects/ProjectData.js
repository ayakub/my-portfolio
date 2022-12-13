import React from 'react';

const ProjectData = ({ projectDet }) => {
    const { title, img, live_site } = projectDet
    return (
        <div className='bg-blue-500 px-8 py-4 rounded mt-10'>
            <h3 className='text-3xl text-white font-semibold text-center mb-3'>{title}</h3>
            <img src={img} alt='' className='h-48 rounded-md' />
            <div className='grid grid-cols-2 gap-6 mt-5'>
                <button className='btn btn-primary text-white'><a target="_blank" rel="noreferrer" href={live_site} >Live site</a></button>
                <button className='btn btn-primary text-white'>Details</button>
            </div>
        </div>
    );
};

export default ProjectData;