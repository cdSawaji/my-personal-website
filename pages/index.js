import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/layout.module.css";
import { SocialIcon } from "react-social-icons";

const name = "Chinmay Sawaji";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt=""
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <div className={styles.socialBox}>
        <SocialIcon
          url="https://linkedin.com/in/chinmaysawaji"
          style={{ height: 28, width: 28 }}
        />
        <SocialIcon
          url="https://github.com/cdSawaji"
          style={{ height: 28, width: 28 }}
        />
      </div>
      <section className={utilStyles.headingMd}>
        <p>
          Hey there, I'm Chinmay Sawaji, a software engineer with a passion for
          building awesome products and exploring various topics. I've been in
          the industry for more than 10 years, and I'm excited to share my
          experience and professional background with you. If you're interested
          in checking out my latest resume, you can download it{" "}
          <Link href="/documents/chinmay_sawaji.pdf">here</Link>. Thanks for
          stopping by!
        </p>
      </section>
    </Layout>
  );
}
