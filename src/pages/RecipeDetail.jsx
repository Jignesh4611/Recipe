import { useParams } from 'react-router-dom';
import { getRecipeById } from '../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams(); // 🆔 pulls recipe ID from URL
  const [meal, setMeal] = useState(null);

  useEffect(() => {
  const fetchMeal = async () => {
    console.log("Fetching ID:", id); // 🔍 Check ID
    const data = await getRecipeById(id);
    console.log("Fetched data:", data); // 🔍 See what's returned
    setMeal(data);
  };
  fetchMeal();
}, [id]);

  if (!meal) return <p>Loading...</p>;
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };
  return (
    <div className="recipe-detail">
      <button onClick={() => navigate('/')}>← Back</button>

      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} width="300" />

      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <h3>Ingredients</h3>
      <ul>
        {getIngredients().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>

      {meal.strYoutube && (
        <a href={meal.strYoutube} target="_blank" rel="noreferrer">
          ▶️ Watch on YouTube
        </a>
      )}
    </div>
  );

};

export default RecipeDetail;
