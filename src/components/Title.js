import React from 'react'

function Title({ title, style }) {
  return (
    <h6 className={"text-uppercase " + style}><strong>{title}</strong></h6>
  )
}

export default Title