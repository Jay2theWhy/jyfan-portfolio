import React from 'react'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import { IoDocumentAttach } from 'react-icons/io5';

const SocialMedia = () => {
  const handleClick = () => {
    window.open('/JY_Resume.pdf');
    console.log('hello')
  }

  return (
    <div className="app__social">
        <a href="https://github.com/Jay2theWhy" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/jingyangfan/" target="_blank">
            <BsLinkedin />
        </a>
        <a>
          <IoDocumentAttach onClick={handleClick}/>
        </a>
        {/* <a>
            <BsTwitter />
        </a> */}
    </div>
  )
}

export default SocialMedia