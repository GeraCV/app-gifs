import React from 'react'
import useGif from '../hooks/useGif'
import Gif from '../components/gif'
import TrendingSearches from '../components/trendingSearches'

const Home = () => {

  const { gifs } = useGif()

  return (
    <>
      <div className="principal">
        <h2 className="title"> Gifs </h2>
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
        <TrendingSearches />
      </div>

    </>
  )
}

export default Home