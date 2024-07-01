import phpServer from 'php-server';

const server = await phpServer({
    port: 3000,
    base: "./",
    open: true,
    env: {},
});
