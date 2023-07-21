
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
  

  library.add(fab, faLinkedin, faGithub, faInstagram)


function Footer () {
    return (
      <footer>
        <div>
            <ul className="list-group list-group-horizontal justify-content-center fixed-bottom">
                <a href="https://github.com/paulisturm">
                <li class="list-group-item"><FontAwesomeIcon icon={faGithub} size="4x" /></li>
                </a>
                <a href="www.linkedin.com/in/paul-sturm-199a6a218">
                <li class="list-group-item"><FontAwesomeIcon icon={faLinkedin} size="4x" /></li>
                </a>
                <a href="https://www.instagram.com/paul.sturm/">
                <li class="list-group-item"><FontAwesomeIcon icon={faInstagram} size="4x" /></li>
                </a>
            </ul>
            <div>
    
  </div>
        </div>
      </footer>
    
    );
}

export default Footer;