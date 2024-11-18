import './css/Weather_5Days_detail.css'

function Weather_5Days_detail() {
   return (
      <div className="weather-tomorrow-card">
         {/* 헤더 */}
         <div className="weather-tomorrow-header">
            인천 내일 시간
            <span className="arrow-icon">→</span>
         </div>

         {/* 시간별 데이터 */}
         <div className="weather-hours">
            <div className="weather-hour-item">00시</div>
            <div className="weather-hour-item">3시</div>
            <div className="weather-hour-item">6시</div>
            <div className="weather-hour-item">9시</div>
            <div className="weather-hour-item">12시</div>
            <div className="weather-hour-item">15시</div>
            <div className="weather-hour-item">18시</div>
            <div className="weather-hour-item">21시</div>
            <div className="weather-hour-item">24시</div>
         </div>

         {/* 본문 */}
         <div className="weather-tomorrow-body">
            <div className="weather-icon">☁</div>
            <div className="weather-info">
               기온: 19°C
               <br />
               체감 온도: 17°C
            </div>
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
      </div>
   )
}

export default Weather_5Days_detail
