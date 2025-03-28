//basic reusable burger ingredient

const Ingredient = ({ ingredient, onClick, buttonText, buttonName }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={onClick} name={buttonName}>
        {buttonText}
      </button>
    </li>
  );
};

export default Ingredient;
