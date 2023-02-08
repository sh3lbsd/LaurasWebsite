import Head from "next/head";
import styles from "@/styles/home.module.scss";
import Strapi from "@/network/strapi";
import Card from "@/views/Card";
import Carousel from "@/views/Carousel";

const query = `
query home {
  home {
    data {
      attributes {
        quote {
          date
          messages {
            text
          }
        }
        summary {
          title
          description
          style
          expand {
            url
            label
            style
          }
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
        training {
          title
          description
          style
          links {
            url
            label
          }
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
  const handleClick = () => setClamped(!clamped);
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

function CircleBackground({ children }) {
  return (
    <span className={styles.shapeContainer}>
      <span className={styles.shape1}>
        <div className={styles.container}>
          <div className={styles.yellow}></div>
          <div className={styles.orange}></div>
          <div className={styles.blue}></div>
          <div className={styles.pink}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </span>
      <span className={styles.absoluteCenter}>{children}</span>
    </span>
  );
}

export default function Home({ attributes }) {
  if (!attributes) return "Loading...";
  const handleClick = () => setClamped(!clamped);

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
        <Carousel {...attributes.carousel} />

        <CircleBackground>
          <p> {new Date().toLocaleDateString()} </p>
          <p> {attributes.quote.messages[0].text} </p>
        </CircleBackground>

        <span className={styles.row}>
          <Card {...attributes.summary} className={styles.width} />
          <Card {...attributes.upcoming} className={styles.width} />
          <Card {...attributes.training} className={styles.width} />
        </span>
      </main>
    </>
  );
}
