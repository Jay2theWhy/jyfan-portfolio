import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import details from './details';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    oapcity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          {/* introduction */}
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi there, I'm</p>
              <h1 className="head-text">{details.name}</h1>
            </div>
          </div>

          {/* titles */}
          <div className="tag-cmp app__flex">
            {details.titles.map((title) => (
              <p className="p-text">{title}</p>
            ))}
          </div>
          {/* small blurb about myself */}
          <div className="tag-cmp app_flex">
            <p className="p-text">{details.about}</p>
          </div>
        </div>
      </motion.div>

      {/* image of myself */}
      <motion.div
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* change this to photo of myself */}
        <img src={images.profile} alt="profile-bg"/>
        <motion.img
          whileInView={{ scale: [0,1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      {/* images of technologies */}
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.python, images.javascript, images.react].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
      
    </div>
  )
}

export default AppWrap(Header, 'home')