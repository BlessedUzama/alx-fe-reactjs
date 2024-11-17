import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import RecommendationsList from './components/RecommendationsList'

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <RecommendationsList/>
        <Routes>
          <Route path='/' element={<RecipeList />} />
          <Route path='/recipe/:recipeid' element={<RecipeDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
