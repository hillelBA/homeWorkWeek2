import { ReactNode } from "react";
import styles from "./Section.module.css";

function Section({ children }: { children: ReactNode }) {
  return <section className={styles.section}
  >{children}</section>;
}
export default Section;
