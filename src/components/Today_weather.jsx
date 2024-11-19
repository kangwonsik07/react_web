import React from 'react'
import { useSelector } from 'react-redux'
import './css/Today_weather.css'

function Today_weather() {
   // Redux 상태에서 데이터 읽기
   const { data: weather, status, error } = useSelector((state) => state.weather)

   if (status === 'loading') {
      return <p>날씨 정보를 불러오는 중...</p>
   }

   if (status === 'failed') {
      return <p className="error">오류: {error}</p>
   }

   return (
      <div className="weather-card container weather-container ">
         {weather && (
            <>
               {/* 상단 헤더 */}
               <div className="weather-card-header">{weather.name}의 현재 날씨</div>

               {/* 본문 영역 */}
               <div className="weather-card-body">
                  {/* 날씨 아이콘 */}
                  <div className="weather-icon">
                     <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                  </div>

                  {/* 온도 */}
                  <div className="weather-temp">{weather.main.temp}°C</div>

                  {/* 추가 상세 정보 */}
                  <div className="weather-details">
                     체감 온도: {weather.main.feels_like}°C
                     <br />
                     풍속: {weather.wind.speed} m/s
                  </div>
               </div>

               {/* 하단 상세정보 링크 */}
               <div className="weather-footer">
                  <a href={`https://openweathermap.org/city/${weather.id}`} target="_blank" rel="noopener noreferrer">
                     추가 상세 정보
                  </a>
               </div>
            </>
         )}
      </div>
   )
}

export default Today_weather
