// 현재 날씨 상세 정보창
import Today_weather_detail from '../components/Today_weather_detail'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Now_Weather_Detail() {
   return (
      <div>
         <div>
            <Banner />
            <Today_weather_detail />
         </div>
         <Footer />
      </div>
   )
}

export default Now_Weather_Detail
