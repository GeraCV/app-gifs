import React, { Suspense } from 'react'
import useNearScreen from '../hooks/useNearScreen'


const TrendingSearches = React.lazy(
  () => import('./trendingSearches')
)

const LazyTrendingSearches = () => {

  const { show, refObserve } = useNearScreen()

  return (
    <div ref={refObserve}>
      <Suspense fallback={'cargando'}>
        {show ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  )
}

export default LazyTrendingSearches