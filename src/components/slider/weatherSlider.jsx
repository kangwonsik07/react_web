import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getTodayWeather, get5DayWeather } from '../../api/weatherApi'

// 비동기 Thunk 함수
export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city) => {
   const response = await getTodayWeather(city)
   console.log('API 응답 데이터 getTodayWeather:', response)
   return response
})

export const fetch5DayWeather = createAsyncThunk('/weather/fetch5DayWeather', async (city) => {
   const response = await get5DayWeather(city)
   console.log('API 응답 데이터get5DayWeather:', response)
   return response
})

// Redux Slice 생성
const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      today: { data: null, loading: false, error: null },
      forecast: { data: null, loading: false, error: null },
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeather.pending, (state) => {
            state.today.loading = true
            state.today.error = null
            console.log('todaypending.state.data:', state.data)
         })
         .addCase(fetchWeather.fulfilled, (state, action) => {
            state.today.loading = false
            state.today.data = action.payload
            console.log('todayfulfilled.state.data:', state.data)
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.today.loading = false
            state.today.error = action.error.message
         })
         .addCase(fetch5DayWeather.pending, (state) => {
            state.forecast.loading = true
            state.forecast.error = null
            console.log('forecastpending.state.data:', state.data)
         })
         .addCase(fetch5DayWeather.fulfilled, (state, action) => {
            state.forecast.loading = false
            state.forecast.data = action.payload
            console.log('forecastfulfilled.state.data:', state.data)
         })
         .addCase(fetch5DayWeather.rejected, (state, action) => {
            state.forecast.loading = false
            state.forecast.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
