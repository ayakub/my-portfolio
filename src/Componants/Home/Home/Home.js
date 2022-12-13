import React from 'react';
import background from '../../../assests/bg.jpg'
import TypeWriter from './TypeWriter';
import myImage from '../../../assests/ayakub.jpg'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }}
            id="home" className="py-20  w-full ">

            <div className='lg:pl-44  grid grid-cols-1 md:grid-cols-2 items-center mx-auto'>
                <div className="avatar">
                    <div className="w-10/12 lg:w-3/4  rounded-full ring ring-yellow-600 ring-offset-base-100 ring-offset-2 mx-auto">
                        <img src={myImage} alt='myImage' />
                    </div>
                </div>
                <div className='w-10/12 lg:w-3/4 mx-auto pt-5'>
                    <h3 className='text-yellow-600 text-3xl font-semibold'>Hi There I'm <span className='text-white text-3xl font-semibold'>MD. AYAKUB ALI</span></h3>
                    <TypeWriter></TypeWriter>
                </div>
            </div>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>


    );
};

export default Home;