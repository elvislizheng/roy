import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import Link from "next/link";
import Nav from "./Nav";
import styles from "./styles.module.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Roy Li — University of Toronto",
  description:
    "Personal homepage of Roy Li — Honours BA student at the University of Toronto, History Specialist and Political Science Minor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <body>
        <div className={styles.page}>
          <header className={styles.header}>
            <Link href="/" className={styles.mark}>
              Roy <span className={styles.markSurname}>Li</span>
            </Link>
            <Nav />
          </header>

          <main className={styles.main}>{children}</main>

          <footer className={styles.footer}>
            <span>© {new Date().getFullYear()} Roy Li</span>
            <span>
              Background:{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Toronto_University_College_1.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                University College, U of T
              </a>{" "}
              (CC BY-SA 4.0)
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
