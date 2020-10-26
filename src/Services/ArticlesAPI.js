import axios from 'axios'

const baseURL = 'https://dialog-blog.herokuapp.com'

export const allArticles = async () => {
  const response = await axios.get(`${baseURL}/articles`)
  return response
}

