import "./App.css";
import styled from "styled-components";
import useFetch from "./Hooks/useFetch";
import { ReactComponent as HouseSvg } from "./svg/house-solid.svg";
import { ReactComponent as DetailsSvg } from "./svg/sistrix.svg";
import { useState } from "react";
import Home from "./Components/Home";
import Details from "./Components/Details";

function App() {
  const [data, setData] = useFetch(
    "https://rickandmortyapi.com/api/character",
    "results"
  );
  const [pageState, setPageState] = useState("home");

  const [details, setDetails] = useState([]);
  function addDetailsCard(value) {
    setDetails([...details, value]);
  }

  return (
    <div className="App">
      <Header>React and Morty App</Header>
      {pageState === "home" ? (
        <Home
          data={data}
          addDetailsCard={addDetailsCard}
          setPageState={setPageState}
        />
      ) : (
        ""
      )}
      {pageState === "details" ? <Details data={data} details={details} /> : ""}
      <NavBar>
        <HomeIcon onClick={() => setPageState("home")} />
        <a href="#">Placeholder</a>
        <DetailsIcon onClick={() => setPageState("details")} />
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
`;

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 80px;
  background-color: #1f2232;
  display: flex;
  justify-content: space-around;
`;

const HomeIcon = styled(HouseSvg)`
  width: 20%;
  fill: white;
`;
const DetailsIcon = styled(DetailsSvg)`
  width: 20%;
  fill: white;
`;
