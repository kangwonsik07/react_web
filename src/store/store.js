import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../components/slider/weatherSlider'

export const store = configureStore({
   reducer: {
      weather: weatherReducer, // weather 상태 등록
   },
})

export default store
