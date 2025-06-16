import React from 'react'

const RecipeChart = ({recipe}) => {
function onFavoriteClick()
{
    alert("Click")
}



  return (
    <div className='recipe-card'>
        <div className='movie-poster'>
            <img src={recipe.url} alt={recipe.title}/>
            <button className='favorite-btn' onClick={onFavoriteClick}></button>
        </div>
    </div>
  )
}

export default RecipeChart
