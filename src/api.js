import axios from "axios";
Base_Url = "www.themealdb.com/api/json/v1/1/search.php?s=";

const searchMovie = async (mealName) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: mealName,
      },
    });

    return response.data.meals || []; // handle null case
  } catch (error) {
    console.error("Error fetching meal:", error);
    return [];
  }
};
export default searchMeal;
