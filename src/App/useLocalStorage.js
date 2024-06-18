import React from "react";

function useLocalStorage(itemName, initialValue)  {
  
    const [item, setItem] = React.useState(initialValue);    //Estado inicial para uso interno del Custom Hook

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName) // Trae cada item de localStorage y lo guarda en la variable
    
          let parsedItem;
    
          if (!localStorageItem) {                                        //Logica(si no hay item en LS => )
            localStorage.setItem(itemName, JSON.stringify(initialValue)); //setItem con initialValue (stringified) para localstorage
            parsedItem = initialValue;                        //Declara(parsedItem) con initial value parseado
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 3000);
    }, []);

  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem)); //Pasamos a local storage el nuevo item
      setItem(newItem);
    };
  
    return {
      item, 
      saveItem,
      loading,
      error,
    };
  }

  export { useLocalStorage };