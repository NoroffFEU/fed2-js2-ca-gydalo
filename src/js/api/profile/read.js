export async function readProfile(username) {

}

export async function readProfiles(limit, page) {}

import { authFetch } from "/fed2-js2-ca-gydalo/src/js/api/auth/key.js";
import { API_SOCIAL_PROFILES } from "/fed2-js2-ca-gydalo/src/js/api/constants.js";


export async function getProfiles() {
    const updateProfileURL = `${API_SOCIAL_URL}`;
    
    const response = await authFetch(updateProfileURL)
  
    return await response.json();
  }
  

  export async function getProfile(name) {
    if (!name) {
      throw new Error("Get requires a name");
    }
  
    const getProfileURL = `${API_SOCIAL_PROFILES}$/${name}`;
    
    const response = await authFetch(getProfileURL)
  
    return await response.json();
  }

console.log('hei')