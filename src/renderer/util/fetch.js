import fetch from "isomorphic-fetch";

const defaults = {
  method: 'GET',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export default function createFetch(url, options = null) {
  return fetch(url, {
    ...defaults,
    ...options,
    headers: {
      ...defaults.headers,
      ...(options && options.headers),
    },
  });
}
