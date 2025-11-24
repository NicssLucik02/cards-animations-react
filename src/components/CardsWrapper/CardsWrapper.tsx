import { useState } from "react";
import { Card } from "./Card/Card";
import "./cardsWrapper.scss";

export const CardsWrapper = () => {
  const [activeCards, setActiveCards] = useState<string[]>([]);
  const backImages = [
    "/assets/card-back1.png",
    "/assets/card-back2.png",
    "/assets/card-back3.png",
  ];

  const handleOpenCard = (name: string) => {
    setActiveCards((prev) =>
      prev.includes(name)
        ? prev.filter((card) => card !== name)
        : [...prev, name]
    );
  };

  return (
    <section className="cards-wrapper">
      {backImages.map((item) => {
        return (
          <Card
            key={item}
            backImage={item}
            activeCards={activeCards}
            handleOpenCard={handleOpenCard}
          />
        );
      })}
    </section>
  );
};
