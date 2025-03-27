// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  const handleClick = (event) => {
    props.removeFromBurger(event.target.name);
  };

  return (
    <ul>
      {props.stack.map((ingredient, index) => {
        return (
          <li key={ingredient.id} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={handleClick} name={index}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
