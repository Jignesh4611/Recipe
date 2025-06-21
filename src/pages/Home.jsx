import React, { useState, useEffect } from 'react'
import RecipeChart from '../Components/RecipeChart'
import { searchRecipe, getPopularrecipe } from '../services/api'
import './Home.css'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularRecipe = async () => {
            try {
                const popularRecipe = await getPopularrecipe();
                setRecipes(popularRecipe);
            } catch (err) {
                console.log(err);
                setError("Failed to laod recipe");
            }
            finally {
                setLoading(false)
            }
        };
        loadPopularRecipe();
    }, [])



    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)
        try {
            const searchResult = await searchRecipe(searchQuery)
            setRecipes(searchResult)
            setError(null)

        } catch (err) {
            setError("failed to search movie")
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text'
                    placeholder='search recipe....'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type='submit' className="search-button">Search</button>
            </form>
            {error && <div className='error-message'>{error}</div>}
            {
                loading ? (<div className='loading'> Loading....</div>) : (

                    <div className="recipe-grid">
                        {recipes.map((recipe) => (
                            recipe.strMeal.toLowerCase().startsWith(searchQuery) && <RecipeChart recipe={recipe} key={recipe.idMeal} />))}
                    </div>
                )
            }
        </div>
    )
}

export default Home
