import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

  // WIP - add link to foodCart social media and for contacting restaurant above my social media links?  Possibly hours and address above my social media links too? (Visit.js may cover this.)

  function Footer() {
    return (
      <div className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
          <li>
            <a href='https://github.com/wowgr8' className="mr-4 hover:underline md:mr-6"><BsGithub /></a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/cesar-aug-lopez/' className="mr-4 hover:underline md:mr-6"><BsLinkedin /></a>
          </li>
          <li>
            <a href='mailto:lopez.cesar.aug@gmail.com' className="mr-4 hover:underline md:mr-6"><AiOutlineMail /></a>            
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">&copy; 2022 <a href='https://github.com/wowgr8' className="hover:underline">github.com/wowgr8™</a>. All Rights Reserved.
        </span>
      </div>
    )
  }
  
  export default Footer