import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import Booking from './components/Booking'
import Details from './components/Details'

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar brand='Strivestaurant' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<h1>PROFILE PAGE</h1>} />
          <Route path='/reservations' element={<Booking />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/details/:pastaId' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
