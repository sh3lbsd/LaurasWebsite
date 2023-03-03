import Head from "next/head";
import styles from "@/styles/home.module.scss";
import Strapi from "@/network/strapi";
import Card from "@/views/Card";
import Carousel from "@/views/Carousel";
import CircleBackground from "@/views/CurrentDay";

const query = `query home {
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
          style
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
          links {
            url
            label
            title
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
        gallery {
          style
          images {
            data {
              id
              attributes {
                name
                width
                height
                url
                caption
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}`;

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
        <Carousel {...attributes.carousel} />

        <CircleBackground>
          <p>
            {new Date().toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p> {attributes.quote.messages[0].text} </p>
        </CircleBackground>

        <span className={styles.row}>
          

          <Card
            {...attributes.summary}
            className={styles.width}
            animation="fadeup"
          />
          <Card
            {...attributes.upcoming}
            className={styles.width}
            animation="fadeup"
          />
          <Card
            {...attributes.training}
            className={styles.width}
            animation="fadeup"
          />
          </span>
          <Carousel {...attributes.gallery} />

      </main>
    </>
  );
}
