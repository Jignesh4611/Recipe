import React from 'react';
import './RecipeChart.css';
import { useRecipeContext } from '../context/recipeContext';
import { Link } from 'react-router-dom';
const RecipeChart = ({ recipe }) => {

  const { isFavorite, addToFavorites, removeFavorites } = useRecipeContext()
  const favorite = isFavorite(recipe.idMeal)
  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFavorites(recipe.idMeal)
    else addToFavorites(recipe)
  }


  return (
    <Link to={`/recipe/${recipe.idMeal}`} className='recipe-card'>
      <div className='recipe-poster'>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="recipe-image"
        />
        <div className="recipe-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            {favorite ? "❤️" : "🤍"}
          </button>        </div>
      </div>
      <div className="recipe-info">
        <h3>{recipe.strMeal}</h3>
      </div>
    </Link>
  );
};

export default RecipeChart;
