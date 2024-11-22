import './css/Weather_5Days_detail.css'
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useState, useEffect, useMemo } from 'react'
import 'swiper/swiper-bundle.css'
import { fetch5DayWeather } from './slider/weatherSlider'

// 이페이지는 공부 필요
function Weather_5Days_detail() {
   const dispatch = useDispatch()
   const { data: weathers, loading, error } = useSelector((state) => state.weather.forecast)

   const [selectedDate, setSelectedDate] = useState('')
   const [selectedTimeData, setSelectedTimeData] = useState(null)
   const [timeSlots, setTimeSlots] = useState([])

   // 00:00부터 21:00까지의 기본 시간 배열
   const defaultTimes = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']

   // API 데이터 로드
   useEffect(() => {
      if (!weathers) {
         dispatch(fetch5DayWeather())
      }
   }, [dispatch, weathers])

   // 날짜 목록 추출
   const uniqueDates = useMemo(() => {
      if (!weathers) return []
      return [...new Set(weathers.list.map((item) => item.dt_txt.split(' ')[0]))]
   }, [weathers])

   // 특정 날짜의 시간 데이터를 기본 시간 배열과 병합
   useEffect(() => {
      if (selectedDate && weathers) {
         const dateData = weathers.list.filter((item) => item.dt_txt.startsWith(selectedDate))
         const timeMap = dateData.reduce((map, item) => {
            const time = item.dt_txt.split(' ')[1].slice(0, 5) // HH:mm 형식으로 변환
            map[time] = item
            return map
         }, {})

         // 기본 시간 배열과 API 데이터를 병합
         const updatedTimeSlots = defaultTimes.map((time) => timeMap[time] || { dt_txt: `${selectedDate} ${time}`, main: {}, weather: [{}] })
         setTimeSlots(updatedTimeSlots)
         setSelectedTimeData(updatedTimeSlots[0]) // 첫 번째 시간 데이터 설정
      }
   }, [selectedDate, weathers])

   // 초기 날짜 설정
   useEffect(() => {
      if (uniqueDates.length > 0) {
         setSelectedDate(uniqueDates[0])
      }
   }, [uniqueDates])

   // 슬라이드 변경 이벤트
   const handleSlideChange = (swiper) => {
      const date = uniqueDates[swiper.activeIndex]
      setSelectedDate(date)
   }

   // 시간 클릭 이벤트
   const handleTimeClick = (timeData) => {
      setSelectedTimeData(timeData)
   }

   // 로딩 및 에러 처리
   if (loading) return <p>날씨 데이터를 로드 중입니다...</p>
   if (error) return <p>데이터 로드 중 오류가 발생했습니다: {error}</p>

   return (
      <div className="weather-tomorrow-card">
         {/* 날짜 슬라이더 */}
         <div className="weather-tomorrow-header">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={1} spaceBetween={5} onSlideChange={handleSlideChange}>
               {uniqueDates.map((date, index) => (
                  <SwiperSlide key={index}>
                     <div className="slide-content">{date}</div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         {/* 시간별 데이터 */}
         <div className="weather-hours">
            {timeSlots.map((timeData, index) => (
               <div key={index} className="weather-hour-item" onClick={() => handleTimeClick(timeData)}>
                  {timeData.dt_txt.split(' ')[1].slice(0, 5)} {/* HH:mm 형식으로 표시 */}
               </div>
            ))}
         </div>

         {/* 선택된 시간 데이터 */}
         <div className="weather-tomorrow-body">
            {selectedTimeData ? (
               <>
                  <div className="weather-icon">
                     <img src={selectedTimeData.weather[0].icon ? `https://openweathermap.org/img/wn/${selectedTimeData.weather[0].icon}@2x.png` : ''} alt={selectedTimeData.weather[0].description || '지난 시간입니다'} />
                  </div>
                  <div className="weather-info">
                     <p>날짜: {selectedTimeData.dt_txt.split(' ')[0]}</p>
                     <p>시간: {selectedTimeData.dt_txt.split(' ')[1].slice(0, 5)}</p> {/* HH:mm 형식으로 표시 */}
                     <p>기온: {selectedTimeData.main.temp || '-'}°C</p>
                     <p>체감 온도: {selectedTimeData.main.feels_like || '-'}°C</p>
                     <p>날씨: {selectedTimeData.weather[0].description || '데이터 없음'}</p>
                  </div>
                  <div className="weather-stats">
                     <p>대기압: {selectedTimeData.main.pressure || '-'} hPa</p>
                     <p>풍속: {selectedTimeData.wind?.speed || '-'} m/s</p>
                     <p>습도: {selectedTimeData.main.humidity || '-'}%</p>
                     <p>구름량: {selectedTimeData.clouds?.all || '-'}%</p>
                  </div>
               </>
            ) : (
               <p>날씨 데이터를 불러오는 중입니다...</p>
            )}
         </div>
      </div>
   )
}

export default Weather_5Days_detail
