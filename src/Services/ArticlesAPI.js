import axios from 'axios'

const baseURL = 'https://dialog-blog.herokuapp.com'

export const allArticles = async (search) => {
  const params = search && {search}
  const response = await axios.get(`${baseURL}/articles`, {params})
  return  response.data
}

export const getComments = async (article_id) => {
  const params = article_id && {article_id}
  const response = await axios.get(`${baseURL}/comments`, {params})
  console.log(response)
  return response.data
}

export const addArticle = async () => {
  const response = await axios.post(`${baseURL}/articles`,)
}