import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Works from './pages/Works.jsx'
import WhirlpoolArticle from "./pages/works-folder/whirlpool.jsx"
import RPSArticle from "./pages/works-folder/rockpaperscissors.jsx"
import MovementArticle from "./pages/works-folder/movement-system.jsx"
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
          <Route path='/works/whirlpool' element={<WhirlpoolArticle />} />
          <Route path='/works/rpsgame' element={<RPSArticle />} />
          <Route path='/works/movement' element={<MovementArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
