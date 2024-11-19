import axios from 'axios'

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=kr`

const AUTH_KEY = '9997c85cdc80f831ec633b790ce79430'

const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
      Authorization: AUTH_KEY,
   },
})

const fetchFromApi = async (url, params = {}) => {
   try {
      const response = await weatherApi.get(url, { params: { ...params, appid: AUTH_KEY } })
      return response, console.log('weatherApi', weatherApi)
   } catch (error) {
      console.error(`API요청 오류:${error.message}`)
      throw error
   }
}

export const getTodayWeather = (city) => {
   return fetchFromApi('', {
      q: city,
   })
}

export default weatherApi
