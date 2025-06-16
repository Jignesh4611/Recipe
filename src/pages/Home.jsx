import React from 'react'
import RecipeChart from '../../Components/RecipeChart'

const Home = () => {
    const recipes = [
        { id: 1, title: "Vadapaav", },
        { id: 2, title: "DalBati", },
        { id: 3, title: "Dhokla", },
        { id: 4, title: "samosa", },
    ]
    const handleSearch = () => {


    }
    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text'
                    placeholder='search recipe....'
                    className='search-input' />
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
