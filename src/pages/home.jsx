import React from 'react'
import useGif from '../hooks/useGif'
import Gif from '../components/gif'
import LazyTrendingSearches from '../components/lazyTrendingSearches'
import BarSearch from '../components/barSearch'
import useNearScreen from '../hooks/useNearScreen'

import '../styles/home.css'

const Home = () => {

  const { gifs } = useGif()

  return (
    <>
      <div className="principal">
        <h2 className="title"> Gifs </h2>
        <BarSearch />
        <div className="container-gifs">
          {
            gifs.map(({ title, url, id }) => {
              return (
                <Gif
                  key={id}
                  title={title}
                  url={url}
                  id={id}
                />
              )
            })
          }
        </div>
      </div>
      <LazyTrendingSearches />
    </>
  )
}

export default Home