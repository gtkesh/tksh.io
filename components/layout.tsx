import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";
import Toggle from "react-toggle";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import "react-toggle/style.css";
import { useCallback, useEffect, useState } from "react";

const name = "Giorgi Tkeshelashvili";
const profession = "Software Engineer";
export const siteTitle = "Giorgi Tkeshelashvili";

function DarkModeToggle({}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggle = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }, [theme]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <label>
      <Toggle
        defaultChecked={false}
        onChange={toggle}
        icons={false} // TODO: add custom icons
      />
    </label>
  );
}

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Souvenir-Demi.otf"
          as="font"
          crossOrigin=""
        />
        <meta name="description" content="Giorgi Tkeshelashvili" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={220}
              width={240}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <DarkModeToggle />
            <h3 className={utilStyles.headingLg}>{profession}</h3>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={220}
                  width={240}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
