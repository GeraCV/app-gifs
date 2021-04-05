import React, { useRef, useEffect, useCallback } from 'react'
import Gif from '../components/gif'
import useGif from '../hooks/useGif'
import useNearScreen from '../hooks/useNearScreen'

import '../styles/listOfGifs.css'
import { useLocation } from 'wouter'

const ListOfGifs = ({ params }) => {

  const { keyword } = params
  const { gifs, setPage, loading } = useGif({ keyword })
  const [id] = gifs
  const [path, location] = useLocation()
  const externalRef = useRef()

  const { show } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  const nextPage = useCallback(() => setPage(page => page + 1), [])

  useEffect(() => {

    if (show) { nextPage() }

  }, [show])

  const showGif = () => {
    location(`/gif/${id}`)
  }

  return (
    <>
      {
        loading
          ? <div> <p className="text-charging"> Cargando ...</p></div>
          : <div className="principal">
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
            <div className="elementToObserver" ref={externalRef}> </div>
          </div>
      }
    </>

  )
}

export default ListOfGifs