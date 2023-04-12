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
        <p>Hi, my name is Javier Flores Cardenas. I'm a full-stack developer. You can contact me on{' '}
          <a href='https://twitter.com/jffc_dev' target='_blank'>Twitter</a> or <a href='https://github.com/jffc-dev' target='_blank'>Github</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}