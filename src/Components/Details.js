import styled from "styled-components";
import { useContext } from "react";
import { FavoriteContext } from "../context/Favorites-context";
import useLocalStorage from "../Hooks/useLocalStorage";

export default function Details({ character, setDetailsState }) {
  return (
    <CharacterCard>
      <Image src={character.image} />
      <NameTag>{character.name}</NameTag>
      <h3>Gender: {character.gender}</h3>
      <h3>Species: {character.species}</h3>
      <h3>Status: {character.status}</h3>
      <Button onClick={() => setDetailsState(false)}>show less</Button>
    </CharacterCard>
  );
}

const CharacterCard = styled.section`
  box-shadow: 2px 0 10px black;
  background-color: #94778b;
  margin: 100px auto;
  border-radius: 14px;
  width: 90%;
  max-width: 400px;
  overflow: hidden;
  h3 {
    font-size: 1.5rem;
  }
`;
const Image = styled.img`
  width: 100%;
`;

const NameTag = styled.h2`
  margin: 15px;
  font-size: 30px;
`;

const Button = styled.button`
  margin: 10px;
  background-color: var(--BackgroundColor);
  font-size: 30px;
  border-radius: 14px;
`;
