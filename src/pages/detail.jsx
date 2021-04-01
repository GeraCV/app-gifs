import React, { useContext } from 'react'
import Gif from '../components/gif'
import GifsContext from '../context/contextGifs'


const Detail = ({ params }) => {
  console.log(params)
  const gifsContext = useContext(GifsContext)
  const { gifs } = gifsContext
  const actualGif = gifs.find(gif => gif.id === params.id)

  const { id, title, url } = actualGif
  return (
    actualGif
      ? <Gif
        key={id}
        id={id}
        title={title}
        url={url}
      />
      : ''
  )
}

export default Detail