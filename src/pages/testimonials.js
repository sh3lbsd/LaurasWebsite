import Head from "next/head";
import styles from "@/styles/about.module.scss";
import Strapi from "@/network/strapi";
import Card from "@/views/Card";


const query = `
query testimonial {
  testimonial {
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
      testimonial: {
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

export default function Testimonials({ attributes }) {
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
        <Card {...attributes.card[1]} />
        <Card {...attributes.card[2]} />
        <Card {...attributes.card[3]} />
        <Card {...attributes.card[4]} />
        <Card {...attributes.card[5]} />
        <Card {...attributes.card[6]} />
        <Card {...attributes.card[7]} />
        <Card {...attributes.card[8]} />
        <Card {...attributes.card[9]} />
        <Card {...attributes.card[10]} />
        <Card {...attributes.card[11]} />
        <Card {...attributes.card[12]} />
        <Card {...attributes.card[13]} />
        <Card {...attributes.card[14]} />
        <Card {...attributes.card[15]} />
        <Card {...attributes.card[16]} />
        <Card {...attributes.card[17]} />
      </main>
    </>
  );
}
