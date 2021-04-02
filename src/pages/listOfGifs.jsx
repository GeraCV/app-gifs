import React from 'react'
import Gif from '../components/gif'
import useGif from '../hooks/useGif'

import '../styles/listOfGifs.css'
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
    <>
      <div className="principal">
        <h2 className="title"> Gifs </h2>
        <h3 className="name-gif"> {decodeURI(keyword)} </h3>
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
        <div className="container-btn-next">
          <button
            className="next-page"
          >
            Mostrar más
        </button>
        </div>
      </div>
    </>
  )
}

export default ListOfGifs