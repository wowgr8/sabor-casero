import React from 'react';
// import '../styles/Footer.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
  // link to foodCart social media
  // possibly hours and address (Visit.js may cover this.)

  function Footer() {
    return (
      <div className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">

        <span className="text-sm text-gray-500 sm:text-center">&copy; 2022 <a href='https://github.com/wowgr8' className="hover:underline">github.com/wowgr8™</a>. All Rights Reserved.
        </span>
      </div>
    )
  }
  
  export default Footer