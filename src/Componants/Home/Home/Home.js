import React from 'react';
import background from '../../../assests/bg.jpg'

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <h3>Hello there</h3>
        </div>
    );
};

export default Home;