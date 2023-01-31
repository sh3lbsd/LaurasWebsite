import Head from "next/head";
import Image from "@/views/Image";
import Strapi from "@/network/strapi";
import Card from "@/views/Card";
import styles from "@/views/styles/video.module.scss";



const query = `
query video {
    video {
      data {
        attributes {
          card {
            title
            description
            links {
              url
              label
              style
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
      video: {
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

export default function Videos({ attributes }) {
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
      <Card {...attributes.card[0]}/>  
      <Card {...attributes.card[1]}/>  
      </main>
    </>
  );
}