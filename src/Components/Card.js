import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as StarEmptySvg } from "../svg/star-regular.svg";
import { ReactComponent as StarFilledSvg } from "../svg/star-solid.svg";

export default function Card({ character, setDetailsState, handleFavorite }) {
  const [starState, setStarState] = useState(false);
  return (
    <>
      <CharacterCard>
        <Image src={character.image} />
        <NameTag>{character.name}</NameTag>
        <Button onClick={() => setDetailsState(character)}>show more</Button>
        <StarEmptyContainer
          starstate={starState}
          onClick={() => {
            setStarState(true);
            handleFavorite(character.id);
          }}
        />
        <StarFilledContainer
          starstate={starState}
          onClick={() => {
            setStarState(false);
            handleFavorite(character.id);
          }}
        />
      </CharacterCard>
    </>
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
  position: relative;
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

const StarEmptyContainer = styled(StarEmptySvg)`
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  ${(props) => props.starstate && "z-index: -1"}
`;
const StarFilledContainer = styled(StarFilledSvg)`
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  z-index: -1;
  ${(props) => props.starstate && "z-index: 1"}
`;
