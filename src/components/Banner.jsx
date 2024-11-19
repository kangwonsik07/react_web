import './css/Banner.css'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeather } from '../components/slider/weatherSlider'
import { useNavigate } from 'react-router-dom'

function Banner() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [city, setCity] = useState('')
   // 입력 변경 핸들러
   const handleOnChange = useCallback((e) => setCity(e.target.value), [])

   // 검색 핸들러
   const handleSearch = useCallback(
      (e) => {
         e.preventDefault()

         if (city.trim()) {
            dispatch(fetchWeather(city)) // Redux 상태 업데이트
            navigate('/now_weather') // 검색 후 now_weather 페이지로 이동
         }
      },
      [city, dispatch, navigate]
   )

   return (
      <div className="search">
         <form className="search_form" onSubmit={handleSearch}>
            <Button type="submit" startIcon={<SearchIcon />} />
            <TextField className="text" id="outlined-basic" variant="outlined" label="도시를 입력하세요(영어)" value={city} onChange={handleOnChange} />
         </form>
      </div>
   )
}

export default Banner
