import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ol>
        <ol>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ol>
      </nav>
      {children}
    </>
  );
}
