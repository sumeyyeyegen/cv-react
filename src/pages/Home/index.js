import React from 'react'
import About from '../../components/About'
import Profile from '../../components/Profile/index'
import Educations from '../Educations'
import Experiences from '../Experiences'
import Skills from '../Skills'
import "./home.css"

function Home() {
  return (
    <div className='row'>
      <div className="col-lg-3 col-12 mb-5 pe-4">
        <Profile />
      </div>
      <div className='col-lg-9 col-12 ps-4'>
        <About />
        <Skills />
        <Experiences />
        <Educations />
      </div>
      {/* <FontAwesomeIcon icon={faAddressCard} /> */}
    </div>
  )
}

export default Home