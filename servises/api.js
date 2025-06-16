import axios from 'axios';
const BASE_URL= "https://www.themealdb.com/api/json/v1/1/search.php?s="


export const getPopularrecipe= async()=>{
    const  response=await axios.get(`${BASE_URL}`)
    return response.data.meals;
};
export const searchRecipe= async(query)=>{
    const  response=await axios.get(`${BASE_URL}${query}`)
    return response.data.meals;
};
