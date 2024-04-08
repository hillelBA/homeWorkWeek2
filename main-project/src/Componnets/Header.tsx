import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/api">API</a>
          </li>
        </ul>
      </nav>
      <h1>My App</h1>
    </header>
  );
}
export default Header;
