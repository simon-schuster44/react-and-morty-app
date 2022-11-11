import { useState } from "react";

import Card from "./Card";
import Details from "./Details";

export default function Home({ data, addDetailsCard, setPageState }) {
  return data.map((item) => (
    <Card
      key={item.id}
      addDetailsCard={addDetailsCard}
      image={item.image}
      id={item.id}
      name={item.name}
      setPageState={setPageState}
    />
  ));
}
