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
        <p>
          Hi, I'm Giorgi. Among the plethora of names friends call me, Gio is
          the most popular.
        </p>
        <p>
          Currently I'm taking some time off to recharge at home in Tbilisi,
          Georgia and will be joining an amazing team at{" "}
          <a href="https://pipe.com">Pipe</a> very soon! If you don't know about
          Pipe, go{" "}
          <a href="https://alexdanco.com/2021/03/10/pipe-it-platforms-funding-and-the-future/">
            check it out
          </a>{" "}
          and be ready to have your mind blown.
        </p>
        <p>
          I spent the last 4 years at <a href="https://plaid.com">Plaid</a> in
          San Francisco - the time I cherish dearly.
        </p>
        <p>
          I studied Computer Science at{" "}
          <a href="https://www.gatech.edu">Georgia Tech</a> and eventually fell
          in love with ATL.
        </p>
        <p>
          One of the things I'm proud of from my college years is co-founding{" "}
          <a href="https://medium.com/@gtkesh/do-epic-shit-a2892dade3cb">
            hackTbilisi
          </a>{" "}
          - the first ever college hackathon in my home country with my amazing
          friends.
        </p>
        <p>
          Some of my late nights and early mornings are captured{" "}
          <a href="https://soundcloud.com/gtkesh">here.</a>
        </p>
        <p>Currently stuck in between 🇬🇪 & 🇺🇸</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}
      </section>
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
