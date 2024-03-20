import Head from "next/head";
import styles from "../styles/layout.module.css";
import navStyles from "../styles/topnav.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export const siteTitle = "Chinmay Sawaji's personal website";
export const name = "Chinmay Sawaji";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/chinmay_sawaji.ico" />
        <meta
          name="description"
          content="Chinmay Sawaji's personal website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <TopNav />
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt=""
        />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export function TopNav() {
  return (
    <div className={navStyles.navmenu}>
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/writing">Writing</a>
      <a href="/about">About</a>
    </div>
  ); 
}
