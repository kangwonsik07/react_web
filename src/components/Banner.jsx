import './css/Banner.css'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeather, fetch5DayWeather } from '../components/slider/weatherSlider'
import { useNavigate } from 'react-router-dom'

const koreanMapping = {
   서울: 'seoul',
   인천: 'incheon',
   부산: 'busan',
   대구: 'daegu',
   대전: 'daejeon',
   광주: 'gwangju',
   울산: 'ulsan',
   수원: 'suwon',
}

function Banner() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [city, setCity] = useState('')

   const handleOnChange = useCallback((e) => setCity(e.target.value), [])

   const handleSearch = useCallback(
      (e) => {
         e.preventDefault()

         const englishcity = koreanMapping[city] || city
         if (englishcity.trim()) {
            dispatch(fetchWeather(englishcity))
            dispatch(fetch5DayWeather(englishcity))
            navigate('/now_weather')
         }
      },
      [city, dispatch, navigate]
   )

   return (
      <div className="search">
         <form className="search_form" onSubmit={handleSearch}>
            <Button type="submit" startIcon={<SearchIcon />} />
            <TextField className="text" id="outlined-basic" variant="outlined" label="도시를 입력하세요" value={city} onChange={handleOnChange} />
         </form>
      </div>
   )
}

export default Banner
