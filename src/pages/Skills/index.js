import React from 'react'
import ProgressBarComponent from '../../components/ProgressBarComponent'
import Title from '../../components/Title'


function Skills() {
  return (
    <div className='card mt-5 p-4 text-start'>
      <div className="card-content">
        <Title title="yetenekler" />
        <div className="row">
          <div className="col-md-6 col-12">
            <p className='mt-3 mb-1'>Javascript</p>
            <ProgressBarComponent deg="80" />
          </div>
          <div className="col-md-6 col-12">
            <p className='mt-3 mb-1'>React</p>
            <ProgressBarComponent deg="90" />
          </div>
          <div className="col-md-6 col-12">
            <p className='mt-3 mb-1'>NodeJS</p>
            <ProgressBarComponent deg="70" />
          </div>
          <div className="col-md-6 col-12">
            <p className='mt-3 mb-1'>MySQL</p>
            <ProgressBarComponent deg="90" />
          </div>
          <div className="col-md-6 col-12">
            <p className='mt-3 mb-1'>Css</p>
            <ProgressBarComponent deg="60" />
          </div>
          <div className="col-md-6 col-12">
            <p className='mt-3 mb-1'>HTML</p>
            <ProgressBarComponent deg="60" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills