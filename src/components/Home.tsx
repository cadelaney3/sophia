import React, { useState } from 'react';
import Header from './Header'; // Create a CSS file for styling
import sophia from '../assets/images/PXL_20231111_012605842.jpg'
import '../styles/Home.css'; // Create a CSS file for styling
import Slideshow from './Slideshow'; // Create a CSS file for styling
import '../styles/Slideshow.css'; // Create a CSS file for styling

const Home: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='container'>
            <Slideshow />
            {/* <Header /> */}
            {/* <div className='imgbox'>
                <img className='img' src={sophia} />
            </div> */}
        </div>
    );
};

export default Home;