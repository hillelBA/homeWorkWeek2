import { useState } from "react";
import styles from "./GalleryHW.module.css";

const images = [
  {
    src: "./src/assets/img1.jpg",
    alt: "Image 1",
  },
  {
    src: "./src/assets/img2.jpg",
    alt: "Image 2",
  },
  {
    src: "./src/assets/img3.jpg",
    alt: "Image 3",
  },
  {
    src: "./src/assets/img4.jpg",
    alt: "Image 4",
  },
];
function GalleryHW() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <h2>Gallery</h2>
      <div className={styles.gallery}>
        <img src={images[index].src} alt={images[index].alt} />
        <div className={styles.btns}>
          <button
            onClick={() =>
              setIndex((index + images.length - 1) % images.length)
            }
          >
            ❮
          </button>
          <button onClick={() => setIndex((index + 1) % images.length)}>
            ❯
          </button>
        </div>
      </div>
    </>
  );
}
export default GalleryHW;
