import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Home() {
  const categories = ["food", "clothing", "animals"];
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  return (
    <>
      <h1>Home</h1>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li key={category}>
            <a href={`/shop/${category}`}>{category}</a>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => navigate(`/Query/?search=${search}`)}>
        Search
      </button>
    </>
  );
}
export default Home;
