import React from 'react'
import Gif from '../components/gif'
import useGif from '../hooks/useGif'

import { useLocation } from 'wouter'

const ListOfGifs = () => {

  const { gifs } = useGif()
  console.log(gifs)
  const [path, location] = useLocation()

  const [id] = gifs

  const showGif = () => {
    location(`/gif/${id}`)
    // console.log('hello')
    // alert('hola ')
  }
  return (
    <div className="principal">
      <h2 className="title"> Gifs </h2>
      <div className="container-gifs">
        {/* <button
          onClick={showGif}
        >
          hola

        </button> */}
        {
          gifs.map(({ title, url, id }) => {
            return (
              <Gif
                onClick={showGif}
                title={title}
                url={url}
                id={id}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ListOfGifs