// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ ingredients, addToBurger }) => {
  const handleClick = (event) => {
    const burgerIngredient = ingredients.find(
      //find the ingredient matching the name of the button they clicked
      (ingredient) => ingredient.name === event.target.name
    );
    const newIngredient = {
      //create ingredient with unique ID
      ...burgerIngredient,
      id: Date.now() + Math.random(), // unique timestamp + random number
    };

    addToBurger(newIngredient); //add to burger stack
  };

  return (
    <ul>
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          ingredient={ingredient}
          onClick={handleClick}
          buttonText="+"
          buttonName={ingredient.name}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
