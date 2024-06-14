import React from "react";


function useLocalStorage(itemName, initialValue)  {
    const localStorageItem = localStorage.getItem(itemName) // Trae cada item de localStorage y lo guarda en la variable
  
    let parsedItem;
  
    if (!localStorageItem) {                                        //Logica(si no hay item en LS => )
      localStorage.setItem(itemName, JSON.stringify(initialValue)); //setItem con initialValue (stringified) para localstorage
      parsedItem = initialValue;                        //Declara(parsedItem) con initial value parseado
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);    //Estado inicial para uso interno del Custom Hook
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem)); //Pasamos a local storage el nuevo item
      setItem(newItem);
    };
  
    return [item, saveItem];
  }

  export { useLocalStorage };