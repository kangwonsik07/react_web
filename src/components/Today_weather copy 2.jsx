import React from 'react'
import './css/Today_weather.css'

function Today_weather() {
   return (
      <div className="weather-card container weather-container ">
         {/* 상단 헤더 */}
         <div className="weather-card-header">현재 날씨</div>

         {/* 본문 영역 */}
         <div className="weather-card-body">
            {/* 날씨 아이콘 */}
            <div className="weather-icon">아이콘</div>

            {/* 온도 */}
            <div className="weather-temp">온도°C</div>

            {/* 추가 상세 정보 */}
            <div className="weather-details">
               체감 온도: °C
               <br />
               풍속: m/s
            </div>
         </div>

         {/* 하단 상세정보 링크 */}
         <div className="weather-footer">
            <a>추가 상세 정보</a>
         </div>
      </div>
   )
}

export default Today_weather
