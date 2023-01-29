import Link from "next/link";
import styles from "@/views/styles/navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ol>
    </nav>
  );
}
