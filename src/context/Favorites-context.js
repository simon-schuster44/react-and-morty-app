import { useState } from "react";
import { createContext } from "react";

export const FavoriteContext = createContext();
export function FavoriteContextProvider({ children }) {
  const [favoriteData, setFavoriteData] = useState([]);
  return (
    <FavoriteContext.Provider value={{ favoriteData, setFavoriteData }}>
      {children}
    </FavoriteContext.Provider>
  );
}
