import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('Application must be written appContextProvider!');
  }

  return context;
};

export const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (cloth) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(cloth);
    setFavorites(newFavorites);
  };

  const removeToFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((cloth) => cloth.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <AppContext.Provider value={{ favorites, addToFavorites, removeToFavorites }}>
      {children}
    </AppContext.Provider>
  );
};
