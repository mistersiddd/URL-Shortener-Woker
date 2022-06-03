const redirects = new Map([
  ['google', 'https://www.google.com/'],
  ['yahoo', 'https://au.yahoo.com/'],
])
addEventListener('fetch', event => {
  event.respondWith(handleRedirect(event.request));
})
async function handleRedirect(request) {
  let pathname = new URL(request.url).pathname.replace("/","");
  let location = redirects.get(pathname);
  return location 
    ? Response.redirect(location, 301) 
    : new Response("Not Found", {status: 404})
}