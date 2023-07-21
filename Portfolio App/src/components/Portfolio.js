import React from 'react';

function Portfolio () {
    return (
        <><h1>Portfolio</h1>
        <p className='portfolio'> Check Out Some Of My Recent Projects!</p>
        <div className='projects'>
            <div href="https://github.com/paulisturm/PWA-Text-Editor">PWA Text Editor</div>
            <div href="https://github.com/paulisturm/Social-Network-API">Project 2</div>
            <div href="https://github.com/paulisturm/SVG-Logo-Maker">Project 3</div>
            <div href="https://github.com/paulisturm/SQL-Employee-Tracker">Project 4</div>
            <div href="https://github.com/paulisturm/ORM-E-Commerce-Backend">Project 5</div>
            <div href="https://github.com/paulisturm/Javascript-Password-Generator">Project 6</div>
        </div>
        </>
        
    );
}

export default Portfolio;