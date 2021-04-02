import React, { useEffect, useState } from 'react'
import getTrendingSearches from '../services/getTrendingSearches'
import { useLocation } from 'wouter'

const TrendingSearches = () => {

  const [searches, setSearches] = useState([])
  const [path, location] = useLocation()


  useEffect(() => {
    getTrendingSearches().then(data => setSearches(data))
  }, [setSearches])


  return (
    searches.map(search => {
      return (

        <p
          className="search"
          key={search}
          onClick={() => location(`/gifs/${search}`)}
        >
          {search}
        </p>
      )
    })

  )
}

export default TrendingSearches