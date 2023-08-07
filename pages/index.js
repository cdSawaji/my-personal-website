import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there, I'm Chinmay Sawaji, a software engineer with a passion for building awesome products and exploring various topics. I've been in the industry for more than 10 years, and I'm excited to share my experience and professional background with you. If you're interested in checking out my latest resume, you can download it <Link href="/documents/chinmay_sawaji.pdf">here</Link>. Thanks for stopping by!</p>
      </section>
    </Layout>
  );
}
