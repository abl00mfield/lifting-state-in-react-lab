// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ stack, removeFromBurger }) => {
  const handleClick = (event) => {
    removeFromBurger(event.target.name);
  };

  return (
    <ul>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={ingredient.id}
            ingredient={ingredient}
            onClick={handleClick}
            buttonText="X"
            buttonName={index}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
