import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Senior Software Engineer with 10+ years of experience in the development of enterprise software. Proven ability to lead and mentor teams, and to deliver high-quality software on time and within budget.</p>
      </section>
    </Layout>
  );
}
