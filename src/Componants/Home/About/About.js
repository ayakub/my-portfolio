import React from 'react';
import Lottie from "lottie-react"
import animation from './aboutme.json'

const About = () => {
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:px-20 items-center'>
            <div>
                <h3 className='text-5xl mt-5 font-semibold text-primary text-center'>Who I am</h3>
                <p className='text-white'>I'm Md. Ayakub Ali. I have 1 year learn experience in in HTML, CSS, Bootstrap, Tailwind, JavaScript, ReactJS,firebase, NextJS, Redux, NodeJS, ExpressJS and MongoDB </p>
            </div>
            <div>
                <Lottie animationData={animation} loop={true} />
            </div>
        </div>
    );
};

export default About;