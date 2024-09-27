// This function controls which JavaScript file is loaded on which page
// In order to add additional pages, you will need to implement them below
// You may change the behaviour or approach of this file if you choose

export default async function router(pathname = window.location.pathname) {

  console.log("Current pathname:", pathname);

  const normalizedPath = pathname.replace(/\/$/, '');

  console.log("Current pathname:", pathname);
  console.log("Normalized pathname:", normalizedPath);

  switch (normalizedPath) {
    case "/fed2-js2-ca-gydalo/":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/home.js");
      await import("/fed2-js2-ca-gydalo/src/js/router/views/buttons.js");
      break;
    case "/fed2-js2-ca-gydalo/index.html":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/home.js");
      await import("/fed2-js2-ca-gydalo/src/js/router/views/buttons.js");
      break;
    case "/fed2-js2-ca-gydalo/auth":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/auth.js");
      break;
    case "/fed2-js2-ca-gydalo/auth/login":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/login.js");
      break;
    case "/fed2-js2-ca-gydalo/auth/register":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/register.js");
      break;
    case "/fed2-js2-ca-gydalo/post":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/post.js");
      break;
    case "/fed2-js2-ca-gydalo/post/edit":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/postEdit.js");
      break;
    case "/fed2-js2-ca-gydalo/post/create":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/postCreate.js");
      break;
    case "/fed2-js2-ca-gydalo/profile":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/profile.js");
      break;
    default:
      await import("/fed2-js2-ca-gydalo/src/js/router/views/notFound.js");
  }
}




/*
export default async function router(pathname = window.location.pathname) {

  console.log("Current pathname:", pathname);
  switch (pathname) {
    case "/":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/home.js");
      await import("/fed2-js2-ca-gydalo/src/js/router/views/buttons.js");
      break;
    case "/index.html":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/home.js");
      await import("/fed2-js2-ca-gydalo/src/js/router/views/buttons.js");
      break;
    case "/auth":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/auth.js");
      break;
    case "/auth/login/":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/login.js");
      break;
    case "/auth/login/index.html":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/login.js");
      break;
    case "/auth/register/":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/register.js");
      break;
    case "/post/index.html":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/post.js");
      break;
    case "/edit/index.html":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/postEdit.js");
      break;
    case "/post/create/index.html":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/postCreate.js");
      break;
    case "/profile/index.html":
      await import("/fed2-js2-ca-gydalo/src/js/router/views/profile.js");
      break;
      case "/profile/":
        await import("/fed2-js2-ca-gydalo/src/js/router/views/profile.js");
        break;
    default:
      await import("/fed2-js2-ca-gydalo/src/js/router/views/notFound.js");
  }
}

*/