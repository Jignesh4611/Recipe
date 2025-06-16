import React, { useState } from 'react'
import RecipeChart from '../../Components/RecipeChart'
import { searchRecipe,getPopularrecipe } from '../../servises/api'

const Home = () => {
    const [searchQuery, setsearchQuery] = useState("")
    
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setsearchQuery("")
    }
    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text'
                    placeholder='search recipe....'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setsearchQuery(e.target.value)}
                />

                <button type='submit' className="search-button">Search</button>
            </form>
            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeChart recipe={recipe} key={recipe.id} />
                ))}
            </div>
        </div>
    )
}

export default Home
