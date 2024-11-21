import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { useEffect } from 'react'
import fetchWeather from './slider/weatherSlider'
import './css/Today_weather.css'

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

function Today_weather() {
   const { city } = useParams()
   const dispatch = useDispatch()
   const { data: weathers, loading, error } = useSelector((state) => state.weather.today)

   useEffect(() => {
      if (city) {
         dispatch(fetchWeather(city))
      }
   }, [dispatch, city])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>
   console.log(weathers)

   const koreancity = koreanMapping[weathers.name.toLowerCase()] || weathers.name

   return (
      <div className="weather-card container weather-container ">
         {weathers && (
            <>
               {/* 상단 헤더 */}
               <div className="weather-card-header">{koreancity}의 현재 날씨</div>

               {/* 본문 영역 */}
               <div className="weather-card-body">
                  {/* 날씨 아이콘 */}
                  <div className="weather-icon">
                     <img src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`} alt={weathers.weather[0].description} />
                  </div>

                  {/* 온도 */}
                  <div className="weather-temp">{weathers.main.temp}°C</div>

                  {/* 추가 상세 정보 */}
                  <div className="weather-details">
                     체감 온도: {weathers.main.feels_like}°C
                     <br />
                     풍속: {weathers.wind.speed} m/s
                  </div>
               </div>

               {/* 하단 상세정보 링크 */}
               <div className="weather-footer">
                  <Link to="/Now_Weather_Detail">추가 상세 정보</Link>
               </div>
            </>
         )}
      </div>
   )
}

export default Today_weather
