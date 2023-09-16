import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Company from './pages/Company'
import Home from './pages/Home'
import MotorSport from './pages/MOTORSPORT'
import Store from './pages/Store'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/motorsport' element={<MotorSport />} />
        <Route path='/store' element={<Store/>}/>
       < Route path='/company' element={<Company/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
