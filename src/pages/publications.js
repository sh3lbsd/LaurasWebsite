import Head from "next/head";
import styles from "@/styles/about.module.scss";
import Strapi from "@/network/strapi";
import Article from "@/views/Article";

const query = `
query publication {
    publication {
      data {
        attributes {
          article {
            paragraphs {
              title
              text
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
            link {
              url
              label
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
      publication: {
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

export default function Publications({ attributes }) {
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
        <Article {...attributes.article[0]} />
        <Article {...attributes.article[1]} />
      </main>
    </>
  );
}
