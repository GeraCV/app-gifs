import React, { useEffect, useState } from 'react'
import getTrendingSearches from '../services/getTrendingSearches'

import '../styles/trendingSearches.css'
import { useLocation } from 'wouter'


const TrendingSearches = () => {

  const [searches, setSearches] = useState([])
  const [path, location] = useLocation()


  useEffect(() => {
    getTrendingSearches().then(data => setSearches(data))
  }, [setSearches])


  return (
    <div className="container-searches">
      {  searches.map(search => {
        return (
          <a className="name-trending-search"
            key={search}
            onClick={() => location(`/gifs/${search}`)}
          >
            {search}
          </a>
        )
      })
      }
    </div>
  )
}

export default TrendingSearches