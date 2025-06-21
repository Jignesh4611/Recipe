import { createContext, useState, useEffect, useContext } from "react";

// 1. Create the context
const RecipeContext = createContext();

// 2. Custom hook to use the context
export const useRecipeContext = () => useContext(RecipeContext);

// 3. Function to safely get initial favorites from localStorage
const getInitialFavorites = () => {
    try {
        const stored = localStorage.getItem("favorites");
        if (stored && stored !== "undefined") {
            return JSON.parse(stored);
        }
    } catch (error) {
        console.error("Failed to parse favorites from localStorage:", error);
        localStorage.removeItem("favorites");
    }
    return [];
};

// 4. Provider component
export const RecipeProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(getInitialFavorites);

    // Save to localStorage when favorites change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Add to favorites
    const addToFavorites = (recipe) => {
        setFavorites((prev) => [...prev, recipe]);
    };

    // Remove from favorites
    const removeFavorites = (recipeId) => {
        setFavorites((prev) =>
            prev.filter((recipe) => recipe.idMeal !== recipeId)
        );
    };

    // Check if recipe is favorite
    const isFavorite = (recipeId) => {
        return favorites.some((recipe) => recipe.idMeal === recipeId);
    };

    // Context value
    const value = {
        favorites,
        addToFavorites,
        removeFavorites,
        isFavorite,
    };

    return (
        <RecipeContext.Provider value={value}>
            {children}
        </RecipeContext.Provider>
    );
};
