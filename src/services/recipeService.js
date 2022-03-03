import axios from 'axios'

const tastyURL = 'https://tasty.p.rapidapi.com/recipes/list'

const getRecipe = async (ingredient, tag) => {
  const response = await axios.get(tastyURL, {
    headers: {
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_TASTY_API_KEY
    },
    params: {
      from: '0',
      size: '20',
      tags: tag,
      q: ingredient
    }
  })

  return response.data
}

export default { getRecipe }