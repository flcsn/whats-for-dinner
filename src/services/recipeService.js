import axios from 'axios'

const tastyURL = 'https://tasty.p.rapidapi.com/recipes/list'

const getRecipe = async (ingredient, tag) => {
  const params = {
    from: '0',
    size: '20',
    ...(tag !== 'any' && { tags: tag }),
    ...(ingredient !== 'any' && { q: ingredient })
  }

  const response = await axios.get(tastyURL, {
    headers: {
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'x-rapidapi-key': '46c7b8d39fmsh0a692f6a9564c55p188574jsn0ac567d9bf39'
    },
    params
  })

  return response.data
}

export default { getRecipe }