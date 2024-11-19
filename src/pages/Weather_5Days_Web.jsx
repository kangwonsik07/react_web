// 5일간 날씨 상세정보창
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Weather_5Days_detail from '../components/Weather_5Days_detail'
import '../style/Now_Weather.css'

function Weather_5Days_Web() {
   return (
      <div>
         <header>
            <Banner />
         </header>
         <main>
            <Weather_5Days_detail />
         </main>
         <Footer />
      </div>
   )
}

export default Weather_5Days_Web
