// 5일간 날씨 상세정보창
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Weather_5Days_detail from '../components/Weather_5Days_detail'

function Weather_5Days_Web() {
   return (
      <div>
         <div>
            <Banner />
            <Weather_5Days_detail />
         </div>
         <Footer />
      </div>
   )
}

export default Weather_5Days_Web
