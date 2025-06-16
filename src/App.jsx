import React,{useEffect} from 'react'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favorite from '../pages/Favorite';
import NavBar from '../Components/NavBar';
import { getPopularMovie } from '../servises/api';
const App = () => {

  
  return (
    <div>
      <NavBar />
    
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        
      </main>
    </div>

  )
}

export default App
