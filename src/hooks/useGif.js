import { useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/contextGifs'


const useGif = ({ keyword } = {}) => {

  const { gifs, setGifs } = useContext(GifsContext)

  const kw = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    getGifs({ keyword: kw }).then(gifs => setGifs(gifs))
    localStorage.setItem('lastKeyword', keyword)
  }, [setGifs, keyword])

  return { gifs }
}

export default useGif