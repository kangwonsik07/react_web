import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const AUTH_KEY = '9997c85cdc80f831ec633b790ce79430'

const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
   },
})

export const getTodayWeather = async (city) => {
   try {
      const response = await weatherApi.get(`/weather`, {
         params: {
            q: city,
            units: 'metric',
            lang: 'kr',
            appid: AUTH_KEY,
         },
      })
      console.log('getTodayWeather 응답 데이터:', response.data)
      return response.data
   } catch (error) {
      console.error(`현재 날씨 API 요청 오류: ${error.message}`)
      throw error
   }
}

export const get5DayWeather = async (city) => {
   try {
      const response = await weatherApi.get(`/forecast`, {
         params: {
            q: city,
            units: 'metric',
            lang: 'kr',
            appid: AUTH_KEY,
         },
      })
      return response.data
   } catch (error) {
      console.error(`5일 예보 API 요청 오류: ${error.message}`)
      throw error
   }
}

export default weatherApi
