import React from 'react'
import './css/Today_weather_detail.css'

import { useSelector } from 'react-redux'

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

function Today_weather_detail() {
   const { data: weathers } = useSelector((state) => state.weather.today)
   if (!weathers) return <p>데이터를 로드할 수 없습니다.</p>
   console.log(weathers)
   const koreancity = koreanMapping[weathers.name.toLowerCase()] || weathers.name

   const now = new Date()
   const currentDate = now.toLocaleDateString('ko-KR') // 현재 날짜 (YYYY. MM. DD.)
   const currentTime = now.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
   })

   function convertSuntime(timestamp: number) {
      // 밀리세컨즈로 변환하여 Date 객체 생성
      const date = new Date(timestamp * 1000)

      // 시간과 분을 추출하여 두 자리로 포맷팅
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')

      return `${hours}:${minutes}`
   }

   return (
      <div className="container">
         {/* 날씨 상세 카드 */}
         <div className="detailed-weather-card">
            {/* 헤더 */}
            <div className="detailed-header">{koreancity} 현재 시간</div>

            {/* 본문 */}
            <div className="detailed-body">
               {/* 날씨 아이콘 */}
               <div className="weather-icon">
                  <img src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`} alt={weathers.weather[0].description} />
               </div>

               {/* 주요 온도 정보 */}
               <div className="weather-info">
                  현재 날짜: {currentDate}
                  <br />
                  현재 시간: {currentTime}
                  <br />
                  기온: {weathers.main.temp}°C
                  <br />
                  체감 온도: {weathers.main.feels_like}°C
                  <br />
                  날씨 상태: {weathers.weather[0].description}
               </div>

               {/* 상세 정보 */}
               <div className="weather-stats">
                  <div>대기압: {weathers.main.pressure} hPa</div>
                  <div>풍속: {weathers.wind.speed} m/s</div>
                  <div>습도: {weathers.main.humidity}%</div>
                  <div>가시거리: {weathers.visibility / 1000} km</div>
                  <div>구름량: {weathers.clouds.all}%</div>
                  <div>일출 시간: {convertSuntime(weathers.sys.sunrise)}</div>
                  <div>일몰 시간: {convertSuntime(weathers.sys.sunset)}</div>
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
