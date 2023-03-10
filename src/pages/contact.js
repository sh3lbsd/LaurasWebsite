import Head from "next/head";
import Image from "@/views/Image";
import styles from "@/styles/about.module.scss";
import Strapi from "@/network/strapi";
import Card from "@/views/Card";

const query = `
query contact {
  contact {
    data {
      attributes {
        card {
          title
          description
          images {
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
}
`;

export async function getServerSideProps(context) {
  const response = await Strapi.query(query);
  const {
    data: {
      contact: {
        data: { attributes },
      },
    },
  } = response;
  return {
    props: {
      // will be passed to the page component as props
      attributes,
    },
  };
}

export default function Contact({ attributes }) {
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
      <Card {...attributes.card[0]} />
      </main>
    </>
  );
}
