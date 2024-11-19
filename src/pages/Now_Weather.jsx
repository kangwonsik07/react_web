// 현재 날씨 내일 날씨 기본정보 창
import React from 'react'
import Banner from '../components/Banner'
import Today_weather from '../components/Today_weather'
import Weather_5Days from '../components/Weather_5Days'
import Footer from '../components/Footer'
import '../style/Now_Weather.css'

function Now_Weather() {
   return (
      <div>
         <header>
            <Banner />
         </header>
         <main>
            <Today_weather />
            <Weather_5Days />
         </main>
         <Footer />
      </div>
   )
}

export default Now_Weather
