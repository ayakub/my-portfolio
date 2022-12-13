import React, { useEffect, useState } from 'react';
import ProjectData from './ProjectData';

const Projects = () => {
    const [projectsDetails, setProjectsDetails] = useState([])
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjectsDetails(data))
    }, [])
    console.log(projectsDetails);
    return (
        <div className='mt-28'>
            <h3 className='text-4xl font-semibold text-primary text-center'>Projects</h3>
            <div className=' lg:px-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projectsDetails.map(projectsDet => <ProjectData
                        key={projectsDet.id}
                        projectDet={projectsDet}
                    >

                    </ProjectData>)
                }
            </div>

        </div>
    );
};

export default Projects;