import "./App.css";
import styled from "styled-components";
import useFetch from "./Hooks/useFetch";

function App() {
  const [data, setData] = useFetch(
    "https://rickandmortyapi.com/api/character",
    "results"
  );
  console.log(data);
  return (
    <div className="App">
      <Header>React and Morty App</Header>

      {data.map((character) => (
        <Card>
          <Image src={character.image} />
          <NameTag>{character.name}</NameTag>
        </Card>
      ))}
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
  box-shadow: 2px 0 10px black;
  background-color: #94778b;
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

const Image = styled.img`
  border: 4px solid #1f2232;
  border-radius: 8px;
  margin: 15px;
`;

const NameTag = styled.h2`
  margin: 10px;
  font-size: 30px;
`;
