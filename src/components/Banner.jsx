import './css/Banner.css'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTodayWeather } from '../api/weatherApi'

function Banner() {
   const [city, setCity] = useState('')

   // const handleonChange = useCallback((e) => setCity(e.target.value), [])

   // const navigate = useNavigate()

   // const handleSearch = useCallback(
   //    (e) => {
   //       e.preventDefault()

   //       if (city.trim()) {
   //          navigate(`/q=${city}`)
   //       }
   //    },
   //    [city, navigate]
   // )

   const [weather, setWeather] = useState(null) // 날씨 데이터
   const [error, setError] = useState(null) // 에러 상태

   const handleOnChange = useCallback((e) => setCity(e.target.value), [])

   const navigate = useNavigate()

   const handleSearch = useCallback(
      async (e) => {
         e.preventDefault()

         if (city.trim()) {
            try {
               // API 호출
               const data = await getTodayWeather(city)
               setWeather(data) // 날씨 데이터를 상태에 저장
               setError(null) // 에러 초기화
               navigate(`/`) // 페이지 이동
            } catch (err) {
               console.error('날씨 데이터를 가져오는 중 오류 발생:', err)
               setError('도시 이름을 확인하세요.') // 에러 메시지 설정
               setWeather(null)
            }
         }
         console.log(setWeather)
      },
      [city, navigate]
   )

   return (
      <div className="search">
         <form className="search_form" onSubmit={handleSearch}>
            <Button type="submit" startIcon={<SearchIcon />}></Button>
            <TextField className="text" id="outlined-basic" variant="outlined" label="도시를 입력하세요(영어)" value={city} onChange={handleOnChange} />
         </form>
         {weather && (
            <div className="weather-info">
               <h3>{weather.name}의 날씨</h3>
               <p>온도: {weather.main}°C</p>
               <p>상태: {weather.weather}</p>
            </div>
         )}
         {error && <p className="error">{error}</p>}
      </div>
   )
}

export default Banner
