import React from 'react'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsGithub />
            <a href="https://www.github.com" className="p-text"></a>
        </div>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaAngellist />
        </div>
    </div>
  )
}

export default SocialMedia