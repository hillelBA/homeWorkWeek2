import { useEffect, useState } from "react";
import styles from "./ApiHw.module.css";

function ApiHw() {
  const [vip_arr, setVip_arr] = useState([] as Vip[]);
  useEffect(() => {
    fetch("http://fs1.co.il/bus/vip.php")
      .then((response) => response.json())
      .then((data) => setVip_arr(data as Vip[]));
  }, []);
  return (
    <div>
      <h1>ApiHw</h1>
      <div className={styles.vipGrid}>
        {vip_arr.map((vip) => (
          <div key={vip.name} className={styles.vip}>
            <h2>{vip.name}</h2>
            <p>worth: {vip.worth}</p>
            <p>birth year: {vip.birth_year}</p>
            <p>source: {vip.source}</p>
            <p>country: {vip.country}</p>
            <img src={vip.image} alt={vip.name} className={styles.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
type Vip = {
  name: string;
  worth: string;
  birth_year: string;
  source: string;
  country: string;
  image: string;
};
export default ApiHw;
