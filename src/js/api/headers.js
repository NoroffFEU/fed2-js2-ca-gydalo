import { API_KEY } from "/fed2-js2-ca-gydalo/src/js/api/constants.js";

export function headers() {
  const headers = new Headers();

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  return headers;
}
