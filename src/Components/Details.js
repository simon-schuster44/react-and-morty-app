import styled from "styled-components";

export default function Details({ data, details }) {
  return data.map((item) => {
    if (details.includes(item.id)) {
      console.log(item);
      return (
        <CharacterCard>
          <Image src={item.image} />
          <NameTag>{item.name}</NameTag>
          <h3>Gender: {item.gender}</h3>
          <h3>Species: {item.species}</h3>
          <h3>Status: {item.status}</h3>
          <Button>show more</Button>
        </CharacterCard>
      );
    }
  });
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
