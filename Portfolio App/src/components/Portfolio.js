import React from 'react';
import Jate from '../assets/JATE.png';
import Orm from '../assets/ORM.png';
import Password from '../assets/Password Generator.png';
import Social from '../assets/SocialNetwork.png';
import Sql from '../assets/SQL.png';
import Svg from '../assets/SVGlogomaker.png';

function Portfolio () {
    return (
        <><h1>Portfolio</h1>
        <p className='portfolio'> Check Out Some Of My Recent Projects!</p>
        <div className='projects'>
            
            <a classname="col" href="https://github.com/paulisturm/PWA-Text-Editor"> <img style={{ width: 300, height: 200 }} src={Jate}></img></a>
            
            <a classname="col" href="https://github.com/paulisturm/Social-Network-API"> <img style={{ width: 300, height: 200 }} src={Social}></img></a>

            <a href="https://github.com/paulisturm/SVG-Logo-Maker"> <img style={{ width: 300, height: 200 }} src={Svg}></img></a>

            <a href="https://github.com/paulisturm/SQL-Employee-Tracker"> <img style={{ width: 300, height: 200 }} src={Sql}></img></a>

            <a href="https://github.com/paulisturm/ORM-E-Commerce-Backend"> <img style={{ width: 300, height: 200 }} src={Orm}></img></a>

            <a href="https://github.com/paulisturm/Javascript-Password-Generator"> <img style={{ width: 300, height: 200 }} src={Password}></img></a>
        </div>
        </>
        
    );
}

export default Portfolio;