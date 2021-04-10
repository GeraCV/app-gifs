import React from 'react'
import '../styles/gif.css'

import { Link } from 'wouter'

const Gif = ({ url, title, id }) => {
  return (
    <Link to={`/gif/${id}`}>
      <div className="container-gif">
        <img className='image-gif' src={url} alt={title} key={id} />
      </div>
    </Link>
  )
}

export default React.memo(Gif, (prevProps, nextProps) => {
  if (prevProps.id == nextProps.id) {
    return true
  }
})
