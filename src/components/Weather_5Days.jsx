import React from 'react'
import './css/Weather_5Days.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { fetch5DayWeather } from './slider/weatherSlider'

// 한영 변환
const koreanMapping = {
   seoul: '서울',
   incheon: '인천',
   busan: '부산',
   daegu: '대구',
   daejeon: '대전',
   gwangju: '광주',
   ulsan: '울산',
   suwon: '수원',
}

function Weather_5Days() {
   const { city } = useParams()
   const dispatch = useDispatch()
   const { data: weathers, loading, error } = useSelector((state) => state.weather.forecast)
   useEffect(() => {
      if (city) {
         dispatch(fetch5DayWeather(city))
      }
   }, [dispatch, city])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   console.log(weathers)

   const exTimeForecast = (forecastData) => {
      // 현재 날짜 기준 다음 날짜 계산
      const today = new Date()
      const nextDay = new Date(today)
      nextDay.setDate(today.getDate() + 1)
      const targetDate = nextDay.toISOString().split('T')[0] // "YYYY-MM-DD" 형식

      // 해당 날짜의 06:00:00 데이터 찾기
      const TimeForecast = forecastData.list.find((item) => item.dt_txt === `${targetDate} 06:00:00`)

      return TimeForecast
   }

   const exTime06Forecast = exTimeForecast(weathers)
   console.log('exTime06Forecast:', exTime06Forecast)

   const koreancity = koreanMapping[weathers.city.name.toLowerCase()] || weathers.city.name
   return (
      <div className="weather-card container weather-container">
         {/* 상단 헤더 */}

         <div className="weather-card-header">{koreancity}의 내일 6시 날씨</div>

         {/* 본문 영역 */}
         <div className="weather-card-body">
            {/* 날씨 아이콘 */}
            <div className="weather-icon">
               <img src={`https://openweathermap.org/img/wn/${exTime06Forecast.weather[0].icon}@2x.png`} alt={exTime06Forecast.weather[0].description} />
            </div>

            {/* 온도 */}
            <div className="weather-temp">{exTime06Forecast.main.temp}°C</div>

            {/* 추가 상세 정보 */}
            <div className="weather-details">
               체감 온도: {exTime06Forecast.main.feels_like}°C
               <br />
               풍속: {exTime06Forecast.wind.speed}m/s
            </div>
         </div>

         {/* 하단 상세정보 링크 */}
         <div className="weather-footer">
            <Link to="/Weather_5Days_Web">추가 상세 정보</Link>
         </div>
      </div>
   )
}

export default Weather_5Days
