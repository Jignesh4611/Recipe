import axios from "axios";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const getPopularrecipe = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data.meals;
};
export const searchRecipe = async (query) => {
  const response = await axios.get(`${BASE_URL}${query}`);
  return response.data.meals;
};

export const getRecipeById = async (id) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    // ✅ Check if data exists before accessing [0]
    if (res.data.meals && res.data.meals.length > 0) {
      return res.data.meals[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Failed to fetch recipe:", error);
    return null;
  }
};
