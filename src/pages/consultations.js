import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/consultations.module.scss";
import Strapi from "@/network/strapi";
import Card from "@/views/Card";
import Video from "@/views/Video";

const query = `
query consultation {
    consultation {
      data {
        attributes {
          card1 {
            title 
            description
          }
          card2 {
            title 
            description
          }
          card3 {
            title 
            description
          }
          card4 {
            title 
            description
          }
          card5 {
            url
            label
          }
          header {
            title
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
  }
`;

export async function getServerSideProps(context) {
  const response = await Strapi.query(query);
  const {
    data: {
      consultation: {
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

export default function Consultations({ attributes }) {
  if (!attributes) return "Loading...";
  const { header } = attributes;
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
        <h1>{header.title}</h1>
        <Image
          src={`http://localhost:1337${header.image.data.attributes.url}`}
          alt={header.image.data.attributes.alternativeText || "Image"}
          width={header.image.data.attributes.width}
          height={header.image.data.attributes.height}
        />
        <Card {...attributes.card1} />
        <Card {...attributes.card2} />
        <Card {...attributes.card3} />
        <Card {...attributes.card4} />
        <Video {...attributes.card5} />
      </main>
    </>
  );
}
