"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./data";
import styles from "./styles.module.css";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href || pathname.startsWith(link.href + "/");
        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? styles.navActive : undefined}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
