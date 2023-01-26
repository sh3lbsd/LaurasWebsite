const STRAPI_URL = "http://localhost:1337";

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

function fetchStrapiContentRest(name) {
  return fetch(`${STRAPI_URL}/api/${name}`).then((r) => r.json());
}

const API = {
  query,
  fetchStrapiContentRest,
};

export default API;
