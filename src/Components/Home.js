import { useState } from "react";

import Card from "./Card";
import Details from "./Details";

export default function Home({ data, handleFavorite }) {
  const [detailsState, setDetailsState] = useState(false);
  if (detailsState) {
    return (
      <Details character={detailsState} setDetailsState={setDetailsState} />
    );
  } else {
    return data.map((character) => (
      <Card
        key={character.id}
        character={character}
        setDetailsState={setDetailsState}
        handleFavorite={handleFavorite}
      />
    ));
  }
}
