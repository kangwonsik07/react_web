import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// API 키와 URL 설정
const API_KEY = '9997c85cdc80f831ec633b790ce79430'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

// 비동기 Thunk 함수
export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city, { rejectWithValue }) => {
   try {
      const response = await axios.get(BASE_URL, {
         params: {
            q: city,
            units: 'metric',
            lang: 'kr',
            appid: API_KEY,
         },
      })
      return response.data // API 응답 데이터 반환
   } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'API 요청 오류')
   }
})

// Redux Slice 생성
const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      data: null, // 날씨 데이터
      status: 'idle', // 요청 상태: 'idle' | 'loading' | 'succeeded' | 'failed'
      error: null, // 에러 메시지
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeather.pending, (state) => {
            state.status = 'loading'
            state.error = null
         })
         .addCase(fetchWeather.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data = action.payload
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload
         })
   },
})

export default weatherSlice.reducer
