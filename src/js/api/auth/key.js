// export async function getKey(name) {}


// Auth key save in storage
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
export function load(key) {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    } catch {
      return null
    } 
  }
  
export function remove(key) {
    localStorage.removeItem(key);
  }


  // Auth key
export function headers() {
    const token = load("token");
  
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  
export async function authFetch(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: headers()
    })
  }

/*
function load(key) {
    return localStorage.getItem(key); 
}
*/

/*
function isLoggedIn() {
    const token = load("token"); 
    return !!token;
}
*/