import React, { useState } from 'react'
import RecipeChart from '../../Components/RecipeChart'


const Home = () => {
    const [searchQuery, setsearchQuery] = useState("")
    const recipes = [
        { id: 1, title: "Vadapaav", },
        { id: 2, title: "DalBati", },
        { id: 3, title: "Dhokla", },
        { id: 4, title: "samosa", },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)


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
                recipe.title.toLowerCase().startsWith(searchQuery) &&   <RecipeChart recipe={recipe} key={recipe.id} />
                ))}
            </div>
        </div>
    )
}

export default Home
