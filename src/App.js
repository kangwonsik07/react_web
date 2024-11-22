import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Now_Weather from './pages/Now_Weather'
import Now_Weather_Detail from './pages/Now_Weather_Detail'
import Weather_5Days_Web from './pages/Weather_5Days_Web'

import NotFound from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/now_weather/" element={<Now_Weather />} />
         <Route path="/Now_Weather_Detail" element={<Now_Weather_Detail />} />
         <Route path="/Weather_5Days_Web" element={<Weather_5Days_Web />} />

         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
