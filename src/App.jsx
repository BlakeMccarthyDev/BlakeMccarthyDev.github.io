import './App.css'
import Home from '../src/pages/Home.jsx'
import About from './pages/About.jsx'
import Works from './pages/Works.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/works' element={<Works />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
