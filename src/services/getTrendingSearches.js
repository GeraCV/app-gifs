import { API_KEY, API_URL } from './links'

const getTrendingSearches = async () => {
  const api = `${API_URL}/trending/searches?api_key=${API_KEY}`
  const response = await fetch(api)
  const info = await response.json()
  const { data } = info
  console.log(data)
  return data
}

export default getTrendingSearches