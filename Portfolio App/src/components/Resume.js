import React from 'react';
import resume from '../assets/Resume.pdf'


function Resume () {
    return (
        <><h1>Resume</h1><p className='resume' src=""> 
        <button className="button">
    <a className="button" href={ resume } download = "ResumeOfficial.pdf">
      Download Resume
    </a>
</button> 
</p></>      
    );
}

export default Resume;