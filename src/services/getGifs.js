const getGifs = async () => {
  const api = `https://api.giphy.com/v1/gifs/search?api_key=mfOwuN9UxxhOso3kVH1zxk4EvttJGAio&q=avengers&limit=5&offset=0&rating=g&lang=en`
  const response = await fetch(api)
  const information = await response.json()
  const { data } = information
  const gifs = data.map(gif => {
    const { id, images, title } = gif
    const url = images.downsized_medium.url
    return { id, url, title }
  })
  return gifs
}

export default getGifs