// export async function getKey(name) {}

/**
 * Save auth key in storage.
 * **/
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
/**
 * Takes the key parameter and retrieves the corresponding value from localStorage. If the key exists in the localStorage it will return a string. If the key does not 
 * exist in localStorage, it will return null.
 * @param {string} key 
 * @returns {object|null}
 */
export function load(key) {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    } catch {
      return null
    } 
  }

/**
 * Clears the key from localStorage.
 * @param {string} key 
 */
  
export function remove(key) {
    localStorage.removeItem(key);
  }


/**
 * Loads the token and fetches the login/ authorization information. 
 * @returns {object}
 */
export function headers() {
    const token = load("token");
  
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      'X-Noroff-API-Key': '72735a77-9e47-4c8a-889b-3ae8bdfd8904'
    }
  }
  

  /**
   * Makes an authorized fetch request by adding auth headers.
   * @param {string} url 
   * @param {object} options 
   * @returns {promise<Response}
   */
export async function authFetch(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: headers()
    })
  }

/**
 * Checks if the user is logged in by checking if there is a token in the localStorage.
 * @returns {boolean}
 */
export function isLoggedIn() {
    const token = load("token"); 
    return !!token;
}