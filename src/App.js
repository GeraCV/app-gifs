import React, { useEffect, useState } from 'react'

function App() {

  const [gifs, setGifs] = useState([])

  const getGifs = async () => {
    const api = `https://api.giphy.com/v1/gifs/search?api_key=mfOwuN9UxxhOso3kVH1zxk4EvttJGAio&q=avengers&limit=5&offset=0&rating=g&lang=en`
    const response = await fetch(api)
    const information = await response.json()
    const { data } = information
    console.log(data)
    const gifs = data.map(gif => {
      const { id, images, title } = gif
      const url = images.downsized_medium.url
      return { id, url, title }
    })
    return gifs
  }

  useEffect(() => {
    getGifs().then(gifs => setGifs(gifs))
  }, [setGifs])

  return (
    <>
      <div className="principal">
        <h2 className="title"> Gifs </h2>
        <div className="container-gifs">
          {
            gifs.map(({ title, url, id }) => {
              return (
                <div className="container-gif" key={id}>
                  <img className="image-gif" src={url} alt={title} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}


export default App