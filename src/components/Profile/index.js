import { faDotCircle, faEllipsis, faEllipsisH, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imgProfile from '../../assets/images/profile.png'
import './profile.css'
import Title from '../Title'

function Profile() {
  const [moreInfoShow, setMoreInfoShow] = useState(false)
  return (
    <>
      <div className={moreInfoShow ? 'card p-2 ms-3 w-100 d-none' : "card p-2 ms-3 w-100"} style={{ minHeight: "300px" }}>
        <div className=''>
          <div className="card-image">
            <img src={imgProfile} alt="profile_photo" className='profile-photo' />
            <button className='btn more' onClick={() => setMoreInfoShow(true)}>
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
          </div>
          <div className="card-content p-3 text-start ms-1">
            <span className='card-title fs-3 fw-1 text-dark'>Sümeyye Yeğen</span>
            <p>Full Stack Web Developer</p>
          </div>
        </div>
      </div>
      <div className={moreInfoShow ? 'animated04 animatedFadeInUp fadeInUp card p-2 ms-3 w-100' : "animated06 animatedFadeInDown fadeInDown card p-2 ms-3 w-100"} style={{ minHeight: "350px" }}>
        <div>
          <div className='d-flex justify-content-between align-items-center'>
            <Title title="SOSYAL MEDYA" style="mb-0" />
            <button className='btn btn-white fw-bold p-0 pe-2' onClick={() => setMoreInfoShow(false)}> x</button>
          </div>
          <p className='text-start ms-1'><FontAwesomeIcon icon={faLinkedinIn} className="me-1" /><FontAwesomeIcon icon={faGithub} /></p>
        </div>
      </div >
    </>
  )
}

export default Profile