import styled from "styled-components";
import { useState } from "react";

export default function Card({
  name,
  image,
  id,
  addDetailsCard,
  setPageState,
}) {
  return (
    <CharacterCard>
      <Image src={image} />
      <NameTag>{name}</NameTag>
      <Button
        onClick={() => {
          addDetailsCard(id);
          setPageState("details");
        }}
      >
        show more
      </Button>
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
