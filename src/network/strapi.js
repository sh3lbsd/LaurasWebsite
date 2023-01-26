const {
  NEXT_PUBLIC_STRAPI_HOST,
  NEXT_PUBLIC_STRAPI_PORT,
  NEXT_PUBLIC_STRAPI_PROTOCOL,
} = process.env;

const PORT = NEXT_PUBLIC_STRAPI_PORT ? `:${NEXT_PUBLIC_STRAPI_PORT}` : "";

const STRAPI_URL = `${NEXT_PUBLIC_STRAPI_PROTOCOL}://${NEXT_PUBLIC_STRAPI_HOST}${PORT}`;

function query(query) {
  return fetch(`${STRAPI_URL}/graphql`, {
    method: "POST",
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      Accept: "application/json",
      Connection: "keep-alive",
      DNT: 1,
    },
    body: JSON.stringify({
      query: query.trim(),
    }),
  }).then((r) => r.json());
}

const Strapi = {
  query,
};

export default Strapi;
