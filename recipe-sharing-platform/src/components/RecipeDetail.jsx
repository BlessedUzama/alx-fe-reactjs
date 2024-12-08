import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import recipeData from '../data.json'


const RecipeDetail = () => {

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);


  useState(() => {
    const selectedRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div>It's Loading...</div>
    )
  }


  return (
    <div className='container mx-auto p-4'>
      <div className='max-w-3xl shadow-lg mx-auto '>
        <img className='w-full h-72 object-cover rounded-lg' src={recipe.image} alt={recipe.title} />
        <h1 className='text-3xl font-bold mt-6'>{recipe.title}</h1>
        <p className='text-white-600 mt-2'>{recipe.summary}</p>
        
        <div className='mt-6 '>
          <h2 className='text-2xl font-semibold text-blue-800'>Ingredients</h2>
          <ul className='list-disk pl-6 mt-2'>
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index} className='text-white-700'>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='mt-6'>  
          <h2 className='text-2xl font-semibold text-blue-800'>Cooking Instructions</h2>
          <ol className='list-decimal pl-6 mt-2'>
            {recipe.instructions?.map((step, index) => (
              <li key={index} className='text-white-700'>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
