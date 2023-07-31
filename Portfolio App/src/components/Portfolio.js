import React from 'react';
import Jate from '../assets/JATE.png';

function Portfolio () {
    return (
        <><h1>Portfolio</h1>
        <p className='portfolio'> Check Out Some Of My Recent Projects!</p>
        <div className='projects'>
            <div href="https://github.com/paulisturm/PWA-Text-Editor" img src={Jate}>PWA Text Editor</div>
            <div href="https://github.com/paulisturm/Social-Network-API">Social Network API</div>
            <div href="https://github.com/paulisturm/SVG-Logo-Maker">SVG Logo Maker</div>
            <div href="https://github.com/paulisturm/SQL-Employee-Tracker">SQL Employee Tracker</div>
            <div href="https://github.com/paulisturm/ORM-E-Commerce-Backend">ORM E Commerce Backend</div>
            <div href="https://github.com/paulisturm/Javascript-Password-Generator">Javascript Password Generator</div>
        </div>
        </>
        
    );
}

export default Portfolio;