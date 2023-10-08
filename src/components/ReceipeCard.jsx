import React from 'react'

const ReceipeCard = ({recipe}) => {
  const{idMeal,strMeal,strCategory,strMealThumb} = recipe;

  return (
    <div className='card'>
      <img 
      src={strMealThumb}
      alt={strMeal}
      className='card-image'
      />
      <div className='card-body'>
        <span className='category'>{strCategory}</span>
        <h2>{strMeal}</h2>
        <a href={"https://www.themealdb.com/meal/" +idMeal} target="_blank">Ingredients</a>
      </div>
    </div>
  )
}

export default ReceipeCard
