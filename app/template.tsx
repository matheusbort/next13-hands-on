import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Pokemon with <a href="https://nextjs.org">Next.js 13!</a>
          </h1>

          <p className={styles.description}>
            Components{" "}
            <code className={styles.code}>
              <a href="/server">server streaming</a>
            </code>{" "}
            /{" "}
            <code className={styles.code}>
              <a href="/client">client side </a>
            </code>
          </p>
          {children}
        </main>
      </div>
      <footer className={styles.footer}>
        <a rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/logo.webp" alt="Logo" width={80} height={32} />
          </span>
        </a>
      </footer>{" "}
    </>
  );
}
