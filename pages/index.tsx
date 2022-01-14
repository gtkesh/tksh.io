import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Gio.</p>
        <p>
          Currently I work at
          <a href="https://pipe.com"> Pipe</a> 🚀.
        </p>
        <p>
          Before that spent 4 years at <a href="https://plaid.com">Plaid</a> in
          San Francisco - the time I cherish dearly.
        </p>
        <p>
          Some of my late nights and early mornings are captured{" "}
          <a href="https://soundcloud.com/gtkesh">here.</a>
        </p>
        <p>Stuck in between 🇬🇪 & 🇺🇸.</p>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      ></section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
