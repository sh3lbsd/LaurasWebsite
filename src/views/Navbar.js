import Link from "next/link";
import styles from "@/views/styles/navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo} />
      <ol>
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
        </li>
        <li>
          <Link href="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/videos">Videos</Link>
        </li>
        <li>
          <Link href="/trainings">Trainings</Link>
        </li>
        <li>
          <Link href="/welcome">Welcome</Link>
        </li>
      </ol>
      <Image
        src="/icons/hamburger.svg"
        alt="open menu"
        className={styles.hamburger}
        width={30}
        height={30}
      />
    </nav>
  );
}
