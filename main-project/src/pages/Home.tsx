import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Section from "../Componnets/Section";
function Home() {
  const categories = ["food", "clothing", "animals"];
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [gameSearch, setGameSearch] = useState("");
  return (
    <>
      <h1>Home</h1>
      <Section name="Categories">
        <ul className={styles.categories}>
          {categories.map((category) => (
            <li key={category}>
              <a href={`/shop/${category}`}>{category}</a>
            </li>
          ))}
        </ul>
      </Section>
      <Section name="Search">
        <h2>Search</h2>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => navigate(`/Query/?search=${search}`)}>
          Search
        </button>
      </Section>
      <Section name="Games">
        <h2>Games</h2>
        <input
          type="number"
          placeholder="Game Search"
          onChange={(e) => {
            setGameSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (gameSearch && Number(gameSearch) > 1000)
              navigate(`/Games/${gameSearch}`);
            else navigate(`/Games/1000`);
          }}
        >
          Search
        </button>
      </Section>
    </>
  );
}
export default Home;
