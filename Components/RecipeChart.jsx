import React from 'react'

const RecipeChart = ({ recipe }) => {
    function onFavoriteClick() {
        alert("Click")
    }
    return (
        <div className='recipe-card'>
            <div className='recipe-poster'>
                <img src={recipe.url} alt={recipe.title} />
                <div className="recipe-overlay">
                    <button className='favorite-btn' onClick={onFavoriteClick}>🤍</button>
                </div>

            </div>
            <div className="recipe-info">
                <h3>{recipe.title}</h3>
            </div>
        </div>
    )
}

export default RecipeChart
