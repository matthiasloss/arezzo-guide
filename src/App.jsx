import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import MapPage from './pages/MapPage'
import Places from './pages/Places'
import PlaceDetail from './pages/PlaceDetail'
import Tours from './pages/Tours'
import TourDetail from './pages/TourDetail'
import Info from './pages/Info'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="karte" element={<MapPage />} />
        <Route path="orte" element={<Places />} />
        <Route path="orte/:id" element={<PlaceDetail />} />
        <Route path="touren" element={<Tours />} />
        <Route path="touren/:id" element={<TourDetail />} />
        <Route path="info" element={<Info />} />
      </Route>
    </Routes>
  )
}

export default App
