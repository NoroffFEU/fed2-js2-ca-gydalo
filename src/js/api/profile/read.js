export async function readProfile(username) {

}

export async function readProfiles(limit, page) {}

import { authFetch } from "/fed2-js2-ca-gydalo/src/js/api/auth/key.js";
import { API_SOCIAL_PROFILES } from "/fed2-js2-ca-gydalo/src/js/api/constants.js";

/**
 * Fetches the profiles from the API.
 * @returns {Promise<Array} - A promise that resolves to an array of profiles from the API.
 */
export async function getProfiles() {
    const updateProfileURL = `${API_SOCIAL_URL}`;
    
    const response = await authFetch(updateProfileURL)
  
    return await response.json();
  }
  
/**
 * Fetches a single profile from the API based on the id of the profile.
 * @param {string} name - The name of the profile fetched.
 * @returns {Promise<object} - A promise that resolves to the profile data for the specified name.
 */
  export async function getProfile(name) {
    if (!name) {
      throw new Error("Get requires a name");
    }
  
    const getProfileURL = `${API_SOCIAL_PROFILES}$/${name}`;
    
    const response = await authFetch(getProfileURL)
  
    return await response.json();
  }
