import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Shop.module.css";

function Shop() {
  const [shop_arr, setShop_arr] = useState([]);
  useEffect(() => {
    fetch("http://fs1.co.il/bus/shop.php")
      .then((response) => response.json())
      .then((data) => setShop_arr(data));
  }, []);
  const { category } = useParams();
  return (
    <div className={styles.shop}>
      <h2>Shop</h2>
      <div className={styles.categories}>
        <a
          href="/shop/food"
          style={
            category == "food"
              ? { pointerEvents: "none", color: "grey", textDecoration: "none" }
              : {}
          }
        >
          food
        </a>
        <a
          href="/shop/clothing"
          style={
            category == "clothing"
              ? { pointerEvents: "none", color: "grey", textDecoration: "none" }
              : {}
          }
        >
          clothing
        </a>
        <a
          href="/shop/animals"
          style={
            category == "animals"
              ? { pointerEvents: "none", color: "grey", textDecoration: "none" }
              : {}
          }
        >
          animals
        </a>
      </div>
      <ul className={styles.items}>
        {shop_arr.map((item: ShopType) => {
          if (item.cat === category) {
            return (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.img} alt={item.name} />
                <p>{item.price}</p>
              </li>
            );
          }
          return null;
        }) || "No items found"}
      </ul>
    </div>
  );
}
type ShopType = {
  id: string;
  cat: string;
  name: string;
  price: string;
  img: string;
};
export default Shop;
