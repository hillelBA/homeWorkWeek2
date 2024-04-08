import GalleryHW from "./GalleryHW";
import Section from "./Section";
import styles from "./Main.module.css";
import ApiHw from "./ApiHw";

function Main() {
  return (
    <main className={styles.main}>
      <Section name="Gallery">
        <h1 className={styles.title}>Main</h1>
        <p>Content</p>
        <GalleryHW />
      </Section>
      <Section name="Api">
        <h2>Section 2</h2>
        <p>Content</p>
        <ApiHw />
      </Section>
    </main>
  );
}
export default Main;
