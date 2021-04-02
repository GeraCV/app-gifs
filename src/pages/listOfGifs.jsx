import React from 'react'
import Gif from '../components/gif'
import useGif from '../hooks/useGif'

import { useLocation } from 'wouter'

const ListOfGifs = ({ params }) => {

  const { keyword } = params
  const { gifs } = useGif({ keyword })
  const [id] = gifs

  const [path, location] = useLocation()


  const showGif = () => {
    location(`/gif/${id}`)
  }
  return (
    <div className="container-gifs">
      {
        gifs.map(({ title, url, id }) => {
          return (
            <Gif
              onClick={showGif}
              key={id}
              title={title}
              url={url}
              id={id}
            />
          )
        })
      }
    </div>
  )
}

export default ListOfGifs