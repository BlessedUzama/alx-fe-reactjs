import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'


const DeleteRecipeButton = ({ recipeid }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
    const navigate = useNavigate()

    const handleDelete = () => {
        deleteRecipe(recipeid);
        navigate('/')
        setSearchTerm('')
    }
  return (
    <div>
        <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  )
}

export default DeleteRecipeButton
