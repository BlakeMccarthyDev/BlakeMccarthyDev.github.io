import './App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Works from './Pages/Works.jsx'
import WhirlpoolArticle from "./Pages/works-folder/whirlpool.jsx"
import RPSArticle from "./Pages/works-folder/rockpaperscissors.jsx"
import MovementArticle from "./Pages/works-folder/movement-system.jsx"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar.jsx'

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
