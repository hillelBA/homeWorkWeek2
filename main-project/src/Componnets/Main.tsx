import GalleryHW from "../pages/GalleryHW";
// import Section from "./Section";
import styles from "./Main.module.css";
import ApiHw from "../pages/ApiHw";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import Shop from "../pages/Shop";
import Query from "../pages/Query";

function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryHW />} />
        <Route path="/api" element={<ApiHw />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/Query" element={<Query />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
}
export default Main;
