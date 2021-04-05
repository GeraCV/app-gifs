import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/contextGifs'


const initial = 0
const useGif = ({ keyword } = {}) => {

  const { gifs, setGifs } = useContext(GifsContext)
  const [page, setPage] = useState(initial)
  const [loading, setLoading] = useState(true)

  const kw = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    getGifs({ keyword: kw }).then(gifs => setGifs(gifs))
    setLoading(false)
    localStorage.setItem('lastKeyword', keyword)
  }, [setGifs, keyword])

  useEffect(() => {
    if (page == initial) { return }

    // getGifs({ keyword: kw, page: page }).then(nextGifs => gifs.concat(nextGifs))

    getGifs({ keyword: kw, page: page }).then(newGifs => {
      setGifs(gifs => gifs.concat(newGifs))
    })

  }, [page, setGifs])

  return { gifs, setPage, loading }
}

export default useGif