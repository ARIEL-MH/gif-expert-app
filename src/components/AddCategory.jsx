import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChanged = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <=1 ) return;
    // setCategories((categories => [inputValue, ...categories])); // para agregar categorias en el hijo
    onNewCategory( inputValue.trim() )
    setInputValue('')  
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChanged }
      />
    </form>
  ); 
};
