import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'; 
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // get sanity data
  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testimonialsQuery = '*[_type == "testimonials"]';

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })

    client.fetch(testimonialsQuery)
    .then((data) => {
      setTestimonials(data);
    })
  }, [])

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app_flex">
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt="testimonial" />
          </div>
        </>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  "testimonial",
  'app__primarybg'
);