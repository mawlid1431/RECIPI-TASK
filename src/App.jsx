import React, { useEffect, useState } from 'react';

function App() {
  const [meals, setMeals] = useState([]);
  const [value, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then((response) => response.json())
      .then((data) => {
        const userD = data.meals;
        setMeals(userD);
      })
      .catch((error) => {
        console.log('Error fetching meals:', error);
      });
  }, []);

  const openYouTubeLink = (link) => {
    window.open(link);
  };

  const searchMeals = () => {
    setIsSearching(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((response) => response.json())
      .then((data) => {
        const userD = data.meals;
        setMeals(userD);
      })
      .catch((error) => {
        console.log('Error fetching meals:', error);
      });
  };

  return (
    <div className="App">
      <h1>Chicken Recipes</h1>
      <div className="search-input">
        <input type="text" placeholder="Search" value={value} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchMeals}>Search</button>
      </div>

      {isSearching && meals.length === 0 && <p>No meals found. Please try a different search term.</p>}

      {isSearching &&
        meals.map((meal) => (
          <div key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p className="">Description: {meal.strInstructions}</p>
            <p>Category: {meal.strCategory}</p>
            <p>
              Ingredients: {meal.strIngredient1}, {meal.strIngredient2}, {meal.strIngredient3}
            </p>
            <button onClick={() => openYouTubeLink(meal.strYoutube)}>Watch Now</button>
          </div>
        ))}
    </div>
  );
}

export default App;
