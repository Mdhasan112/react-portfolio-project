import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
            <h2>Web development and websites promotions</h2>
            <Typed className="typed-taxed" 
            strings={["Web Design", "Web Development", "Facebook ADS", "Google ADS"]}
             typeSpeed={40}
             backSpeed={60}
             loop
             >
            </Typed>
            <a href= "#" className='btn-main-offer'>Contact Me</a>
            </div>
        </div>
    );
};

export default Header;