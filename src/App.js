import "./App.css";
import styled from "styled-components";
import useFetch from "./Hooks/useFetch";
import useLocalStorage from "./Hooks/useLocalStorage";

import { ReactComponent as HouseSvg } from "./svg/house-solid.svg";
import { ReactComponent as StarSvg } from "./svg/star-solid.svg";
import { useState } from "react";
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";

function App() {
  const [data, setData] = useFetch(
    "https://rickandmortyapi.com/api/character",
    "results"
  );
  const [pageState, setPageState] = useState("home");
  const [favorites, setFavorites] = useLocalStorage([], "favorites");

  function handleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return (
    <div className="App">
      <Header>React and Morty App</Header>
      {pageState === "home" ? (
        <Home data={data} handleFavorite={handleFavorite} />
      ) : (
        ""
      )}
      {pageState === "favorites" ? (
        <Favorites
          data={data}
          favorites={favorites}
          handleFavorite={handleFavorite}
        />
      ) : (
        ""
      )}
      <NavBar>
        <button onClick={() => console.log(favorites)}>Log Favs</button>
        <HomeIcon onClick={() => setPageState("home")} />
        <a href="#">Placeholder</a>
        <FavoritesIcon onClick={() => setPageState("favorites")} />
        <a href="#">Placeholder</a>
      </NavBar>
    </div>
  );
}

export default App;

const Header = styled.h1`
  box-shadow: 2px 0 8px black;
  background-color: #1f2232;
  color: #dedbd8;
  width: 100%;
  height: 60px;
  position: fixed;
  padding-top: 10px;
  top: 0;
  margin: 0;
  z-index: 1;
`;

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 80px;
  background-color: #1f2232;
  display: flex;
  justify-content: space-around;

  button {
    color: black;
  }
`;

const HomeIcon = styled(HouseSvg)`
  width: 20%;
  fill: white;
`;
const FavoritesIcon = styled(StarSvg)`
  width: 20%;
  fill: white;
`;
