// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ ingredients, addToBurger }) => {
  const handleClick = (event) => {
    const burgerIngredient = ingredients.find(
      (ingredient) => ingredient.name === event.target.name
    );
    const newIngredient = {
      ...burgerIngredient,
      id: Date.now() + Math.random(), // unique timestamp + random number
    };

    addToBurger(newIngredient);
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
