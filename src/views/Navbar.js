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
        <li>
          <Link href="/consultations">Consultations</Link>
        </li>
        <li>
          <Link href="/publications">Publications</Link>
        </li>
        <li>
          <Link href="/videos">Videos</Link>
        </li><li>
          <Link href="/testimonials">Testimonials</Link>
        </li><li>
          <Link href="/contact">Contact</Link>
        </li>
      </ol>
    </nav>
  );
}
