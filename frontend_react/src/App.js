import React from 'react'

// import containers
import { About, Footer, Header, Skills, Testimonial, Work } from './container';

// import components
import { Navbar } from './components';

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default App;