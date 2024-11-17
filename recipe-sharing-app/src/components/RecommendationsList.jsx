import React, { useEffect, useState } from 'react'
import { useRecipeStore } from './recipeStore'
import { link } from 'react-router-dom'



const RecommendationsList = () => {
    const recommendations = useRecipeStore(state => useState.recommendations);
    const generateRecommendations = useRecipeStore(state => useState.generateRecommendations);
    const favorites = useRecipeStore(state => useState.favorites);

    useEffect(() => {
        generateRecommendations();
    }, [favorites, generateRecommendations]);

    if (recommendations.length === 0) {
        return (
          <div>
            No recommendations available. Mark some recipes as favorites to see
            suggestions!
          </div>
        );
    }


  return (
    <div>
          <h2>Recommended for you</h2>
          {recommendations.map(recipe => (
              <div key={recipe.id}>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                  <link to={`/recipe/${recipe.id}`}>View details</link>
              </div>
          ))}
    </div>
  )
}

export default RecommendationsList
