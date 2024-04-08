import { ReactNode } from "react";
import styles from "./Section.module.css";

function Section({ children, name }: { children: ReactNode; name: string }) {
  return (
    <section className={styles.section} id={name}>
      {children}
    </section>
  );
}
export default Section;
