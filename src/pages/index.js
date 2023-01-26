import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Strapi from "@/network/strapi";

const query = `
query home {
  home {
    data {
      attributes {
        summary {
          title
          description
        }
      }
    }
  }
}
`;

export async function getServerSideProps(context) {
  const response = await Strapi.query(query);
  const {
    data: {
      home: {
        data: { attributes },
      },
    },
  } = response;
  return {
    props: {
      attributes,
    },
  };
}

export default function Home({ attributes }) {
  if (!attributes) return "Loading...";
  return (
    <>
      <Head>
        <title>
          hairharmonics | The Ultimate in Holistic Hair Care &amp; Training
        </title>
        <meta
          name="description"
          content="hairharmonics | The Ultimate in Holistic Hair Care & Training"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>{attributes.summary.title}</h1>
        <p>{attributes.summary.description}</p>
      </main>
    </>
  );
}
