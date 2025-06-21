import React from 'react'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favorite from './pages/Favorite';
import NavBar from './Components/NavBar';
import { RecipeProvider } from './context/recipeContext';
import RecipeDetail from './pages/RecipeDetail';
const App = () => {


  return (
    <RecipeProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>

      </main>
    </RecipeProvider>
  )
}

export default App
