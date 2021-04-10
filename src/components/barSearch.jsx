import React, { useState, useRef } from 'react'

import '../styles/barSearch.css'
import { useLocation } from 'wouter'


const BarSearch = () => {

  const [word, setWord] = useState('')
  const ref = useRef()

  const [path, location] = useLocation()

  const captureValue = e => {
    setWord(e.target.value)
  }

  const sendValue = e => {
    e.preventDefault()
    ref.current.value = ''
    location(`/gifs/${word}`)


  }

  return (
    <form
      className="form-gifs"
      onSubmit={sendValue}
    >
      <input
        onChange={captureValue}
        value={word}
        ref={ref}
        type="text"
        className="input-search"
        placeholder='Search a gif...' />

      <input className="btn-submit" type="submit" value='Buscar' />

    </form>
  )
}

export default React.memo(BarSearch)