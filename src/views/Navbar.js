import Link from "next/link";
import styles from "@/views/styles/navbar.module.scss";
import Image from "next/image";

const links = [
  {
    href: "/about",
    label: "About",
    disabled: true,
  },
  {
    href: "/consultations",
    label: "Consultations",
    disabled: true,
  },
  {
    href: "/publications",
    label: "Publications",
    disabled: true,
  },
  {
    href: "/videos",
    label: "Videos",
    disabled: true,
  },
  {
    href: "/testimonials",
    label: "Testimonials",
    disabled: true,
  },
  {
    href: "/contact",
    label: "Contact",
    disabled: true,
  },
  {
    href: "/trainings",
    label: "Trainings",
    disabled: true,
  },
  {
    href: "/welcome",
    label: "Welcome",
    disabled: true,
  },
].filter((link) => !link.disabled);

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo} />
      <ol>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ol>
      {/* <Image
        src="/icons/hamburger.svg"
        alt="open menu"
        className={styles.hamburger}
        width={30}
        height={30}
      /> */}
    </nav>
  );
}
