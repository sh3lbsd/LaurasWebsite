import Head from "next/head";
import Image from "@/views/Image";
import styles from "@/styles/about.module.scss";
import Strapi from "@/network/strapi";

const query = `
query about {
  about {
    data {
      id
      attributes {
        description
        image {
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
      about: {
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

export default function About({ attributes }) {
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
        <Image {...attributes.image} />
        <p>{attributes.description}</p>
      </main>
    </>
  );
}
