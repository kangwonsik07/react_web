import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Now_Weather from './pages/Now_Weather'
import Now_Weather_Detail from './pages/Now_Weather_Detail'
import Weather_5Days from './pages/Weather_5Days'
import NotFound from './pages/NotFound'

import Banner from './components/Banner'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         {/* <Route path="/now_weather" element={<Now_Weather />} />
         <Route path="/now_weather_detail" element={<Now_Weather_Detail />} />
         <Route path="/" element={<Weather_5Days />} />
         <Route path="/" element={<Weather_5Days />} />
         <Route path="/" element={<Weather_5Days />} />
         <Route path="/*" element={<NotFound />} /> */}
      </Routes>
   )
}

export default App
