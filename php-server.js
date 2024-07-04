import phpServer from "php-server";

const server = await phpServer({
  open: true,
  base: "./site",
  port: 3002,
  hostname: "localhost",
});
console.log(`PHP server running at ${server.url}`);