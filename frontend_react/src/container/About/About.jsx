import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

// fill in descriptions
// const abouts = [
//   {  title: 'Web Development', description: 'I am a good developer.', imgUrl: images.about01 },
//   {  title: 'Frontend Development', description: 'I am a good developer.', imgUrl: images.about02},
//   {  title: 'Data Science', description: 'I am a good developer.', imgUrl: images.about03},
//   {  title: 'Web Animations', description: 'I am a good developer.', imgUrl: images.about04}
// ]

// dynamically fetches about from Sanity
const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">I Know That <span>Good Development</span><br />means <span>Good Business</span></h2>
      
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration:0.5, type: 'tween' }}
            className="app__profile-item" 
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} atl={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default AppWrap(About, 'about');