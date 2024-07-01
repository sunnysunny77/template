import phpServer from "php-server";

const server = await phpServer({
    port: 3000,
    base: "./site",
    open: true
});