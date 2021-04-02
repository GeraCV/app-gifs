import React from 'react'
import Home from './pages/home'
import Detail from './pages/detail'
import ListOfGifs from './pages/listOfGifs'

import { GifsContextProvider } from './context/contextGifs'
import { Route } from 'wouter'


function App() {

  return (
    <>
      <GifsContextProvider>
        <Route
          path='/'
          component={Home}
        />
        <Route
          path='/gifs/:keyword'
          component={ListOfGifs}
        />
        <Route
          path='/gif/:id'
          component={Detail}
        />
      </GifsContextProvider>
    </>
  )
}


export default App