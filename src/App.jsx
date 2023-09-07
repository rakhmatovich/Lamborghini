import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MotorSport from './pages/MOTORSPORT'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/motorsport' element={<MotorSport />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
