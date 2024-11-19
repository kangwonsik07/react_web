import axios from 'axios'

// 공통 설정
const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const AUTH_KEY = '9997c85cdc80f831ec633b790ce79430'

// Axios 인스턴스 생성
const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
   },
})

// 현재 날씨 가져오기
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
      return response.data
   } catch (error) {
      console.error(`현재 날씨 API 요청 오류: ${error.message}`)
      throw error
   }
}

// 5일간 3시간 간격 날씨 예보 가져오기
export const get5DayForecast = async (city) => {
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
