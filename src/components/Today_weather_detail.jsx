import React from 'react'
import './css/Today_weather_detail.css'

function Today_weather_detail() {
   return (
      <div className="container">
         {/* 날씨 상세 카드 */}
         <div className="detailed-weather-card">
            {/* 헤더 */}
            <div className="detailed-header">인천 현재 시간</div>

            {/* 본문 */}
            <div className="detailed-body">
               {/* 날씨 아이콘 */}
               <div className="weather-icon">🌧</div>

               {/* 주요 온도 정보 */}
               <div className="weather-info">
                  기온: 19°C
                  <br />
                  체감 온도: 17°C
               </div>

               {/* 상세 정보 */}
               <div className="weather-stats">
                  <div>대기압</div>
                  <div>풍속</div>
                  <div>습도</div>
                  <div>가시거리</div>
                  <div>강수량</div>
                  <div>흐림</div>
                  <div>일출시간</div>
                  <div>일몰시간</div>
               </div>
            </div>

            {/* 하단 상세 정보 링크 */}
            <div className="detailed-footer">
               <a href="/tomorrow-weather">내일 날씨 정보 →</a>
            </div>
         </div>
      </div>
   )
}

export default Today_weather_detail
