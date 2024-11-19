// 현재 날씨 상세 정보창
import Today_weather_detail from '../components/Today_weather_detail'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import '../style/Now_Weather.css'

function Now_Weather_Detail() {
   return (
      <div>
         <header>
            <Banner />
         </header>
         <main>
            <Today_weather_detail />
         </main>
         <Footer />
      </div>
   )
}

export default Now_Weather_Detail
