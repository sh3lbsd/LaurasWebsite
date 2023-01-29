import Head from "next/head";
import styles from "@/styles/home.module.scss";
import Strapi from "@/network/strapi";
import Card from "@/views/Card";

const query = `
query home {
  home {
    data {
      attributes {
        summary {
          title
          description
          expand {
            url
            label
          }
          style
        }
        upcoming {
          title
          description
        }
        carousel {
          data {
            id
            attributes {
              name
              width
              height
              url
              alternativeText
            }
          }
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
        <Card {...attributes.summary} />
        <Card {...attributes.upcoming} />
      </main>
    </>
  );
}
