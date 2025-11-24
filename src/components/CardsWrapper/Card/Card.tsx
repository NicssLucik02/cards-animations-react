import classNames from "classnames";
import { useEffect, useRef } from "react";

type Props = {
  backImage: string;
  handleOpenCard: (name: string) => void;
  activeCards: string[];
};

export const Card: React.FC<Props> = ({
  backImage,
  handleOpenCard,
  activeCards,
}) => {
  const soundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    soundRef.current = new Audio("./src/assets/flipping-card-sound.mp3");
  }, []);

  const playSound = () => {
    if (!soundRef.current) {
      return;
    }

    soundRef.current.currentTime = 0;
    soundRef.current.playbackRate = 1.5;
    soundRef.current.play();
  };

  return (
    <div
      className={classNames("card", {
        flipped: activeCards.includes(backImage),
      })}
    >
      <div
        className="card-inner"
        onClick={() => {
          handleOpenCard(backImage);
          playSound();
        }}
      >
        <div className="card-front">
          <img
            src="./src/assets/card-front.jpg"
            className="card-front__image"
            alt="card-front"
          />
        </div>

        <div className="card-back">
          <img src={backImage} className="card-back__image" alt="card-back" />
        </div>
      </div>
    </div>
  );
};
