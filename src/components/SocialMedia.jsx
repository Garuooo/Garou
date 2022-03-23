import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import {Link, NavLink} from "react-router-dom"

const SocialMedia = () => (
  <div className="app__social">
   <div>
     <a
     href='https://github.com/Garuooo'>
       <BsGithub />
     </a>
    </div>
    <div>
       <a
     href='https://www.linkedin.com/in/garuoo/'>
       <BsLinkedin />
     </a>
    </div>
    
     <div>
       <a
     href='https://www.instagram.com/garuoo8/'>
       <FaInstagram />
     </a>
    </div>
  </div>
);

export default SocialMedia;
