import { useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/contextGifs'


const useGif = () => {

  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    getGifs().then(gifs => setGifs(gifs))
  }, [setGifs])

  return { gifs }
}

export default useGif