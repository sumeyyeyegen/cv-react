import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

function ProgressBarComponent({ deg }) {
  return <ProgressBar now={deg} label={`${deg}%`} />;
}

export default ProgressBarComponent