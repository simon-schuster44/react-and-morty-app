import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header>React and Morty App</Header>

      <Card>
        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" />
        <h2>Morty Smith</h2>
      </Card>
      <NavBar>
        <a href="#">Placeholder</a>
        <a href="#">Placeholder</a>
        <a href="#">Placeholder</a>
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

const Card = styled.section`
  border: 2px solid black;
  box-shadow: 2px 0 10px black;
  margin: 100px auto;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  overflow: hidden;
`;

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 60px;
  background-color: #1f2232;
  display: flex;
  justify-content: space-around;
`;
