import React from 'react'
import { useRecipeContext } from '../context/recipeContext'
import RecipeChart from '../Components/RecipeChart'

const Favorite = () => {
    const { favorites } = useRecipeContext();
    if (favorites) {
        return <div className="recipe-grid">
            {favorites.map((recipe) => (
                <RecipeChart recipe={recipe} key={recipe.idMeal} />))}
        </div>
    }
    return (
        <div className='favirites-empty'>
            <h2>No Favorite recipe Yet</h2>
            <p>Start adding recipe to your favorites and they will appear  here</p>
        </div>
    )
}

export default Favorite
