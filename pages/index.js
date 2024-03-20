import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/layout.module.css";
import { SocialIcon } from "react-social-icons";
import { getSortedPostsData } from "../lib/posts";
import Date from '../components/date';

const name = "Chinmay Sawaji";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent writings</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/writing/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}