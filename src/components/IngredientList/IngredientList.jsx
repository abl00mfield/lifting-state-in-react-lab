// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, addToBurger }) => {
  const handleClick = (event) => {
    const burgerIngredient = ingredients.find(
      (ingredient) => ingredient.name === event.target.name
    );
    const newIngredient = {
      ...burgerIngredient,
      id: Date.now() + Math.random(), // 👈 unique timestamp + random number
    };
    console.log(newIngredient);
    addToBurger(newIngredient);
  };

  return (
    <ul>
      {ingredients.map((ingredient) => {
        return (
          <li
            key={ingredient.name}
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button name={ingredient.name} onClick={handleClick}>
              +
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
