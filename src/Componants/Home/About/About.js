import React from 'react';
import Lottie from "lottie-react"
import animation from './aboutme.json'

const About = () => {
    return (
        <div className='mt-10  lg:px-44 ' id='about'>
            <h3 className='text-4xl mt-5 font-semibold text-primary text-center'>About me</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center mx-5 mt-5 md:mx-0 md:mt-0'>
                <div className=''>
                    <p className='text-white text-2xl'>I'm Md. Ayakub Ali.I'm a Fronted Developer. I have 1 year learn experience in in HTML, CSS, Bootstrap, Tailwind, JavaScript, ReactJS, Firebase, NextJS, Redux, NodeJS, ExpressJS and MongoDB. Recently I complete Diploma in Computer Technology degree at Chattogram Polytechnic Institute</p>
                </div>
                <div>
                    <Lottie animationData={animation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default About;