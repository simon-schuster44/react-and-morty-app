import Card from "./Card";
import { useState } from "react";
import Details from "./Details";

export default function Favorites({ data, favorites, handleFavorite }) {
  const [detailsState, setDetailsState] = useState(false);
  if (detailsState) {
    return (
      <Details character={detailsState} setDetailsState={setDetailsState} />
    );
  } else {
    return data
      .filter((item) => favorites.includes(item.id))
      .map((character) => (
        <Card
          key={character.id}
          character={character}
          setDetailsState={setDetailsState}
          handleFavorite={handleFavorite}
        />
      ));
  }
}
