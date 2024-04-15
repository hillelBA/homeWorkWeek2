import styles from "./Games.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Games() {
  const params = useParams();
  const year = Number(params.year);

  const [games_array, setGamesArray] = useState([] as Game[]);
  useEffect(() => {
    try {
      fetch(`http://fs1.co.il/bus/xbox1.php`)
        .then((response) => response.json())
        .then((data) => setGamesArray(data as Game[]));
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <>
      <h1>Games</h1>
      <ul className={styles.games}>
        {games_array.map((game, index) => {
          if (year === 1000 || game.Year === year) {
            return (
              <li key={index}>
                <h2>
                  <a href={game.GameLink}>{game.Game}</a>
                </h2>
                <p>Genre: {game.Genre}</p>
                <p>Year: {game.Year}</p>
                <p>
                  Dev:{" "}
                  <a href={game.DevLink} className={styles.link}>
                    {game.Dev}{" "}
                  </a>
                </p>
                <p>
                  Publisher:{" "}
                  <a href={game.PublisherLink} className={styles.link}>
                    {game.Publisher}
                  </a>
                </p>
                <p>
                  Platform:{" "}
                  <a href={game.PlatformLink} className={styles.link}>
                    {game.Platform}
                  </a>
                </p>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
type Game = {
  Game: string;
  GameLink: string;
  Genre: string;
  Year: number;
  Dev: string;
  DevLink: string;
  Publisher: string;
  PublisherLink: string;
  Platform: string;
  PlatformLink: string;
};
export default Games;
