import { API_KEY, API_URL } from './links'

const getGifs = async ({ keyword, limit = 5, page = 0 } = {}) => {
  const api = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
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