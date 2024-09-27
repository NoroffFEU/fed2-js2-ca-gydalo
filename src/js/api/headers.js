import { API_KEY } from "/fed2-js2-ca-gydalo/src/js/api/constants.js";

/**
 * Creates and returns a headers object, including the API key.
 * @returns {Headers} - A Headers object containing the X-Noroff-API-Key if the API key is available.
 */
export function headers() {
  const headers = new Headers();

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  return headers;
}
